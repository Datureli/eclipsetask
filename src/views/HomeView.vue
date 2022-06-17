<template>
  <div class="home">
    <h1>Eclipse Task</h1>
    <img :src="image" width="300" height="300" />
  </div>
</template>

<script>
import { useUnsplashApi } from "../composables/useUnsplashApi";
export default {
  name: "HomeView",
  setup() {
    let { image, ...toRefs } = useUnsplashApi();

    return {
      image,
      ...toRefs,
    };
  },
};
</script>
