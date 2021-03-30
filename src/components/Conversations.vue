<template>
  <div>
    <div class="border">
      Conversations: 
      <button @click="toggleNewConversation">+</button>
    </div>
    <div v-if="showNewConversation" class="border">
      <span>select friend: </span>
      <select>
        <option v-for="friend in friends" :key="friend.userId">{{ friend.username }}</option>
      </select>
    </div>
    <div v-for="conversation in conversations" :key="conversation.id">
      <div 
        class="border-topless h-40 pointer" 
        @click="selectConversation(conversation)"
      >{{ conversation.name }}</div>
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
    toggleNewConversation: function () {
      this.showNewConversation = !this.showNewConversation
    }
  }
}
</script>
