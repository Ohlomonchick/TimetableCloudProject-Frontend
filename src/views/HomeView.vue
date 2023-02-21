<template>
  <div class="home">
    <div class="columns is-desktop">
        <div class="column">
          <h1 class="title">Monday</h1>
          <div class="box"
               v-for="event in dayEvents" 
               v-bind:key="event.id"
          >
            <h3 class="is-size-4">{{ event.name }}</h3>
            <p class="is-size-6 has-text-grey">{{ event.place }}</p>
            <p class="is-size-6 has-text-black">{{ event.start }}</p>

          </div>
        </div>

        <div class="column">
          <h1 class="title">Tuesday</h1>
          <div class="box">
            Event 1.
          </div>
          <div class="box">
            Event 2.
          </div>
          <div class="box">
            Event 3.
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      dayEvents: []
    }
  },
  components: {
  },
  mounted() {
    this.getDayEvents()
  },
  methods: {
    getDayEvents() {
      axios
          .get('/api/v1/day/')
          .then((response => {
            this.dayEvents = response.data
          }))
          .catch((error => {
            console.log(error)
          }))
    }
  }
}
</script>
