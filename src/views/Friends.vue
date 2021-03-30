<template>
  <div class="chat-container h-100vh">
    <SideNav />

    <div>
      <h1>I am Friends</h1>
    </div>

  </div>
</template>

<script>
import SideNav from '@/components/SideNav.vue'

export default {
  name: 'Friends',
  components: {
    SideNav
  },
  data: function () {
    return {

    }
  },
  methods: {},
  computed: {},

}
</script>