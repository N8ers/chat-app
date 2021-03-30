<template>
  <div v-if="$route.name !== 'Chat' && $route.name !== 'Friends'" id="nav">
    <router-link to="/">Auth</router-link> |
    <router-link to="/chat">Chat</router-link> |
    <router-link to="/settings">Settings</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import './scss/main.scss';
</style>
