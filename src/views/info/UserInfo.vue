<template>
  <div class="container">
    <v-card width="600px" class="mx-auto">
      <v-card-title>
        <h3 class="mx-auto">Thông tin của bạn</h3>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-form>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Tên người dùng"
                  v-model="user.fullname"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email" v-model="user.email"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Tên đăng nhập"
                  v-model="user.username"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Mật khẩu"
                  type="password"
                  v-model="user.password"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="user.gender" row>
                  <v-radio value="true" label="Nam"></v-radio>
                  <v-radio value="false" label="Nữ"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="user.birthday"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="user.birthday"
                      label="Sinh Nhật Của Bạn"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="user.birthday"
                    :show-current="user.birthday"
                    no-title
                    scrollable
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(user.birthday)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12">
                <v-btn large color="primary" @click="handleEdit">Sửa</v-btn>
              </v-col>

              <v-col cols="12">
                <v-alert type="success" v-if="success">{{ success }}</v-alert>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      menu: null,
      user: null,
      success: null
    };
  },

  computed: {
    ...mapState(["currentUser"])
  },

  methods: {
    ...mapMutations(["setUser", "editUser"]),

    handleEdit() {
      // this.setUser(this.user);

      this.editUser(this.user);

      this.setUser(this.user);

      this.success = "Edit thành công";

      setTimeout(() => {
        this.success = null;
      }, 3000);
    }
  },

  created() {
    this.user = { ...this.currentUser };
  }
};
</script>

<style></style>
