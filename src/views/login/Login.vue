<template>
  <div>
    <h1 class="text-md-h3 mt-16 white--text text-center">Quizzi Login</h1>

    <v-card
      elevation="2"
      outlined
      class="card my-10 my-xs-0 mx-auto px-5"
      :max-width="width"
      :height="height"
    >
      <v-card-title class="pb-1">
        <v-icon class="mx-auto my-0 p-0" size="36">mdi-view-dashboard</v-icon>
      </v-card-title>
      <v-form class="px-3" @submit.prevent="handleSignin" ref="form">
        <!-- name -->
        <v-text-field
          label="Tên đăng nhập"
          type="text"
          :rules="rules.username"
          v-model="form.username"
          required
        >
        </v-text-field>

        <v-text-field
          label="Mật khẩu"
          type="password"
          :rules="rules.password"
          v-model="form.password"
          required
        >
        </v-text-field>
        <p class="red--text" v-if="errorMess">{{ errorMess }}</p>
        <router-link :to="{ name: 'Register' }" class="d-block">
          Chưa có tài khoản? Đăng ký
        </router-link>
        <router-link :to="{ name: 'Forget' }"> Quên mật khẩu? </router-link>
        <v-btn
          class="my-5 ml-auto d-block"
          type="submit"
          :loading="loading"
          color="primary"
          elavation="2"
          small
        >
          Đăng nhập
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      loading: false,

      form: {
        username: "",
        password: ""
      },

      rules: {
        username: [
          val => (val || "").length > 0 || "Tên đăng nhập không được để trống"
        ],
        password: [
          val => (val || "").length > 0 || "Mật khẩu không được để trống"
        ]
      },

      errorMess: ""
    };
  },

  computed: {
    ...mapState(["users"]),

    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 376;
        case "sm":
          return 400;
        case "md":
          return 400;
        case "lg":
          return 400;
        case "xl":
          return 400;
      }
    },
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "auto";
        case "sm":
          return "auto";
        case "md":
          return "auto";
        case "lg":
          return "auto";
        case "xl":
          return "auto";
      }
    }
  },

  methods: {
    ...mapMutations(["setUser"]),
    handleSignin() {
      const valid = this.$refs.form.validate();
      if (!valid) return;

      const {
        form: { username, password }
      } = this;
      this.loading = true;

      // default

      console.log(this.users);
      for (const user of this.users) {
        if (user.username === username && user.password === password) {
          this.setUser(user);
          this.$router.push({ name: "Home" });
          return;
        } else {
          this.errorMess = "sai username hoặc mật khẩu";
          this.loading = false;
        }
      }
      // throw error
      //   if (username === "admin" && password === "123456") {
      //   setTimeout(() => {
      //     this.$store.dispatch("login", { username, password });
      //     this.$router.push("/");
      //   }, 1000);
      // } else {
      //   this.loading = false;

      //   this.errorMess = "sai user name hoac mat khau";
      // }
    }
  }
};
</script>

<style>
.wrapper {
  margin: 0;
  padding: 0 15px;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, #2980b9, #8e44ad);
}
</style>
