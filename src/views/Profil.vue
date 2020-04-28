<template>
<div>
  <div><FBLogin/></div>
  <b-avatar size="4rem" :src="getUser.info.avatarUrl"></b-avatar>
    <p v-if="getUser.logedIn">{{getUser.info.name}}</p>
    <p v-if="getUser.info.isAdmin">Admin</p>
</div>
</template>

<script>
import FBLogin from '../components/FBLogin'

export default {
  name: 'Profil',
  data: () => ({

  }),
  components: {
    FBLogin
  },
  computed: {
    getUser() {
      return this.$store.state.user
    }
  }
}
</script>


<style scoped>


</style>