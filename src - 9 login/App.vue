<template>
  <div id="app">
    <div id="nav" class="logout">
      <div class="container">
        <div class="nav-title">DEMO VUEJS</div>
        <router-link
          class="box-out"
          v-if="authenticated"
          to="/login"
          v-on:click.native="logout()"
          replace
          >Log out</router-link
        >
      </div>
    </div>
    <router-view @authenticated="setAuthenticated" />   
    <my-footer />
  </div>
</template>

<script>
import employee from "./views/employee"
export default {
  name: 'app',
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "truong",
        password: "123",
      },
      mockAccountUser: {
        username: "ao",
        password: "123",
      },
    };
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
  components: {
    "edit-employee": employee,
  },
}
</script>

