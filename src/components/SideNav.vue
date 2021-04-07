<template>
  <div class="border">

    <router-link class="border" to="/friends">
      <font-awesome-icon icon="user-friends" /> Friends
    </router-link> 
    
    <br/><br/>

    <router-link class="border" to="/settings">
      <font-awesome-icon icon="cog" /> Settings
    </router-link>

    <br/><br/>
    
    <router-link class="border" to="/chat">
      <font-awesome-icon icon="comments" /> Chat
    </router-link>

    <br/><br/>
    
    <router-link class="border" to="/">
      <font-awesome-icon icon="sign-out-alt" /> LogOut
    </router-link>
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