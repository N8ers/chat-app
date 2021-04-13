<template>
  <div class="auth-container">
    <div class="chat-header">CHAT</div>

    <div class="auth-body">
      <div class="border auth-form">
      <h1>Sign In</h1>
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="****" />
        <button @click="signIn" type="submit">sign in</button>
      </form>
    </div>

    <div class="border">
      <h1>A safe, secure means of talking to your friends or strangers</h1>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Auth',
  components: {
  },
  data: function () {
    return {

    }
  },
  methods: {
    signIn: function () {
      this.$router.push('/chat')
    }
  },
  computed: {},

}
</script>