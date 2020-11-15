<template>
  <v-card>
    <v-container v-if="!finish">
      <v-toolbar>
        <v-toolbar-title class="text-h5 primary--text">
          {{ subjectItem.Name }}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-title>
          {{ total }}
        </v-toolbar-title>
      </v-toolbar>

      <v-card
        v-for="(quiz, i) in quizs"
        :key="quiz.Id"
        class="invisible"
        :class="{ active: i + 1 === current }"
      >
        <v-card-title>
          <p class="text-h6">{{ i + 1 + " " + quiz.Text }}</p>
          <v-spacer></v-spacer>
          <p class="text-subtitle">{{ quiz.Marks }}</p>
        </v-card-title>
        <v-card-text>
          <v-radio-group v-model="currentAnswer">
            <v-radio
              :label="answer.Text"
              v-for="answer in quiz.Answers"
              :key="answer.Id"
              :value="answer.Id"
            >
            </v-radio>
          </v-radio-group>
        </v-card-text>

        <v-card-actions>
          <v-btn large @click="handleNext(quiz)">Next</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>

    <v-container v-else>
      <h1>finish</h1>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";
import subject from "@/mixins/subject";

export default {
  mixins: [subject],

  data() {
    return {
      currentAnswer: null,
      current: 1,
      total: 0,
      quizs: [],
      finish: false
    };
  },

  methods: {
    handleNext(quiz) {
      if (this.current === this.quizs.length) this.finish = true;

      if (!this.currentAnswer) {
        alert("Hãy chọn 1 đáp án");
        return;
      }
      // total
      this.total =
        quiz.AnswerId === this.currentAnswer
          ? this.total + quiz.Marks
          : this.total;

      this.current += 1;
    }
  },

  created() {
    this.subjectItem = this.subject.find(el => el.Id === this.$route.params.id);

    this.quizs = require(`@/data/Quizs/${this.$route.params.id}`);
  }
};
</script>

<style>
.invisible {
  display: none;
}
.invisible.active {
  display: block;
}
</style>
