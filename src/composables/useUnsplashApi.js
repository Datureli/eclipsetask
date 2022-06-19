import { reactive, toRefs } from "vue";
import axios from "axios";
export function useUnsplashApi() {
  const state = reactive({
    apiKey: "AnoeiQ5Z_WRegCC1p-dBjqCjokc18BjP0jYOfHRvR9M",
    basicUrl: "https://api.unsplash.com/search/photos",
    image: [],
    headers: {
      Authorization:
        "Client-ID <AnoeiQ5Z_WRegCC1p-dBjqCjokc18BjP0jYOfHRvR9M>",
      "Accept-Version": "v1"
    }
  });

  fetch(`https://api.unsplash.com/search/photos`)
  .then(response => {
    state.image = response.data.results;
  })
  return {
    ...toRefs(state),
  };
}
