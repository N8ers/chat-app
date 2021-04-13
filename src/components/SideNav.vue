<template>
  <div class="border side-nav">
    <router-link to="/friends" class="side-nav-router-link" active-class="active">
      <div class="side-nav-item">
        <font-awesome-icon icon="user-friends" class="side-nav-icon" />
        <div class="side-nav-text">Friends</div>
      </div>
    </router-link>

    <router-link to="/settings" class="side-nav-router-link" active-class="active">
      <div class="side-nav-item">
        <font-awesome-icon icon="cog" class="side-nav-icon" />
        <div class="side-nav-text">Settings</div>
      </div>
    </router-link>

    <router-link to="/chat" class="side-nav-router-link" active-class="active">
      <div class="side-nav-item">
        <font-awesome-icon icon="comments" class="side-nav-icon" />
        <div class="side-nav-text">Chat</div>
      </div>
    </router-link>

    <router-link to="/" class="side-nav-router-link" active-class="active">
      <div class="side-nav-item">
        <font-awesome-icon icon="sign-out-alt" class="side-nav-icon" />
        <div class="side-nav-text">LogOut</div>
      </div>
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