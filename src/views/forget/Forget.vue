<template>
  <div>
    <h1 class="text-md-h3 mt-16 white--text text-center">Quizzi Forget</h1>

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
          label="Email"
          type="text"
          :rules="rules.email"
          v-model="form.email"
          required
        >
        </v-text-field>

        <p class="red--text" v-if="errorMess">{{ errorMess }}</p>
        <router-link :to="{ name: 'Login' }"> Trở về đăng nhập </router-link>
        <v-btn
          class="my-5 ml-auto d-block"
          type="submit"
          :loading="loading"
          color="primary"
          elavation="2"
          small
        >
          Nhập
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      loading: false,

      form: {
        email: ""
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
    handleSignin() {
      console.log("111");
      const valid = this.$refs.form.validate();
      if (!valid) return;
      const {
        form: { email }
      } = this;

      for (const user of this.users) {
        if (user.email === email) {
          this.errorMess = "Mật khẩu của bạn là" + user.password;
          this.loading = false;
        } else {
          this.errorMess = "Email không hợp lệ";
          this.loading = false;
        }
      }

      // throw error
    }
  }
};
</script>

<style>
.wrapper {
  margin: 0;
  padding: 0 15px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(120deg, #2980b9, #8e44ad);
}
</style>
