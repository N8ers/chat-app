<template>
  <div class="chat-container h-100vh">
    <SideNav />
    <div>
    <div class="chat-header">CHAT</div>
      <div v-if="showConversations" class="container">
        <Conversations 
          :conversations="conversations"
          :friends="friends" 
          @conversationSelected="conversationSelected" 
          @startNewConversation="startNewConversation"
          @toggleFriendsList="toggleFriendsList"
        />
        <Conversation v-if="showChat" :messages="selectedConversationMessages" :conversationId="selectedConversationId" />
      </div>

      <FriendsList v-else :friends="friends" />
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
import FriendsList from '@/components/FriendsList.vue'

export default {
  name: 'Chat',
  components: {
    SideNav,
    Conversation,
    Conversations,
    FriendsList
  },
  data: function () {
    return {
      selectedConversationId: null,
      selectedConversationMessages: [],
      showConversations: true,
      showChat: true
    }
  },
  methods: {
    conversationSelected: function (conversation) {
      socket.emit('selectConversation', { conversation_id: conversation.conversation_id })
      socket.on('messages', (messages) => {
        this.selectedConversationMessages = messages
        this.selectedConversationId = conversation.conversation_id
      })
    },
    toggleShowConversations: function () {
      this.showConversations = !this.showConversations
    },
    toggleFriendsList: function (bool) {
      this.showConversations = bool
    },
    startNewConversation: async function (friendId) {
      const conversation = await helpers.createConversation()
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
    this.$store.dispatch('user/getFriends');
    this.$store.dispatch('user/getConversations');
  }
}
</script>