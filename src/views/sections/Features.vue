<template>
  <base-section id="features" class="secondary">
    <v-responsive class="mx-auto" max-width="1350">
      <v-container fluid>
        <v-row>
          <v-col v-for="item in data" :key="item.Id" cols="12" sm="4" md="3">
            <v-card class="subject" elevation="2" max-height="500">
              <v-img
                height="300"
                :src="require(`@/assets/${item.Logo}`)"
              ></v-img>
              <v-card-title class="">
                <h5 class="text-body-2 d-block mx-auto">
                  {{ item.Name }}
                </h5>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <v-btn elevation="2" class="d-block mt-5 mx-auto">
          Watch More
        </v-btn>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
import subject from "@/mixins/subject";

export default {
  mixins: [subject],
  name: "SectionFeatures",

  computed: {
    data() {
      return this.subject.splice(this.subject.length - 8, this.subject.length);
    }
  }
};
</script>

<style lang="scss">
.subject {
  cursor: pointer;

  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
    content: "";
    top: 0;
    left: 0;
    z-index: 2;
    transition: 0.4s ease;
  }

  &:hover:before {
    opacity: 0;
  }
}
</style>
