<template>
  <div class="chat-container h-100vh">
    <SideNav />
    <div>
      <h1>Chat</h1>
      <div class="container">
        <Conversations :conversations="conversations" @conversationSelected="conversationSelected" />
        <Conversation :messages="selectedConversationMessages" :conversationId="selectedConversationId" />
      </div>
    </div>
  </div>
</template>

<script>
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
    }
  },
  methods: {
    conversationSelected: function (conversation) {
      socket.emit('selectConversation', { conversationId: conversation.conversationId })
      socket.on('messages', (messages) => {
        this.selectedConversationMessages = messages
        this.selectedConversationId = conversation.conversationId
      })
    }
  },
  computed: { },
  created() { 
    socket.on('message', (message) => {
      console.log('vue got a message! ', message)
    })

    axios.get('http://localhost:3000/custom/init/4')
      .then((response) => {
        this.conversations = response.data
      })
      .catch((err) => {
        console.log('err ', err)
      })
  }
}
</script>