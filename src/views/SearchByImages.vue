<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { Button } from '@/components/ui/button'
import router from '@/router'


const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
</script>

<template>
  <TheHeader />
  <section>
    <div class="container">
      <div class="flex justify-between items-center py-6">
        <h3 class="font-semibold text-lg text-primary/[0.7] -tracking-[0.18px]">We found more than <span
            class="text-primary">70 Products</span></h3>
        <Button variant="outline"
          size="sm">
          <svg width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.625 4.75C11.1753 4.75 10 5.92525 10 7.375C10 8.82475 11.1753 10 12.625 10C14.0747 10 15.25 8.82475 15.25 7.375C15.25 5.92525 14.0747 4.75 12.625 4.75ZM8.5 7.375C8.5 5.09682 10.3468 3.25 12.625 3.25C14.9032 3.25 16.75 5.09682 16.75 7.375C16.75 8.24312 16.4818 9.04863 16.0238 9.71313L18.0303 11.7197L16.9697 12.7803L14.9631 10.7738C14.2986 11.2318 13.4931 11.5 12.625 11.5C10.3468 11.5 8.5 9.6532 8.5 7.375ZM3.25 4H7V5.5H3.25V4ZM3.25 9.25H7V10.75H3.25V9.25ZM16.75 14.5V16H3.25V14.5H16.75Z"
              fill="#0A0A0A"
              fill-opacity="0.45" />
          </svg>

          <h3 class="px-1">Start over</h3>
          <span class="px-1 py-[1px] mr-1 rounded bg-primary/[0.07] text-xs leading-[18px]">16</span>
        </Button>
      </div>
    </div>

    <div class="border-t border-border">
      <div class="container flex">
        <div class="min-w-[320px] w-[320px] pt-8 pr-10 border-r border-primary/[0.1] pb-10">
          <h3 class="font-medium -tracking-[0.18px] text-lg text-primary/[0.7] mb-6">Uploaded images</h3>
          <div class="flex flex-col gap-4">
            <div class="shadow-xs border-primary/[0.1] border rounded-lg overflow-hidden">
              <img class="w-full h-full object-cover"
                src="@/assets/images/green.jpg"
                alt="">
            </div>
            <div class="shadow-xs border-primary/[0.1] border rounded-lg overflow-hidden">
              <img class="w-full h-full object-cover"
                src="@/assets/images/green.jpg"
                alt="">
            </div>
          </div>
        </div>
        <div class="w-full pt-8 pl-10 pb-[100px]">
          <ul class="grid grid-cols-3 gap-6">
            <!-- Products -->
            <li v-for="(item, index) in 10"
              :key="index"
              class="product w-full aspect-square overflow-hidden bg-[#F7F7F7] rounded-2xl border border-border relative">
              <img loading="lazy"
                class="w-full h-full object-cover"
                src="@/assets/images/green.jpg"
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
                <div class="flex flex-col gap-1 w-full justify-start relative product-box">
                  <h3 class="text-background font-medium -tracking-[0.18px] text-md">Modern</h3>
                  <button @click="router.push(`product/${item.id}`)"
                    class="cursor-pointer text-background/[0.7] w-fit font-medium text-xs">Click to see
                    details</button>
                </div>
              </div>
            </li>
          </ul>
          <div class="flex mt-[100px] justify-center">
            <Button variant="outline"
              size="sm"
              class="px-8">
              <svg width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.59693 4.32447C6.91167 3.18766 8.62552 2.5 10.5 2.5C14.6421 2.5 18 5.85786 18 10C18 11.6021 17.4976 13.0869 16.6419 14.3055L14.25 10H16.5C16.5 6.68629 13.8137 4 10.5 4C8.88736 4 7.42333 4.6362 6.34517 5.67131L5.59693 4.32447ZM15.403 15.6756C14.0883 16.8123 12.3745 17.5 10.5 17.5C6.35786 17.5 3 14.1421 3 10C3 8.39789 3.50234 6.91312 4.3581 5.69458L6.75 10H4.5C4.5 13.3137 7.18629 16 10.5 16C12.1126 16 13.5767 15.3638 14.6549 14.3287L15.403 15.6756Z"
                  fill="#0A0A0A"
                  fill-opacity="0.45" />
              </svg>

              <h3 class="px-1">Load more</h3>
            </Button>
          </div>
        </div>
      </div>

    </div>
  </section>

  <TheFooter />
</template>

<style lang="scss"
  scoped></style>