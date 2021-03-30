<template>
  <div class="border">
    <div>Chat</div>
    <router-link to="/friends">Friends</router-link> <br/>
    <router-link to="/settings">Settings</router-link> <br/>
    <router-link to="/chat">chat</router-link> <br/>
    <router-link to="/">LogOut</router-link>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  data: function () {
    return {
    }
  },
  methods: { },
  computed: { },
  created() { }
}
</script>