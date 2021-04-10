<template>
  <div class="chat-container h-100vh">
    <SideNav />
    <div>
      <h1>Chat</h1>
      <div v-if="showConversations" class="container">
        <Conversations 
          :conversations="conversations"
          :friends="friends" 
          @conversationSelected="conversationSelected" 
          @startNewConversation="startNewConversation"
        />
        <Conversation :messages="selectedConversationMessages" :conversationId="selectedConversationId" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import socket from '@/socket.js'
import helpers from '@/helpers/axiosRequests.js'

import SideNav from '@/components/SideNav.vue'
import Conversation from '@/components/Conversation.vue'
import Conversations from '@/components/Conversations.vue'

export default {
  name: 'Chat',
  components: {
    SideNav,
    Conversation,
    Conversations
  },
  data: function () {
    return {
      selectedConversationId: null,
      selectedConversationMessages: [],
      showConversations: true
    }
  },
  methods: {
    conversationSelected: function (conversation) {
      console.log('conversation', conversation)
      socket.emit('selectConversation', { conversation_id: conversation.conversation_id })
      socket.on('messages', (messages) => {
        this.selectedConversationMessages = messages
        this.selectedConversationId = conversation.conversation_id
      })
    },
    toggleShowConversations: function () {
      this.showConversations = !this.showConversations
    },
    startNewConversation: async function (friendId) {
      console.log('startNewConversation: ', friendId)

      // post conversation
      const conversation = await helpers.createConversation()

      // post conversation_members
      await helpers.createConversationMember(friendId, conversation[0].id)
      await helpers.createConversationMember(this.user.userId, conversation[0].id)

      this.$store.dispatch('user/getConversations');
    }
  },
  computed: { 
    ...mapState('user', {
      user: state => state.user,
      friends: state => state.friends,
      conversations: state => state.conversations
    })
  },
  created() { 
    socket.on('message', (message) => {
      console.log('vue got a message! ', message)
    })
    this.$store.dispatch('user/getFriends');
    this.$store.dispatch('user/getConversations');
  },
  mounted() { }
}
</script>