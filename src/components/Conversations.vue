<template>
  <div>
    <div class="border">
      Conversations: 
      <button @click="toggleNewConversation">+</button>
    </div>
    <div v-if="showNewConversation" class="border">
      <span>select friend: </span>
      <select @change="startNewConversation($event.target.value)">
        <option 
          v-for="friend in friends"
          :key="friend.user_id"
          :value="friend.user_id"
          >{{ friend.username }}</option>
      </select>
    </div>
    <div v-for="conversation in conversations" :key="conversation.conversationId">
      <div
        class="border-topless h-40 pointer"
        :class="{ 'selected-conversation': conversation.conversationId === this.selectedConversationId }"
        @click="selectConversation(conversation)"
      >{{ conversationName(conversation) }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Conversations',
  props: {
    conversations: {
      type: Array
    },
    friends: {
      type: Array
    }
  },
    data: function () {
    return {
      showNewConversation: false,
      selectedConversationId: null
    }
  },
  computed: {
    ...mapState('user', {
      user: state => state.user
    })
  },
  methods: {
    selectConversation: function (conversation) {
      this.selectedConversationId = conversation.conversationId
      this.$emit('conversationSelected', { conversation_id: conversation.conversationId })
    },
    startNewConversation: function (friendId) {
      console.log('startnew',friendId)
      this.$emit('startNewConversation', friendId)
    },
    toggleNewConversation: function () {
      this.showNewConversation = !this.showNewConversation
    },
    conversationName: function (conversation) {
      if (conversation.conversationName && conversation.conversationName.length) {
        return conversation.conversationName
      }
      return conversation.friendUsername
    }
  }
}
</script>
