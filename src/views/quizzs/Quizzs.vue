<template>
  <v-container>
    <h3 class="text-h4">Danh sách bài học</h3>

    <v-row>
      <v-col v-for="item in listSubject" :key="item.Id" cols="12" sm="4" md="3">
        <v-card
          class="subject"
          elevation="2"
          max-height="500"
          @click="handleItemClick(item)"
        >
          <v-img height="300" :src="require(`@/assets/${item.Logo}`)"></v-img>
          <v-card-title class="">
            <h5 class="text-body-2 d-block mx-auto">
              {{ item.Name }}
            </h5>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination v-model="page" :length="totalPage"></v-pagination>
    </div>
  </v-container>
</template>

<script>
import subject from "@/mixins/subject";

export default {
  mixins: [subject],

  data() {
    return {
      page: 1,
      totalPage: 0,
      limit: 4,
    };
  },

  method: {
    handleItemClick(item) {
      this.$router.push({
        name: "Quizz",
        params: {
          id: item.Id,
        },
      });
    },
  },

  computed: {
    listSubject() {
      const clone = [...this.subject];
      const data = clone.splice((this.page - 1) * this.limit, this.limit);

      console.log(data, (this.page - 1) * this.limit, this.limit);

      return data;
    },
  },

  created() {
    console.log(this.subject.length, "length");
    this.totalPage = Math.ceil(this.subject.length / this.limit);
    console.log(this.totalPage);
  },
};
</script>
