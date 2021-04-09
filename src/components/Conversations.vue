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
    <div v-for="conversation in conversations" :key="conversation.id">
      <div
        class="border-topless h-40 pointer"
        @click="selectConversation(conversation)"
      >{{ conversationName(conversation) }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
      showNewConversation: false
    }
  },
  computed: {
    ...mapGetters('user', ['user'])
  },
  methods: {
    selectConversation: function (conversation) {
      console.log('conversation, ', conversation.conversationId)
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
