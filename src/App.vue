<template>
  <div id="wrapper">
    <nav class="navbar is-info">

      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>Timetable</strong></router-link>

        <a class="navbar-burger" v-bind:class="{ 'is-active': showMobileMenu }" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }">
        <div class="navbar-end">

        </div>
        <div class="navbar-item">
          <div v-if="!$store.state.isAuthenticated" class="buttons">
            <router-link to="/log-in" class="button is-black">Log in</router-link>
          </div>
          <div v-if="$store.state.isAuthenticated" class="buttons">
            <router-link to="/my-account" class="button is-black">MyAccount</router-link>
          </div>
        </div>
      </div>

    </nav>

    <div class="is-loading-bar has-text-centered" v-bind:class="{'is-loading': $store.state.isLoading}">
      <div class="lds-dual-ring"></div>
    </div>
    <section class="section">
      <router-view/>
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Timetable</strong> by <a href="">Dmitry</a>,
          <a href="">Gosha</a>, <a href="">Vova</a>, <a href="">Sasha</a>,
          <a href="">Lionelya Messi</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      showMobileMenu: false,
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
    const token = this.$store.state.token

    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
      axios.defaults.headers.common['Authorization'] = ""
    }
  },
}
</script>

<style lang="scss">
@import '../node_modules/bulma';

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.is-loading-bar {
  height: 0;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  &.is-loading {
    height: 80px;
  }
}
</style>
