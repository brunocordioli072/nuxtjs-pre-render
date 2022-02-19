# Building a Nuxt.js single-page application with SEO metatags

There are many reasons to use SPA on a Nuxt.js app! My favorite one is budget, haha, is much cheaper to serve a static website with no server. But with SPA comes a lot of little problems like how to handle dynamic content, that in a first look, needs to be handled on the server. This little project is an example on how to handle one of the little problems.

For the full description of this project, go to [https://nuxtjs-pre-render.netlify.app](https://nuxtjs-pre-render.netlify.app).

### The approach

The basic idea:

1. Create a custom App `yarn create nuxt-app`

2. Setup the dynamic routes

```js
// pages/_catId/preview.vue
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
      const cat = cats.find((el) => el.id === this.catId);
      return cat;
    },
  },
};
</script>
```

3. Make all routes that exist on /*/preview be pre-rendered by Nuxt.js on build time.

```js
// nuxt.config.js

export default {
  ...
  ssr: process.env.NODE_ENV === 'production',

  target: 'static',

  generate: {
    routes: ["0/preview", "1/preview", "2/preview", "3/preview", "4/preview"],
  },
  ...
}
```

Feel free to follow me on [LinkedIn](https://www.linkedin.com/in/brunocordioli072/) 🤙
