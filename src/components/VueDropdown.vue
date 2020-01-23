<template>
  <div>
    <label>Wybierz osobę:</label>
    <v-select v-model="selected" :options="userList" label="email" v-on:input="getUserInfo"/>
    <div v-if="isLoaded" class="userInfo">
      <img :src="selected.avatar">
      <div class="userInfoText">
        <p>Imię: {{selected.first_name}}</p>
        <p>Nazwisko: {{selected.last_name}} </p>
        <p>E-mail: {{selected.email}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import vSelect from 'vue-select'
  import 'vue-select/dist/vue-select.css'
  import axios from 'axios'
  import VueAxios from 'vue-axios'

  Vue.component('v-select', vSelect)
  Vue.use(VueAxios, axios)

  export default {
    name: 'VueDropdown',
    data () {
      return {
        userList: [],
        selected: '',
        isLoaded: false,
        userInfo: {},
      }
    },
    methods: {
      getUserInfo () {
        (this.selected === '') ? this.isLoaded = false : this.isLoaded = true
        // #second solution with second api request#
        //
        // this.$http.get(`https://reqres.in/api/users/${this.selected.id}`).then((response) => {
        //   this.userInfo = response.data.data
        // })

      }
    },
    created () {
      this.$http.get('https://reqres.in/api/users?page=1').then((response) => {
        this.userList = response.data.data
      })
    }
  }
</script>

<style>
  .userInfo {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }

  .userInfoText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
  }

  p {
    margin: 0;
  }
</style>
