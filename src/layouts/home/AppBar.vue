<template>
  <div>
    <v-app-bar id="home-app-bar" app color="white" elevation="1" height="80">
      <div class="logo p3">
        <h1 class="text-h5 text-primary">Quizzi</h1>
      </div>

      <v-spacer />

      <div>
        <v-tabs class="hidden-sm-and-down" optional>
          <v-tab
            v-for="({ title, link }, i) in items"
            :key="i"
            :to="{ name: link }"
            :exact="link === 'Home'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ title }}
          </v-tab>
        </v-tabs>
      </div>
      <v-spacer />
      <div class="mx-3">
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              color=""
              class="font-weight-bold mr-5"
              v-bind="attrs"
              v-on="on"
            >
              {{ currentUser ? currentUser.fullname : "Tài Khoản" }}
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="({ link, title }, i) in authLinks" :key="i">
              <v-list-item-title>
                <router-link class="black--text text-decoration-none" :to="link"
                  >{{ title }}
                </router-link>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title @click="logout">Đăng xuất</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar>

    <!-- <home-drawer v-model="drawer" :items="items" /> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "HomeAppBar",

  components: {
    HomeDrawer: () => import("./Drawer")
  },

  computed: {
    ...mapState(["currentUser"])
  },

  data: () => ({
    drawer: null,
    items: [
      { title: "Trang Chủ", link: "Home" },
      { title: "Về Chúng Tôi", link: "About" },
      { title: "Liên Hệ", link: "Contact" }
    ],
    authLinks: [{ title: "Thông tin", link: "/user" }]
  }),

  methods: {
    ...mapMutations(["setUser"]),

    logout() {
      this.setUser(null);
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
