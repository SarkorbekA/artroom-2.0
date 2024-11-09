import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useAPI } from "../../axios.js";
const { get } = useAPI();

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  async function updateCount() {
    try {
      const response = await get("/image-idea/getTotalLikes")
      count.value = response.data
    } catch (error) {
      console.log(error);
    }
  }

  return { count, updateCount }
})
