<template>
  <div>
    <h1>Chat</h1>
    <div class="container">
      <Conversations :conversations="conversations" @conversationSelected="conversationSelected" />
      <Conversation :messages="selectedConversationMessages" :conversationId="selectedConversationId" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import Conversations from '@/components/Conversations.vue'
import Conversation from '@/components/Conversation.vue'

export default {
  name: 'Chat',
  components: {
    Conversations,
    Conversation
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
      axios.get(`http://localhost:3000/custom/selectConversation/${conversation.conversationId}`)
      .then((response) => {
        this.selectedConversationMessages = response.data
        this.selectedConversationId = conversation.conversationId
      })
      .catch((err) => {
        console.log('err ', err)
      })
    }
  },
  computed: { },
  created() {
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