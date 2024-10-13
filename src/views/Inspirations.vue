<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import 'swiper/css';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import router from '@/router';


const route = useRoute();

onMounted(() => {
  console.log(
    route.params.id
  );
})
</script>

<template>
  <TheHeader />

  <section class="py-8">
    <div class="container">
      <div class="grid gap-5 grid-cols-2">
        <div class="flex flex-col row-span-2 row-start-1 row-end-2 gap-6 mr-1 w-full">
          <div class="rounded-2xl w-full overflow-hidden">
            <img class="w-full h-full aspect-square"
              src="@/assets/images/room.webp"
              alt="room">
          </div>
          <div>
            <swiper :slidesPerView="5"
              :space-between="16"
              :free-mode="true"
              :modules="[Keyboard]"
              :keyboard="{
              enabled: true,
            }"
              class="mySwiper">
              <swiper-slide class="w-full"
                v-for="item in 6"
                :key="item">
                <div class="w-full aspect-square rounded-2xl overflow-hidden">
                  <img class="w-full h-full"
                    src="@/assets/images/room.webp"
                    alt="room">
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="pt-6 flex flex-col items-start w-full h-full">
          <Button @click="router.push('/')"
            size="smT"
            variant="secondary">
            <svg width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.87132 8.25017H15V9.75017H5.87132L9.8943 13.7731L8.83365 14.8337L3 9.00017L8.83365 3.1665L9.8943 4.22716L5.87132 8.25017Z"
                fill="#0A0A0A"
                fill-opacity="0.45" />
            </svg>
            <h3 class="px-1">Back to main</h3>
          </Button>
          <div class="flex gap-1 mt-5 items-center">
            <Button @click="router.push('/')"
              variant="base"
              size="base">
              <svg width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 15.3333C16 15.7015 15.7015 16 15.3333 16H4.66667C4.29848 16 4 15.7015 4 15.3333V8.32605C4 8.12032 4.09498 7.92611 4.25737 7.79981L9.59073 3.65166C9.83147 3.46442 10.1685 3.46442 10.4093 3.65166L15.7426 7.79981C15.905 7.92611 16 8.12032 16 8.32605V15.3333ZM14.6667 14.6667V8.6521L10 5.02247L5.33333 8.6521V14.6667H14.6667Z"
                  fill="#0A0A0A"
                  fill-opacity="0.45" />
              </svg>
              <h3>Home</h3>
            </Button>
            <div>
              <svg width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8771 4.34091L8.59588 16.5312H7.26847L10.5497 4.34091H11.8771Z"
                  fill="#0A0A0A"
                  fill-opacity="0.45" />
              </svg>
            </div>
            <Button class="!cursor-default"
              variant="base"
              size="base">
              <h3>Inspirations</h3>
            </Button>
            <div>
              <svg width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8771 4.34091L8.59588 16.5312H7.26847L10.5497 4.34091H11.8771Z"
                  fill="#0A0A0A"
                  fill-opacity="0.45" />
              </svg>
            </div>
            <Button class="!cursor-default text-primary/[0.7]"
              variant="base"
              size="base">
              <h3>Montana</h3>
            </Button>
          </div>
          <div class="mt-4 w-full">
            <h3 class="w-full text-text text-2xl leading-[30px] font-medium truncate ...">Montana - Aesthetic room
              decoration</h3>
          </div>
          <div class="bg-light rounded-xl w-full min-h-[652px] h-[652px] p-3 pb-0 flex flex-col gap-4 mt-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-3">
                <svg width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1053_16041)">
                    <path
                      d="M12.7505 0.90625L13.7396 2.76087L15.5942 3.75L13.7396 4.73913L12.7505 6.59376L11.7613 4.73913L9.90675 3.75L11.7613 2.76087L12.7505 0.90625ZM6.00049 3.25L8.00047 7L11.7505 8.99999L8.00047 11L6.00049 14.75L4.00049 11L0.250488 8.99999L4.00049 7L6.00049 3.25ZM14.7505 12.25L13.5005 9.90629L12.2505 12.25L9.90675 13.5L12.2505 14.75L13.5005 17.0938L14.7505 14.75L17.0942 13.5L14.7505 12.25Z"
                      fill="#0A0A0A"
                      fill-opacity="0.7" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1053_16041">
                      <rect width="18"
                        height="18"
                        fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h3 class="text-text text-nowrap font-medium -tracking-[0.18px]">AI Catalog</h3>
              </div>
              <div class="flex items-center gap-4">
                <div class="flex shadow-xs border-[0.5px] border-primary/[16%] rounded-lg">
                  <Button variant="current"
                    side="left"
                    size="smT">
                    <svg width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.33333 4.6665H16V5.99984H9.33333V4.6665ZM9.33333 7.33317H13.3333V8.6665H9.33333V7.33317ZM9.33333 11.3332H16V12.6665H9.33333V11.3332ZM9.33333 13.9998H13.3333V15.3332H9.33333V13.9998ZM4 4.6665H8V8.6665H4V4.6665ZM5.33333 5.99984V7.33317H6.66667V5.99984H5.33333ZM4 11.3332H8V15.3332H4V11.3332ZM5.33333 12.6665V13.9998H6.66667V12.6665H5.33333Z"
                        fill="#1D1D1D" />
                    </svg>
                    <h3 class="px-1">List view</h3>
                  </Button>
                  <Button variant="group"
                    side="right"
                    size="smT">
                    <svg width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.6668 10.666V15.3333C16.6668 15.7015 16.3684 16 16.0002 16H10.6668V10.666H16.6668ZM9.3335 10.666V16H4.00016C3.63198 16 3.3335 15.7015 3.3335 15.3333V10.666H9.3335ZM9.3335 4V9.33267H3.3335V4.66667C3.3335 4.29848 3.63198 4 4.00016 4H9.3335ZM16.0002 4C16.3684 4 16.6668 4.29848 16.6668 4.66667V9.33267H10.6668V4H16.0002Z"
                        fill="#0A0A0A"
                        fill-opacity="0.45" />
                    </svg>
                    <h3 class="px-1">Grid view</h3>
                  </Button>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button class="shadow-xs border-primary/[16%]"
                      size="sm"
                      variant="outline">
                      <svg width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 13.5H10.5V12H7.5V13.5ZM2.25 4.5V6H15.75V4.5H2.25ZM4.5 9.75H13.5V8.25H4.5V9.75Z"
                          fill="#0A0A0A"
                          fill-opacity="0.45" />
                      </svg>
                      <h3 class="px-1">Categories</h3>
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
                      Edit
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Unpublish
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Duplicate
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem variant="destructive">
                      Delete
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <ul class="flex flex-col gap-3 pb-3 overflow-y-auto scrollbar-none">
              <li class="flex gap-4 shadow-xs bg-background p-4 rounded-[10px] border border-light">
                <div class="w-[132px] h-[132px] flex justify-center items-center border border-light rounded-lg">
                  <img class="w-full h-full object-cover"
                    src="@/assets/images/divan.webp"
                    alt="product">
                </div>
                <div>
                  <h3 class="text-blue font-medium text-sm"># Sofas</h3>
                  <h3 class="text-text font-medium text-lg -tracking-[0.18px] mt-2">UPPLAND</h3>
                  <ul class="mt-4 flex flex-col gap-2 w-full">
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Price:</span> ~ $1 540</h3>
                    </li>
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Size:</span> 124inch <span
                          class="w-5 inline-block text-center">/</span>
                        84inch</h3>
                    </li>
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Color:</span> Hakebo / Gray</h3>
                    </li>
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Material:</span> Fabric</h3>
                    </li>
                  </ul>
                  <div class="mt-4 flex gap-4 items-center">
                    <Button size="smT">
                      <h3 class="px-1">Visit product</h3>
                      <svg width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.0029 7.06066L5.54796 13.5156L4.4873 12.455L10.9422 6H5.25292V4.5H13.5029V12.75H12.0029V7.06066Z"
                          fill="white" />
                      </svg>
                    </Button>
                    <Button variant="outline"
                      size="smT">
                      <svg width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.375 2.25C14.6532 2.25 16.5 4.125 16.5 6.75C16.5 12 10.875 15 9 16.125C7.125 15 1.5 12 1.5 6.75C1.5 4.125 3.375 2.25 5.625 2.25C7.01998 2.25 8.25 3 9 3.75C9.75 3 10.98 2.25 12.375 2.25ZM9.70043 13.9529C10.3616 13.5364 10.9575 13.1216 11.5162 12.6772C13.7503 10.8998 15 8.95762 15 6.75C15 4.98057 13.8472 3.75 12.375 3.75C11.5681 3.75 10.6945 4.17683 10.0606 4.81066L9 5.87132L7.93935 4.81066C7.30551 4.17683 6.43192 3.75 5.625 3.75C4.1693 3.75 3 4.99238 3 6.75C3 8.95762 4.2497 10.8998 6.48385 12.6772C7.0425 13.1216 7.63838 13.5364 8.29957 13.9529C8.52345 14.0939 8.74582 14.2297 9 14.3814C9.25418 14.2297 9.47655 14.0939 9.70043 13.9529Z"
                          fill="#0A0A0A"
                          fill-opacity="0.45" />
                      </svg>
                      <h3 class="px-1">Save to wishlist</h3>
                    </Button>
                  </div>
                </div>
              </li>
              <li class="flex gap-4 shadow-xs bg-background p-4 rounded-[10px] border border-light">
                <div class="w-[132px] h-[132px] flex justify-center items-center border border-light rounded-lg">
                  <img class="w-full h-full object-cover"
                    src="@/assets/images/divan.webp"
                    alt="product">
                </div>
                <div>
                  <h3 class="text-blue font-medium text-sm"># Sofas</h3>
                  <h3 class="text-text font-medium text-lg -tracking-[0.18px] mt-2">UPPLAND</h3>
                  <ul class="mt-4 flex flex-col gap-2 w-full">
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Price:</span> ~ $1 540</h3>
                    </li>
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Size:</span> 124inch <span
                          class="w-5 inline-block text-center">/</span>
                        84inch</h3>
                    </li>
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Color:</span> Hakebo / Gray</h3>
                    </li>
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Material:</span> Fabric</h3>
                    </li>
                  </ul>
                  <div class="mt-4 flex gap-4 items-center">
                    <Button size="smT">
                      <h3 class="px-1">Visit product</h3>
                      <svg width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.0029 7.06066L5.54796 13.5156L4.4873 12.455L10.9422 6H5.25292V4.5H13.5029V12.75H12.0029V7.06066Z"
                          fill="white" />
                      </svg>
                    </Button>
                    <Button variant="outline"
                      size="smT">
                      <svg width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.375 2.25C14.6532 2.25 16.5 4.125 16.5 6.75C16.5 12 10.875 15 9 16.125C7.125 15 1.5 12 1.5 6.75C1.5 4.125 3.375 2.25 5.625 2.25C7.01998 2.25 8.25 3 9 3.75C9.75 3 10.98 2.25 12.375 2.25ZM9.70043 13.9529C10.3616 13.5364 10.9575 13.1216 11.5162 12.6772C13.7503 10.8998 15 8.95762 15 6.75C15 4.98057 13.8472 3.75 12.375 3.75C11.5681 3.75 10.6945 4.17683 10.0606 4.81066L9 5.87132L7.93935 4.81066C7.30551 4.17683 6.43192 3.75 5.625 3.75C4.1693 3.75 3 4.99238 3 6.75C3 8.95762 4.2497 10.8998 6.48385 12.6772C7.0425 13.1216 7.63838 13.5364 8.29957 13.9529C8.52345 14.0939 8.74582 14.2297 9 14.3814C9.25418 14.2297 9.47655 14.0939 9.70043 13.9529Z"
                          fill="#0A0A0A"
                          fill-opacity="0.45" />
                      </svg>
                      <h3 class="px-1">Save to wishlist</h3>
                    </Button>
                  </div>
                </div>
              </li>
              <li class="flex gap-4 shadow-xs bg-background p-4 rounded-[10px] border border-light">
                <div class="w-[132px] h-[132px] flex justify-center items-center border border-light rounded-lg">
                  <img class="w-full h-full object-cover"
                    src="@/assets/images/divan.webp"
                    alt="product">
                </div>
                <div>
                  <h3 class="text-blue font-medium text-sm"># Sofas</h3>
                  <h3 class="text-text font-medium text-lg -tracking-[0.18px] mt-2">UPPLAND</h3>
                  <ul class="mt-4 flex flex-col gap-2 w-full">
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Price:</span> ~ $1 540</h3>
                    </li>
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Size:</span> 124inch <span
                          class="w-5 inline-block text-center">/</span>
                        84inch</h3>
                    </li>
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Color:</span> Hakebo / Gray</h3>
                    </li>
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Material:</span> Fabric</h3>
                    </li>
                  </ul>
                  <div class="mt-4 flex gap-4 items-center">
                    <Button size="smT">
                      <h3 class="px-1">Visit product</h3>
                      <svg width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.0029 7.06066L5.54796 13.5156L4.4873 12.455L10.9422 6H5.25292V4.5H13.5029V12.75H12.0029V7.06066Z"
                          fill="white" />
                      </svg>
                    </Button>
                    <Button variant="outline"
                      size="smT">
                      <svg width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.375 2.25C14.6532 2.25 16.5 4.125 16.5 6.75C16.5 12 10.875 15 9 16.125C7.125 15 1.5 12 1.5 6.75C1.5 4.125 3.375 2.25 5.625 2.25C7.01998 2.25 8.25 3 9 3.75C9.75 3 10.98 2.25 12.375 2.25ZM9.70043 13.9529C10.3616 13.5364 10.9575 13.1216 11.5162 12.6772C13.7503 10.8998 15 8.95762 15 6.75C15 4.98057 13.8472 3.75 12.375 3.75C11.5681 3.75 10.6945 4.17683 10.0606 4.81066L9 5.87132L7.93935 4.81066C7.30551 4.17683 6.43192 3.75 5.625 3.75C4.1693 3.75 3 4.99238 3 6.75C3 8.95762 4.2497 10.8998 6.48385 12.6772C7.0425 13.1216 7.63838 13.5364 8.29957 13.9529C8.52345 14.0939 8.74582 14.2297 9 14.3814C9.25418 14.2297 9.47655 14.0939 9.70043 13.9529Z"
                          fill="#0A0A0A"
                          fill-opacity="0.45" />
                      </svg>
                      <h3 class="px-1">Save to wishlist</h3>
                    </Button>
                  </div>
                </div>
              </li>
              <li class="flex gap-4 shadow-xs bg-background p-4 rounded-[10px] border border-light">
                <div class="w-[132px] h-[132px] flex justify-center items-center border border-light rounded-lg">
                  <img class="w-full h-full object-cover"
                    src="@/assets/images/divan.webp"
                    alt="product">
                </div>
                <div>
                  <h3 class="text-blue font-medium text-sm"># Sofas</h3>
                  <h3 class="text-text font-medium text-lg -tracking-[0.18px] mt-2">UPPLAND</h3>
                  <ul class="mt-4 flex flex-col gap-2 w-full">
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Price:</span> ~ $1 540</h3>
                    </li>
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Size:</span> 124inch <span
                          class="w-5 inline-block text-center">/</span>
                        84inch</h3>
                    </li>
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Color:</span> Hakebo / Gray</h3>
                    </li>
                    <li>
                      <h3 class="text-sm font-medium text-primary/[0.7]"><span
                          class="w-[124px] inline-block mr-2">Material:</span> Fabric</h3>
                    </li>
                  </ul>
                  <div class="mt-4 flex gap-4 items-center">
                    <Button size="smT">
                      <h3 class="px-1">Visit product</h3>
                      <svg width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.0029 7.06066L5.54796 13.5156L4.4873 12.455L10.9422 6H5.25292V4.5H13.5029V12.75H12.0029V7.06066Z"
                          fill="white" />
                      </svg>
                    </Button>
                    <Button variant="outline"
                      size="smT">
                      <svg width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.375 2.25C14.6532 2.25 16.5 4.125 16.5 6.75C16.5 12 10.875 15 9 16.125C7.125 15 1.5 12 1.5 6.75C1.5 4.125 3.375 2.25 5.625 2.25C7.01998 2.25 8.25 3 9 3.75C9.75 3 10.98 2.25 12.375 2.25ZM9.70043 13.9529C10.3616 13.5364 10.9575 13.1216 11.5162 12.6772C13.7503 10.8998 15 8.95762 15 6.75C15 4.98057 13.8472 3.75 12.375 3.75C11.5681 3.75 10.6945 4.17683 10.0606 4.81066L9 5.87132L7.93935 4.81066C7.30551 4.17683 6.43192 3.75 5.625 3.75C4.1693 3.75 3 4.99238 3 6.75C3 8.95762 4.2497 10.8998 6.48385 12.6772C7.0425 13.1216 7.63838 13.5364 8.29957 13.9529C8.52345 14.0939 8.74582 14.2297 9 14.3814C9.25418 14.2297 9.47655 14.0939 9.70043 13.9529Z"
                          fill="#0A0A0A"
                          fill-opacity="0.45" />
                      </svg>
                      <h3 class="px-1">Save to wishlist</h3>
                    </Button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>

  <TheFooter />
</template>

<style lang="scss"
  scoped></style>



<!-- <div class="flex w-full gap-4 overflow-x-auto"> -->
<!-- <div v-for="item in 6"
              :key="item"
              class="w-[120px] min-w-[120px] h-[120px] rounded-2xl overflow-hidden">
              <img class="w-full h-full aspect-square"
                src="@/assets/images/room.webp"
                alt="room">
            </div> -->
<!-- </div> -->