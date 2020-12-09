import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        username: "teonv",
        password: "iloveyou",
        fullname: "Nguyễn Văn Tèo",
        email: "teonv@fpt.edu.vn",
        gender: "true",
        birthday: "1995-12-21",
        schoolfee: "1500000",
        marks: "0"
      },
      {
        id: 2,
        username: "pheonv",
        password: "iloveyou",
        fullname: "Nguyễn Văn Chí Phèo",
        email: "pheonv@fpt.edu.vn",
        gender: "true",
        birthday: "1985-10-11",
        schoolfee: "2500000",
        marks: "0"
      },
      {
        id: 3,
        username: "nopt",
        password: "iloveyou",
        fullname: "Phạm Thị Nở",
        email: "nopt@fpt.edu.vn",
        gender: "false",
        birthday: "1993-05-15",
        schoolfee: "2000000",
        marks: "0"
      }
    ],

    currentUser: null
  },

  mutations: {
    setUser: (state, payload) => {
      state.currentUser = payload;
    },

    addUser: (state, payload) => {
      state.users.push(payload);
    },

    editUser: (state, payload) => {
      const userIndex = state.users.findIndex(user => user.id === payload.id);

      if (userIndex > -1) {
        state.users[userIndex] = {
          ...payload
        };
      }
    }
  }
});