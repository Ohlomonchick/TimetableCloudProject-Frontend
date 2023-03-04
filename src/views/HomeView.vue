<template>
  <div class="home">
    <div class="buttons has-addons">
      <button id="day-button" @click="getDayEvents" class="button"
      v-bind:class="{'is-active is-black': isDay}">Day</button>
      <button id="week-button" @click="getWeekEvents" class="button"
      v-bind:class="{'is-active is-black': isWeek}">Week</button>
    </div>
    <input class="calendar" type="date"/>
    <div class="block mb-40">
    </div>

    <div v-if="isWeek" class="columns is-desktop">
        <div v-for="(dayEvents, key, index) in days" class="column">
          <h1 class="title">{{ weekdays[index] }}</h1>
              <div v-if="dayEvents.length === 0" class="box">
                No events this day.
              </div>
          <div class="box"
               v-for="event in dayEvents" 
               v-bind:key="event.id"
          >
            <h3 class="is-size-4">{{ event.name }}</h3>
            <p class="is-size-6 has-text-grey">{{ event.place }}</p>
            <p class="is-size-6 has-text-black">{{ event.start }}</p>

          </div>
        </div>
    </div>


    <div v-if="isDay" class="box"
         v-for="event in dayEvents"
         v-bind:key="event.id"
    >
      <h3 class="is-size-4">{{ event.name }}</h3>
      <p class="is-size-6 has-text-grey">{{ event.place }}</p>
      <p class="is-size-6 has-text-black">{{ event.start }}</p>

    </div>

    <div v-if="isDay && (dayEvents.length === 0) " class="box">
      No events this day.
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js';
import 'bulma-calendar/dist/css/bulma-calendar.min.css';

export default {
  name: 'Home',
  data() {
    return {
      dayEvents: [],
      days: [],
      date: '',
      period: '',
      isDay: false,
      isWeek: false,
      weekdays: {
        0: "Monday", 1:"Tuesday", 2: "Wednesday", 3: "Thursday",
        4: "Friday", 5: "Saturday", 6: "Sunday"
      }
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
  },
  components: {
  },
  mounted() {
    this.period = this.$store.state.period;

    const calendar = bulmaCalendar.attach(this.$refs.calendarTrigger, {
      startDate: new Date(),
      weekStart: 1,
      dateFormat: 'dd-MM-yyyy',
      showClearButton: false,
    })[0]

    const d = calendar.date.start;
    const mm = d.getMonth() + 1;
    const dd = d.getDate();
    const yy = d.getFullYear();
    this.date = dd + '-' + mm + '-' + yy;
    this.getEvents();

    calendar.on('save', e => {
      this.date = e.data.value();
      console.log(e.data.value());
      this.getEvents();
    })
  },
  methods: {
    getDayEvents() {
      this.period = 'day';
      this.isDay = true;
      this.isWeek = false;

      this.$store.commit('changePeriod', this.period);
      axios
          .get('/api/v1/day/'  + this.niceDate)
          .then((response => {
            this.dayEvents = response.data
          }))
          .catch((error => {
            console.log(error)
          }))
    },
    getWeekEvents() {
      this.period = 'week';
      this.isDay = false;
      this.isWeek = true;

      this.$store.commit('changePeriod', this.period);
      axios
          .get('/api/v1/week/'  + this.niceDate)
          .then((response => {
            this.days = response.data
          }))
          .catch((error => {
            console.log(error)
          }))
    },
    getEvents() {
      if (this.period === 'day') {
        this.getDayEvents();
      } else if (this.period === 'week') {
        this.getWeekEvents();
      }
    }
  },
  computed: {
    niceDate() {
      if (this.date) {
        return this.date;
      }
    }
  }
}
</script>

<style>
.datetimepicker-clear-button {
  display: none;
}
</style>
