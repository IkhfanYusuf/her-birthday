import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBirthdayStore = defineStore('birthday', {
  state: () => ({
     isBirthday: false,
     birthdayDate : '2023-04-29T00:00:00',
     isOpened: false
  }),
  getters: {
    getIsBirthday(state) {
        return state.isBirthday
    },
    getBirthdayDate(state) {
        return state.birthdayDate
    },
    getIsOpened(state) {
        return state.isOpened
    }
  },
  actions: {
    setIsBirthday(val) {
      this.isBirthday = val
    },
    setIsOpened(val) {
        this.isOpened = val
    },
  },
})
