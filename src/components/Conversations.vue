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
          :key="friend.userId"
          :value="friend.userId"
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
    conversationComputedTest: function () {
      return 'conversationComputedTest'
    }
  },
  methods: {
    selectConversation: function (conversation) {
      this.$emit('conversationSelected', conversation)
    },
    startNewConversation: function (friendId) {
      this.$emit('startNewConversation', friendId)
    },
    toggleNewConversation: function () {
      this.showNewConversation = !this.showNewConversation
    },
    conversationName: function (conversation) {
      if (conversation.name && conversation.name.length) {
        return conversation.name
      }
      return conversation
    }
  }
}
</script>
