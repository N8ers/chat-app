<template>
  <div class="conversations-wrapper">
    <div class="border add-conversation-icon">
      <div @click="showFriendsList">
        <font-awesome-icon icon="plus" />
      </div>
    </div>

    <div v-for="conversation in conversations" :key="conversation.conversationId">
      <div
        class="border-topless h-40 pointer conversation"
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
      // showNewConversation: false,
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
    startNewConversation: function () {
      this.$emit('startNewConversation')
    },
    hideConversationsList: function () {
      this.$emit('toggleFriendsList', false)
    },
    toggleNewConversation: function () {
      // this.showNewConversation = !this.showNewConversation
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
