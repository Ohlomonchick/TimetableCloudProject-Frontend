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
          <div class="buttons">
            <router-link to="/log-in" class="button is-dark">Log in</router-link>
          </div>
        </div>
      </div>

    </nav>
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
export default {
  data() {
    return {
      showMobileMenu: false,
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma';
</style>
