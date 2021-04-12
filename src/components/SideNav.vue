<template>
  <div class="border side-nav">

    <router-link class="side-nav-item" active-class="active" to="/friends">
      <font-awesome-icon icon="user-friends" class="side-nav-icon" /> Friends
    </router-link> 
    
    <br/><br/>

    <router-link class="side-nav-item" active-class="active" to="/settings">
      <font-awesome-icon icon="cog" class="side-nav-icon" /> 
      <div>Settings</div>
    </router-link>

    <br/><br/>
    
    <router-link class="side-nav-item" active-class="active" to="/chat">
      <font-awesome-icon icon="comments" class="side-nav-icon" /> Chat
    </router-link>

    <br/><br/>
    
    <router-link class="side-nav-item" active-class="active" to="/">
      <font-awesome-icon icon="sign-out-alt" class="side-nav-icon" /> LogOut
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