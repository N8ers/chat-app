<template>
  <div class="conversation-container">
    <div v-for="message in messages" :key="message.id">
      <div 
        class="h-30 message-container m-10"
        :class="{
          'message-friend': message.user_id !== user.userId, 
          'message-user': message.user_id === user.userId
        }"
        >
        <span 
          :class="{
            'message-friend-content': message.user_id !== user.userId, 
            'message-user-content': message.user_id === user.userId
          }"
        >{{ message.content }}</span>
        <div @click="deleteMessage(message)">        
          <font-awesome-icon icon="times" />
        </div>
      </div>
    </div>

    <form v-if="conversationId" @submit.prevent="sendMessage" class="new-message">
      <input type="text" v-model="newMessage" />
      <button type="submit">
        <font-awesome-icon icon="paper-plane" />
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    ...mapState('user', {
      user: state => state.user,
      friends: state => state.friends,
      conversations: state => state.conversations
    })
  },
  methods: { 
    sendMessage: function () {
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

