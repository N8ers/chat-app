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

import axios from 'axios'

import socket from '@/socket.js'

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
      conversations: [],
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
    getConversations: function () {
      axios.get(`http://localhost:3000/custom/init/${this.user.userId}`)
      .then((response) => {
        this.conversations = response.data
      })
      .catch((err) => {
        console.log('err ', err)
      })
    },
    createConversation: function () {
      return axios.post('http://localhost:3000/conversations')
      .then((res) => res.data)
      .catch((err) => err)
    },
    createConversationMember: function (userId, conversationId) {
      return axios.post('http://localhost:3000/conversation_members', {
        user_id: userId,
        conversation_id: conversationId
      })
      .then((res) => res.data)
      .catch((err) => err)
    },
    startNewConversation: async function (friendId) {
      console.log('startNewConversation: ', friendId)

      // post conversation
      const conversation = await this.createConversation()
      console.log('conversation', conversation)

      // post conversation_members
      await this.createConversationMember(friendId, conversation[0].id)
      await this.createConversationMember(this.user.userId, conversation[0].id)

      this.getConversations();
    }
  },
  computed: { 
    ...mapState('user', {
      user: state => state.user,
      friends: state => state.friends
    })
  },
  created() { 
    socket.on('message', (message) => {
      console.log('vue got a message! ', message)
    })
    this.getConversations()
    this.$store.dispatch('user/getFriends');
  },
  mounted() { }
}
</script>