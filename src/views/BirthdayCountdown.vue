<script setup>
  import VueCountdown from '@chenfengyuan/vue-countdown';
  import { RouterLink } from 'vue-router';
  import {useBirthdayStore} from '/src/stores/birthday'

  const store = useBirthdayStore()

  const startTime = new Date().valueOf();
  const endTime = new Date(store.getBirthdayDate).valueOf();
  const time = endTime-startTime

</script>

<template>
  <div class="w-full min-h-screen flex items-center justify-center font-bebas bg-lofi bg-no-repeat bg-cover">
    <vue-countdown  class="text-center" :time="time" v-slot="{ days, hours, minutes, seconds }">
      <div class="text-white flex justify-center items-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="animate-bounce w-5 h-5 mr-1 mb-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
      Aprilia Handayani's Birthday</div>
      <div class="flex items-center justify-center leading-none text-3xl text-blue-400 mb-8">

          <span class="days px-4 py-2 shadow-lg bg-white rounded opacity-70 mr-1">
            <div class="text-center">{{days}}</div>
            <div class="text-sm text-center opacity-70">days</div>
          </span>
          <span class="hours px-4 py-2 shadow-lg bg-white rounded opacity-70 mr-1">
            <div class="text-center">{{hours}}</div>
            <div class="text-sm text-center opacity-70">hours</div>
          </span>
          <span class="minutes px-4 py-2 shadow-lg bg-white rounded opacity-70 mr-1">
            <div class="text-center">{{minutes}}</div>
            <div class="text-sm text-center opacity-70">min</div>
          </span>
          <span class="seconds px-4 py-2 shadow-lg bg-white rounded opacity-70">
            <div class="text-center">{{seconds}}</div>
            <div class="text-sm text-center opacity-70">sec</div>
          </span>
      
      </div>
      <router-link @click="store.setIsOpened(true)" :to="days!=0 || hours !=0 || minutes != 0 || seconds !=0 ? '': '/'" :class="{'text-opacity-50': days!=0 || hours !=0 || minutes != 0 || seconds !=0}" class="px-4 py-2 rounded bg-white opacity-95 text-blue-400 shadow-lg">open for surprise</router-link>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-1/4 opacity-90 mx-auto mt-3 pl-10" version="1.0" preserveAspectRatio="xMidYMid meet" viewBox="24.02 35.88 147.59 188.99"><g transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none"><path d="M1340 2021 c-116 -62 -180 -223 -212 -535 l-12 -119 -81 7 c-362 27 -682 277 -737 574 -11 58 -27 80 -49 66 -14 -8 -11 -90 7 -158 34 -134 148 -288 275 -374 148 -100 389 -182 535 -182 l44 0 0 -175 c0 -97 5 -219 11 -273 14 -131 53 -322 78 -378 l21 -45 -50 -22 c-36 -16 -50 -28 -50 -42 0 -31 10 -40 95 -83 44 -22 115 -61 159 -86 93 -56 130 -59 133 -11 1 17 -23 98 -55 185 -66 174 -75 183 -137 136 -18 -14 -36 -26 -39 -26 -11 0 -58 171 -71 260 -17 119 -29 460 -18 520 8 42 10 45 49 51 151 26 357 155 429 269 79 126 65 300 -32 392 -70 66 -214 90 -293 49z m185 -75 c91 -42 122 -100 113 -209 -6 -72 -32 -122 -98 -188 -80 -80 -191 -137 -318 -164 l-34 -7 7 59 c49 452 143 597 330 509z"></path></g></svg>
      <div class="absolute text-sm desc ml-32 text-white">Can be opened after the countdown is over.</div>

      <!-- Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds. -->
    </vue-countdown>
  </div>
</template>

