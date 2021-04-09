<template>
  <div class="conversation-container">
    <div v-for="message in messages" :key="message.id">
      <div 
        class="border h-30 message-container m-10"
        :class="{
          aqua: message.user_id !== this.user.userId, 
          grass: message.user_id === this.user.userId
        }"
        >
        <span>{{ message.username }}: </span>
        <span>{{ message.content }}</span>
        <button @click="deleteMessage(message)">X</button>
      </div>
    </div>

    <form v-if="conversationId" @submit.prevent="sendMessage">
      <input type="text" v-model="newMessage" />
      <button type="submit">send</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

import socket from '@/socket.js'

export default {
  name: 'Conversation',
  props: {
    messages: {
      type: Array,
      default: function () {
        return []
      }
    },
    conversationId: {
      type: Number,
      default: null
    }
  },
  data: function () {
    return {
      newMessage: '',
    }
  },
  computed: { 
    ...mapGetters('user', ['user'])
  },
  methods: { 
    sendMessage: function () {
      // user id is hard coded for now until we do auth stuff
      let payload = {
        user_id: this.user.userId,
        conversation_id: this.conversationId,
        content: this.newMessage
      }
      axios.post('http://localhost:3000/messages', payload)
        .then(() => {
          this.newMessage = ''
          // emit socket for latest data
          socket.emit('selectConversation', { conversation_id: this.conversationId })
        })
        .catch((err) => console.log('ERROR: ', err))
    },
    deleteMessage: function (message) {
      axios.delete(`http://localhost:3000/messages/${message.id}`)
        .then(() => {
          // emit socket for latest data
          socket.emit('selectConversation', { conversation_id: this.conversationId })
        })
        .catch((err) => console.log('ERROR: ', err))
    }
  }
}
</script>

