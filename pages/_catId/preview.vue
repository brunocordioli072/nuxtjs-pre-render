<template>
  <div>
    <img :src="`/images/cat-${catId}.jpg`" alt="" /> <br />
    <span>Hello!! My name is {{ cat.name }}!!</span>
  </div>
</template>

<script>
import { cats } from '~/cats';

export default {
  head() {
    return {
      meta: [
        {
          hid: 'title',
          property: 'title',
          content: `Hello!! My name is ${this.cat.name}!!`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Hello!! My name is ${this.cat.name}!!`,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}/images/cat-${this.cat.id}.jpg`,
        },
      ],
    };
  },
  data() {
    return {
      catId: this.$route.params.catId,
    };
  },
  computed: {
    cat() {
      const cat = cats.find((el) => el.id == this.catId);
      return cat;
    },
  },
};
</script>

<style>
</style>
