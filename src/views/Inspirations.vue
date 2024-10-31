<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { onMounted, ref } from 'vue';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import {
  createYmaps,
  YandexMap,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapZoomControl,
  YandexMapMarker
} from "vue-yandex-maps";

import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import router from '@/router';
import 'swiper/css';


const route = useRoute();

const isGrid = ref(false)

const activeLocation = ref(0);
const locations = ref([
  {
    title: "Harmon’s store",
    address: "16A King Adam’s street, Manchester",
    phone: "+998999999999",
    chatLink: "@user",
  },
  {
    title: "Harmon’s store",
    address: "16A King Adam’s street, Manchester",
    phone: "+998999999999",
    chatLink: "@user",
  },
  {
    title: "Harmon’s store",
    address: "16A King Adam’s street, Manchester",
    phone: "+998999999999",
    chatLink: "@user",
  },
  {
    title: "Harmon’s store",
    address: "16A King Adam’s street, Manchester",
    phone: "+998999999999",
    chatLink: "@user",
  }
])


const setLocation = (id) => {
  activeLocation.value = id
}

const handleClick = () => console.log('as');

const markers = [
  {
    coordinates: [69.279737, 41.311158],
    onClick: handleClick,
  },
  // {
  //   coordinates: [54.76778893634, 57.108481458691],
  //   onClick: handleClick,
  // },
];
</script>

<template>
  <TheHeader />

  <section class="py-8">
    <div class="container">
      <div class="grid gap-5 grid-cols-2">
        <div class="flex flex-col row-span-2 row-start-1 row-end-2 gap-6 mr-1 w-full">
          <div class="rounded-2xl w-full overflow-hidden relative">
            <img loading="lazy"
              class="w-full h-full aspect-square select-none"
              src="@/assets/images/room.webp"
              alt="room">
            <div class="absolute w-full h-full top-0 left-0">
              <div class="top-[100px] left-[100px] absolute">
                <div class="relative">
                  <HoverCard>
                    <HoverCardTrigger class="h-[36px] inline-block">
                      <Button size="iconR"
                        variant="transparent"
                        class="product-btn relative">
                        <svg xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none">
                          <g filter="url(#filter0_b_1053_16016)">
                            <path
                              d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z"
                              fill="white"
                              fill-opacity="0.24" />
                            <circle cx="18"
                              cy="18"
                              r="10"
                              fill="white" />
                          </g>
                          <defs>
                            <filter id="filter0_b_1053_16016"
                              x="-20"
                              y="-20"
                              width="76"
                              height="76"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0"
                                result="BackgroundImageFix" />
                              <feGaussianBlur in="BackgroundImageFix"
                                stdDeviation="10" />
                              <feComposite in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_1053_16016" />
                              <feBlend mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_1053_16016"
                                result="shape" />
                            </filter>
                          </defs>
                        </svg>
                        <span
                          class="absolute duration-200 opacity-0 w-2 h-2 bg-primary rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></span>
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent :align="'center'"
                      :side="'right'"
                      class="w-[176px] p-4 rounded-xl border-none">
                      <div class="flex gap-3 items-center">
                        <div class="w-[56px] h-[56px]">
                          <img loading="lazy"
                            draggable="false"
                            class="w-full h-full object-cover"
                            src="@/assets/images/divan.webp"
                            alt="product">
                        </div>
                        <div>
                          <h3 class="text-blue font-medium text-xs"># Sofas</h3>
                          <h3 class="text-text font-medium text-md">UPPLAND</h3>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>
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
                  <img loading="lazy"
                    class="w-full h-full"
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
                  <Button @click="isGrid = false"
                    :variant="isGrid ? 'group' : 'current'"
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
                  <Button @click="isGrid = true"
                    :variant="isGrid ? 'current' : 'group'"
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
              <li v-for="item in 4"
                :key="item"
                class="flex gap-4 shadow-xs bg-background p-4 rounded-[10px] border border-light">
                <div class="w-[132px] h-[132px] flex justify-center items-center border border-light rounded-lg">
                  <img loading="lazy"
                    class="w-full h-full object-cover"
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
                    <!-- ====  Dialog  ==== -->
                    <Dialog>
                      <DialogTrigger as-child>
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
                      </DialogTrigger>
                      <DialogContent class="max-w-[926px] dialog shadow-md !rounded-3xl overflow-hidden p-0 gap-0">
                        <DialogHeader class="gap-2 py-6 px-8">
                          <DialogTitle class="text-2xl text-text -tracking-[0.18px] text-medium">UPPLAND</DialogTitle>
                          <DialogDescription class="text-primary/[0.7] text-sm">
                            See product details and available stores
                          </DialogDescription>
                        </DialogHeader>
                        <div class="py-6 px-8 flex gap-6">
                          <ul class="flex flex-col gap-4 max-w-[370px] px-1 w-full">
                            <li v-for="(item, index) in locations"
                              :key="index"
                              :class="{
                      'bg-light border-dark !shadow-extra': activeLocation == index
                    }"
                              class="flex flex-col gap-2 shadow-xs border-border border-[1px] relative p-4 rounded-lg">
                              <div @click="setLocation(index)"
                                class="absolute top-0 left-0 w-full h-full z-20 cursor-pointer"></div>
                              <h3 class="font-medium text-md text-text -tracking-[0.18px]">{{ item.title }}</h3>
                              <h4 class="text-sm text-primary/[0.7]">{{ item.address }}</h4>
                              <div class="relative z-50 grid grid-cols-2 items-center gap-3">
                                <Button variant="outline"
                                  size="xs">
                                  <svg xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none">
                                    <path
                                      d="M7.02417 8.01158C7.7265 9.2466 8.7534 10.2735 9.98842 10.9758L10.6518 10.0471C10.8724 9.73838 11.2887 9.64297 11.6217 9.82485C12.6768 10.4012 13.8428 10.7515 15.0592 10.8478C15.4492 10.8787 15.75 11.2042 15.75 11.5954V14.9426C15.75 15.3271 15.4591 15.6493 15.0766 15.6886C14.6792 15.7295 14.2783 15.75 13.875 15.75C7.45469 15.75 2.25 10.5453 2.25 4.125C2.25 3.7217 2.27057 3.32078 2.31142 2.92332C2.35073 2.54081 2.67296 2.25 3.05749 2.25H6.40456C6.79583 2.25 7.12135 2.55078 7.15222 2.94082C7.2485 4.15716 7.59877 5.32323 8.17515 6.37833C8.35703 6.7113 8.26162 7.12766 7.95292 7.34818L7.02417 8.01158ZM5.13319 7.5189L6.55815 6.50107C6.1541 5.62885 5.87721 4.70387 5.73545 3.75H3.7568C3.75227 3.87474 3.75 3.99975 3.75 4.125C3.75 9.71685 8.28315 14.25 13.875 14.25C14.0002 14.25 14.1253 14.2478 14.25 14.2432V12.2645C13.2962 12.1228 12.3712 11.8459 11.4989 11.4419L10.4811 12.8668C10.0694 12.7069 9.6717 12.5186 9.29055 12.3046L9.24697 12.2797C7.77728 11.444 6.55601 10.2227 5.72025 8.75303L5.69545 8.70945C5.48137 8.3283 5.29316 7.93065 5.13319 7.5189Z"
                                      fill="#0A0A0A"
                                      fill-opacity="0.45" />
                                  </svg>
                                  <h3 class="px-1">Show number</h3>
                                </Button>
                                <Button variant="outline"
                                  size="xs">
                                  <svg width="19"
                                    height="18"
                                    viewBox="0 0 19 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M8 2.25H11C14.3137 2.25 17 4.93629 17 8.25C17 11.5637 14.3137 14.25 11 14.25V16.875C7.25 15.375 2 13.125 2 8.25C2 4.93629 4.68629 2.25 8 2.25ZM9.5 12.75H11C13.4853 12.75 15.5 10.7353 15.5 8.25C15.5 5.76472 13.4853 3.75 11 3.75H8C5.51472 3.75 3.5 5.76472 3.5 8.25C3.5 10.9575 5.34656 12.7242 9.5 14.6098V12.75Z"
                                      fill="#0A0A0A"
                                      fill-opacity="0.45" />
                                  </svg>
                                  <h3 class="px-1">Chat</h3>
                                </Button>
                              </div>
                            </li>
                          </ul>
                          <div class="h-full map rounded-lg overflow-hidden relative">
                            <yandex-map class="h-full w-full"
                              :settings="{
                      location: {
                        center: [69.279737, 41.711158],
                        zoom: 9,
                      },
                    }"
                              height="100%"
                              width="100%">
                              <yandex-map-default-features-layer />
                              <yandex-map-default-scheme-layer :settings="{ theme: 'light' }" />
                              <yandex-map-controls :settings="{ position: 'right' }">
                                <yandex-map-zoom-control />
                              </yandex-map-controls>

                              <yandex-map-marker v-for="(marker, index) in markers"
                                :key="index"
                                :settings="marker">
                                <Popover>
                                  <PopoverTrigger>
                                    <svg width="21"
                                      height="33"
                                      viewBox="0 0 21 33"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <!-- <path fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10.5 0C16.0228 0 20.5 4.47715 20.5 10C20.5 15.2016 16.5285 19.4757 11.4524 19.9552V30.4762C11.4524 31.0022 11.026 31.4286 10.5 31.4286C9.97401 31.4286 9.54762 31.0022 9.54762 30.4762V19.9552C4.47149 19.4757 0.5 15.2016 0.5 10C0.5 4.47715 4.97715 0 10.5 0Z"
                                        fill="black" /> -->
                                      <path fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10.5 0C16.0228 0 20.5 4.47715 20.5 10C20.5 15.2016 16.5285 19.4757 11.4524 19.9552V30.4762C11.4524 31.0022 11.026 31.4286 10.5 31.4286C9.97401 31.4286 9.54762 31.0022 9.54762 30.4762V19.9552C4.47149 19.4757 0.5 15.2016 0.5 10C0.5 4.47715 4.97715 0 10.5 0Z"
                                        fill="#8B5CF6" />
                                      <path
                                        d="M13.8327 9.99984C13.8327 8.15889 12.3403 6.6665 10.4993 6.6665C8.6584 6.6665 7.16602 8.15889 7.16602 9.99984C7.16602 11.8408 8.6584 13.3332 10.4993 13.3332C12.3403 13.3332 13.8327 11.8408 13.8327 9.99984Z"
                                        fill="white" />
                                      <path opacity="0.3"
                                        d="M10.5001 32.381C11.8151 32.381 12.881 31.848 12.881 31.1905C12.881 30.533 11.8151 30 10.5001 30C9.18513 30 8.11914 30.533 8.11914 31.1905C8.11914 31.848 9.18513 32.381 10.5001 32.381Z"
                                        fill="black" />
                                    </svg>
                                  </PopoverTrigger>
                                  <PopoverContent class="text-center">
                                    location
                                  </PopoverContent>
                                </Popover>

                              </yandex-map-marker>
                            </yandex-map>

                            <Button class="absolute top-[14px] right-[14.5px]"
                              variant="outline"
                              size="xs">
                              <svg width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M11.3401 13.7671L8.19097 12.0493C7.64351 12.6344 6.86446 13 6 13C4.34314 13 3 11.6568 3 10C3 8.34314 4.34314 7 6 7C6.86441 7 7.64344 7.36559 8.19088 7.95059L11.3401 6.23285C11.2813 5.99831 11.25 5.7528 11.25 5.5C11.25 3.84314 12.5932 2.5 14.25 2.5C15.9068 2.5 17.25 3.84314 17.25 5.5C17.25 7.15686 15.9068 8.5 14.25 8.5C13.3855 8.5 12.6065 8.13438 12.059 7.54935L8.90983 9.2671C8.96873 9.50163 9 9.74718 9 10C9 10.2528 8.96873 10.4983 8.90986 10.7328L12.0591 12.4506C12.6065 11.8656 13.3855 11.5 14.25 11.5C15.9068 11.5 17.25 12.8432 17.25 14.5C17.25 16.1568 15.9068 17.5 14.25 17.5C12.5932 17.5 11.25 16.1568 11.25 14.5C11.25 14.2472 11.2813 14.0016 11.3401 13.7671ZM6 11.5C6.82843 11.5 7.5 10.8285 7.5 10C7.5 9.17155 6.82843 8.5 6 8.5C5.17157 8.5 4.5 9.17155 4.5 10C4.5 10.8285 5.17157 11.5 6 11.5ZM14.25 7C15.0785 7 15.75 6.32843 15.75 5.5C15.75 4.67157 15.0785 4 14.25 4C13.4215 4 12.75 4.67157 12.75 5.5C12.75 6.32843 13.4215 7 14.25 7ZM14.25 16C15.0785 16 15.75 15.3285 15.75 14.5C15.75 13.6715 15.0785 13 14.25 13C13.4215 13 12.75 13.6715 12.75 14.5C12.75 15.3285 13.4215 16 14.25 16Z"
                                  fill="#0A0A0A"
                                  fill-opacity="0.45" />
                              </svg>
                              <h3 class="px-1">Share location</h3>
                            </Button>
                          </div>
                        </div>
                        <DialogFooter>
                          <div class="w-full bg-light py-6 px-8 flex justify-between items-center">
                            <div class="flex items-center gap-2">
                              <Button variant="outline"
                                size="xs">
                                <svg width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M6.46838 16.6181L2.5 17.5L3.38186 13.5316C2.81908 12.4792 2.5 11.2769 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C8.72312 17.5 7.5208 17.181 6.46838 16.6181ZM6.68556 15.0333L7.17571 15.2954C8.03686 15.7559 8.99913 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 11.0009 4.24412 11.9631 4.70462 12.8243L4.96672 13.3144L4.47562 15.5244L6.68556 15.0333Z"
                                    fill="#0A0A0A"
                                    fill-opacity="0.45" />
                                </svg>
                                <h3 class="px-1">Chat with support</h3>
                              </Button>
                              <Button variant="outline"
                                size="xs">
                                <svg width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M10.0007 4.3964C11.7625 2.815 14.485 2.8675 16.1819 4.56802C17.879 6.26854 17.9372 8.97775 16.3589 10.7448L9.99992 17.1138L3.64103 10.7448C2.06279 8.97775 2.12178 6.26426 3.81802 4.56802C5.51618 2.86986 8.23389 2.81265 10.0007 4.3964ZM15.1202 5.62758C13.9959 4.50096 12.1807 4.45526 11.0027 5.51265L10.0014 6.41143L8.99957 5.51336C7.81823 4.45448 6.00629 4.50106 4.87868 5.62868C3.76137 6.74598 3.70528 8.53548 4.73495 9.7174L9.99992 14.9907L15.2651 9.7174C16.2951 8.53503 16.2392 6.74894 15.1202 5.62758Z"
                                    fill="#0A0A0A"
                                    fill-opacity="0.45" />
                                </svg>
                                <h3 class="px-1">Save to wishlist</h3>
                              </Button>
                            </div>
                            <div class="flex items-center gap-2">
                              <DialogClose as-child
                                class="">
                                <Button variant="outline"
                                  size="xs">
                                  <h3 class="px-1">Close</h3>
                                </Button>
                              </DialogClose>
                            </div>
                          </div>
                        </DialogFooter>

                        <DialogClose as-child
                          class="absolute dialog-close top-6 right-8 hover:border-[1px]">
                          <Button class="w-8 h-8 p-0"
                            type="button"
                            variant="outline">
                            <svg width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M7.93942 9.00009L2.09473 3.15538L3.15538 2.09473L9.00007 7.93936L14.8447 2.09473L15.9054 3.15538L10.0607 9.00009L15.9054 14.8447L14.8447 15.9054L9.00007 10.0607L3.15538 15.9054L2.09473 14.8447L7.93942 9.00009Z"
                                fill="#0A0A0A"
                                fill-opacity="0.45" />
                            </svg>
                          </Button>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
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
  scoped>
  .product {
    &-btn[data-state="open"] {
      span {
        opacity: 1;
      }
    }
  }

  .map {
    width: calc(100% - 370px - 24px);
  }

  .marker {
    position: relative;
    width: 20px;
    height: 20px;
    background: #ff0000;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    text-align: center;
    color: #fff;
    font-weight: bold;
    line-height: 20px;
  }
</style>



<!-- <div class="flex w-full gap-4 overflow-x-auto"> -->
<!-- <div v-for="item in 6"
              :key="item"
              class="w-[120px] min-w-[120px] h-[120px] rounded-2xl overflow-hidden">
              <img class="w-full h-full aspect-square"
                src="@/assets/images/room.webp"
                alt="room">
            </div> -->
<!-- </div> -->