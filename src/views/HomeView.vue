<script setup>
import { useAPI } from "../../axios.js";
const { post, get, remove, put } = useAPI();
import { useCounterStore } from '@/stores/counter'

import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";


const baseUrl = import.meta.env.VITE_APP_FILE_BASE_URL

const { updateCount } = useCounterStore()

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
const styles = ref([]);
const page = ref(2);
const pageCount = ref(1);
const isLoading = ref(false);
const category = ref("")

const getIdeas = async (pages, style) => {
  console.log(category.value);
  try {
    await new Promise(resolve => setTimeout(resolve, 500));

    const response = await get('/image-ideas', {
      populate: '*',
      pagination: {
        pageSize: 12,
        page: pages
      },
      "filters[name][$eq]": category.value ? category.value : null
    });

    pageCount.value = response?.meta?.pagination.pageCount
    if (response.data.length < 1) isLoading.value = false;

    response.data.forEach(el => {
      ideas.value.push(el);
    });

  } catch (error) {
    console.log(error);
  }
  finally {
    if (pages == 1) {
      isLoading.value = true
    }

    pages >= pageCount.value ? isLoading.value = false : ""
  }
};

const toggleLike = async (id) => {
  try {
    const response = await post('/design-idea/toggle', {
      "image_idea_id": id
    })

    updateCount()

    let el = ideas.value.find(el => el.id === id);

    if (response.data?.liked == true) {
      el.userLiked = true;
    } else if (response.data?.liked == false) {
      el.userLiked = false;
    }

  } catch (error) {
    console.log(error);
  }
}

const getStyles = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));

    const response = await get('/style-type/getStyleWithImage')

    styles.value.push(...response.data)
  } catch (error) {
    console.log(error);
  }
}

const filterByCategory = async (el) => {
  if (category.value == el.styleName) {
    category.value = ''
  } else {
    category.value = el.styleName
  }
  ideas.value = []
  page.value = 2
  getIdeas(1, el.styleName)
}

const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const loadData = () => {
  getIdeas(page.value);
  page.value++;
};

onMounted(() => {
  getIdeas(1);
  getStyles();
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
            <li v-for="(item, index) in styles"
              :key="index">
              <Button :class="{
              'ring-ring border-borderH': item.styleName == category
            }"
                @click="filterByCategory(item)"
                variant="ghost"
                size="smT">
                {{ capitalize(item.styleName) }}
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
          <Button :class="{
              'active': item.userLiked,
            }"
            @click="toggleLike(item.id)"
            class="product-btn z-50 absolute top-4 right-4 opacity-0 duration-300 pt-0.5 invisible"
            variant="translucent"
            size="iconB">
            <svg :class="{
              'active': item.userLiked,
            }"
              class="like"
              width="16"
              height="16"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke="white"
                fill="currentColor"
                d="M6.64623 1C3.17925 1 1 4.07081 1 6.54724C1 11.9954 7.14151 17.0473 11.5 20.2171C15.8585 17.0473 22 11.9954 22 6.54724C22 4.07081 19.8208 1 16.3538 1C14.3726 1 12.6887 2.58495 11.5 4.07081C10.2123 2.58495 8.62736 1 6.64623 1Z"
                stroke-width="1.5"
                stroke-miterlimit="10"></path>
            </svg>
          </Button>
          <div
            class="product-inner z-10 absolute w-full opacity-0 duration-300 invisible h-full justify-end p-4 flex flex-col items-end top-0 left-0">
            <div class="flex flex-col gap-1 w-full justify-start relative product-box">
              <h3 class="text-background font-medium -tracking-[0.18px] text-md">{{ capitalize(item.name) }}</h3>
              <button @click="router.push(`inspirations/${item.id}`)"
                class="cursor-pointer text-background/[0.7] w-fit font-medium text-xs">Click to see
                details</button>
            </div>
          </div>
        </li>
      </ul>
      <InfiniteLoading v-if="isLoading"
        @infinite="loadData" />

    </div>

    <TheFooter />
  </div>
</template>

<style lang="scss">
.container[data-v-d3e37633] {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style lang="scss"
  scoped></style>