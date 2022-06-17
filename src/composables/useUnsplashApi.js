import { reactive, toRefs } from "vue";

export function useUnsplashApi() {
  const state = reactive({
    apiKey: "AnoeiQ5Z_WRegCC1p-dBjqCjokc18BjP0jYOfHRvR9M",
    basicUrl: "https://api.unsplash.com/photos/random",
    image: "",
  });

  fetch(state.basicUrl + `?client_id=${state.apiKey}`)
    .then((response) => response.json())
    .then((json) => {
      state.image = json.urls.full;
    });

  return {
    ...toRefs(state),
  };
}
