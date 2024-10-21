<script setup>
import { useAPI } from "../../axios.js";

const { post, get, remove, put } = useAPI();
const baseUrl = import.meta.env.VITE_APP_FILE_BASE_URL

import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import router from '@/router'
import { onMounted, ref } from "vue";

const ideas = ref([]);

const getIdeas = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));

    const response = await get('/style-type/getStyleWithImage')


    response.data.forEach(el => {
      el.images.map(el => ideas.value.push(el))
    })

    console.log(ideas.value);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getIdeas();
})
</script>

<template>
  <div>
    <TheHeader />
    <div class="container">
      <!-- Header -->
      <div class="flex justify-between items-center py-6">
        <h3 class="text-text text-lg letter-spacing-[-1%]">Inspirations</h3>
        <nav>
          <ul class="flex items-center gap-1">
            <li>
              <Button variant="ghost"
                size="smT">
                Modern
              </Button>
            </li>
            <li>
              <Button variant="ghost"
                size="smT">
                Contemporary
              </Button>
            </li>
            <li>
              <Button variant="ghost"
                size="smT">
                Minimalist
              </Button>
            </li>
            <li>
              <Button variant="ghost"
                size="smT">
                Scandinavian
              </Button>
            </li>
            <li>
              <Button variant="ghost"
                size="smT">
                Bohemian
              </Button>
            </li>
            <li>
              <Button variant="ghost"
                size="smT">
                Farmhouse
              </Button>
            </li>
            <li>
              <Button variant="ghost"
                size="sm">
                <h3 class="px-1">Furnitures</h3>
                <span class="px-1 py-[1px] rounded bg-primary/[0.07] text-xs leading-[18px]">New</span>
              </Button>
            </li>
          </ul>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button size="sm"
              variant="outline">
              <svg width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 14.5H11.5V13H8.5V14.5ZM3.25 5.5V7H16.75V5.5H3.25ZM5.5 10.75H14.5V9.25H5.5V10.75Z"
                  fill="#0A0A0A"
                  fill-opacity="0.45" />
              </svg>
              <h3 class="px-1">Popular</h3>
              <svg width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.9055 7.03229L10.0002 3.12695L6.09484 7.03229L7.1555 8.09294L10.0002 5.24828L12.8449 8.09294L13.9055 7.03229ZM6.09473 12.9681L10 16.8734L13.9054 12.9681L12.8447 11.9074L10 14.7521L7.15538 11.9074L6.09473 12.9681Z"
                  fill="#0A0A0A"
                  fill-opacity="0.45" />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent :align="'end'"
            class="w-[180px] shadow-xs py-1.5 px-0">
            <DropdownMenuCheckboxItem>
              Popular
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              Newest
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              Staff-picks
            </DropdownMenuCheckboxItem>
            <!-- <DropdownMenuCheckboxItem variant="destructive">
              Delete
            </DropdownMenuCheckboxItem> -->
          </DropdownMenuContent>
        </DropdownMenu>
      </div>


      <!-- Sketelon -->
      <div v-if="ideas.length < 1"
        class="grid grid-cols-4 gap-6 py-8">
        <Skeleton v-for="item in 8"
          :key="item"
          class="w-full h-[322px] rounded-2xl" />
      </div>

      <!-- Products -->
      <ul v-else
        class="grid grid-cols-4 gap-6 py-8">
        <li v-for="(item, index) in ideas"
          :key="index"
          class="product w-full h-[322px] overflow-hidden bg-[#F7F7F7] rounded-2xl border border-border relative">
          <img loading="lazy"
            class="w-full h-full object-cover"
            :src="baseUrl + item.image"
            alt="product">
          <Button class="product-btn z-50 absolute top-4 right-4 opacity-0 duration-300 invisible"
            variant="translucent"
            size="iconB">
            <svg width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.375 2.25C14.6532 2.25 16.5 4.125 16.5 6.75C16.5 12 10.875 15 9 16.125C7.125 15 1.5 12 1.5 6.75C1.5 4.125 3.375 2.25 5.625 2.25C7.01998 2.25 8.25 3 9 3.75C9.75 3 10.98 2.25 12.375 2.25ZM9.70043 13.9529C10.3616 13.5364 10.9575 13.1216 11.5162 12.6772C13.7503 10.8998 15 8.95762 15 6.75C15 4.98057 13.8472 3.75 12.375 3.75C11.5681 3.75 10.6945 4.17683 10.0606 4.81066L9 5.87132L7.93935 4.81066C7.30551 4.17683 6.43192 3.75 5.625 3.75C4.1693 3.75 3 4.99238 3 6.75C3 8.95762 4.2497 10.8998 6.48385 12.6772C7.0425 13.1216 7.63838 13.5364 8.29957 13.9529C8.52345 14.0939 8.74582 14.2297 9 14.3814C9.25418 14.2297 9.47655 14.0939 9.70043 13.9529Z"
                fill="white" />
            </svg>
          </Button>
          <div
            class="product-inner z-10 absolute w-full opacity-0 duration-300 invisible h-full justify-end p-4 flex flex-col items-end top-0 left-0">
            <div class="flex flex-col gap-1 w-full justify-start">
              <h3 class="text-background font-medium -tracking-[0.18px] text-md">UPLAND</h3>
              <button @click="router.push(`inspirations/${item}`)"
                class="cursor-pointer text-background/[0.7] w-fit font-medium text-xs">Click to see
                details</button>
            </div>
          </div>
        </li>
      </ul>


    </div>

    <TheFooter />
  </div>
</template>


<style lang="scss"
  scoped>
  .product {
    &:hover {
      .product {
        &-inner {
          opacity: 1;
          visibility: visible;
        }

        &-btn {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
</style>