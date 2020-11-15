<template>
  <v-card>
    <v-container v-if="quizs">
      <v-tabs
        v-model="tab"
        background-color="primary"
        next-icon="mdi-chevron-right"
        prev-icon="mdi-chevron-left"
      >
        <v-tabs-slider color="blue darken-4"></v-tabs-slider>
        <v-tab v-for="(question, i) in quizs" :key="question.Id">
          {{ i + 1 }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="question in quizs" :key="question.Id">
          <v-card>
            <v-container>
              <h3 class="my-3">{{ question.Text }}</h3>

              <v-radio-group>
                <v-radio
                  v-for="answer in question.Answers"
                  :key="answer.Id"
                  :label="answer.Text"
                  :value="answer.Id"
                >
                </v-radio>
              </v-radio-group>
            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tab: null,
      quizs: [],
      step: 1,
      score: 0,
      stepAnswer: null,
      done: false,
    };
  },

  created() {
    console.log(this.$route.params.id);
    // const data = axios.get(
    //   `/${require(`@/data/Quizs/${this.$route.params.id}`)}`
    // );
    this.quizs = require(`@/data/Quizs/${this.$route.params.id}`);
  },
};
</script>

<style>
</style>