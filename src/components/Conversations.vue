<template>
  <div>
    <div class="border">Conversations:</div>
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
    }
  }
}
</script>
