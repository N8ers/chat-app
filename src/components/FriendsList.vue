<template>
  <div>
    <h3>Friends</h3>
    <ul v-for="friend in friends" :key="friend.id">
      <li>{{ friend }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'FriendsList',
  props: {
    friends: {
      type: Array,
      default: () => []
    }
  },
  components: {
  },
  data: function () {
    return { }
  },
  methods: { },
  computed: { }
}
</script>