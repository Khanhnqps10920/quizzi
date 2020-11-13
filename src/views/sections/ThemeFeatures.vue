<template>
  <base-section id="theme-features">
    <base-section-heading title="Quizzi Features">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in!
      Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus
      quibusdam esse accusamus mollitia magni fuga.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col v-for="(feature, i) in features" :key="i" cols="12" md="6">
          <base-avatar-card v-bind="feature" align="left" horizontal>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            illum veniam cum dolores ratione commodi beatae quas maxime,
            laboriosam excepturi solut!
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: "SectionThemeFeatures",

  data: () => ({
    features: [
      {
        title: "Các bài Quizzi hay nhất",
        icon: "mdi-fountain-pen-tip",
      },
      {
        title: "Responsive ở mọi thiết bị",
        icon: "mdi-cellphone",
      },
      {
        // color: "primary",
        // dark: true,
        title: "Có thể tự tạo riêng quizz",
        icon: "mdi-pencil-box-outline",
      },
      {
        title: "Nhiều bài quizz hay",
        icon: "mdi-image-size-select-actual",
      },
      {
        title: "Cùng nhiều bài học khác nhau",
        icon: "mdi-ice-pop",
      },
      {
        title: "24/7 Hỗ trợ",
        icon: "mdi-help-circle-outline",
      },
    ],
  }),
};
</script>
