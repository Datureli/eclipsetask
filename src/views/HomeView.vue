<template>
  <div class="home">
    <h1>Eclipse Task</h1>
    <img :src="image.urls.small" width="300" height="300" alt="image" />
    <ul v-for="image in images" :key="image">
      <li>
         <img :src="image.urls.small" width="300" height="300" alt="image" />
      </li>
    </ul>
  </div>
</template>

<script>
import { useUnsplashApi } from "../composables/useUnsplashApi";
export default {
  name: "HomeView",
  setup() {
    let {fetchApi, ...toRefs } = useUnsplashApi();

    return {
      fetchApi,
      ...toRefs,
    };
  },
};
</script>
