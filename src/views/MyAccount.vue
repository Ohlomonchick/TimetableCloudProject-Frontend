<template>
  <div class="page-my-account">
      <div class="columns is-multiline">
          <div class="column is-12">
              <h1 class="title">Account of {{ user.username }}</h1>
            <h2 class="title is-grey-dark">My groups: </h2>
            <div v-for="group in user.participant_groups" class="box">
              <h3 class=" is-dark">{{ group.name }}</h3>
            </div>
          </div>

          <div v-if="user.is_staff" class="column is-12">
              <router-link to="/admin" class="button is-grey-dark">Admin-Panel</router-link>
          </div>
          <div class="column is-12">
              <button @click="logout()" class="button is-danger">Log out</button>
          </div>

          <hr>

      </div>
    </div>

</template>

<script>
import axios from "axios";

export default {
  name: "MyAccount",
  data() {
    return {
      user_id: 0,
      user: {},
      base_url: '',
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
  },
  mounted() {
      document.title = 'My Account';
      this.getUser();
  },
  methods: {
    logout() {
      axios.defaults.headers.common["Authorization"] = ""

      localStorage.removeItem("token")
      localStorage.removeItem("username")
      localStorage.removeItem("userid")

      this.$store.commit('removeToken')

      this.$router.push('/')
    },
    async getAdminUrl() {


    },
    async getUser() {
      this.$store.commit('setIsLoading', true)
      await axios
          .get('/api/v1/users/me')
          .then((response => {
            this.user_id = response.data.id
          }))
          .catch((error => {
            console.log(error)
          }))
      await axios
          .get('/api/v1/user/' + this.user_id)
          .then((response => {
            this.user = response.data
          }))
          .catch((error => {
            console.log(error)
          }))
      this.$store.commit('setIsLoading', false)

    }
  }
}
</script>

<style scoped>

</style>