<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { onMounted, ref, onBeforeUnmount, shallowRef, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Button } from '@/components/ui/button'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

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
  createYmaps,
  YandexMap,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapZoomControl,
  YandexMapMarker
} from "vue-yandex-maps";

import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const route = useRoute();
const router = useRouter();


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

const map = shallowRef(null);
const productSwiper = ref(null)

const goNext = () => {
  // if (productSwiper.value && productSwiper.value.swiper) {
  productSwiper.value.slideNext()
  // }
}

// Метод для перехода к предыдущему слайду
const goPrev = () => {
  if (productSwiper.value && productSwiper.value.swiper) {
    productSwiper.value.slidePrev()
  }
}

const handleClick = () => console.log('as');

const markers = [
  {
    coordinates: [69.279737, 41.311158],
    onClick: handleClick,
  }
];


const swiperInstance = ref()

function onSwiper(swiper) {
  swiperInstance.value = swiper
}
const swiperNextSlide = () => {
  swiperInstance.value.slideNext()
};
const swiperPrevSlide = () => {
  swiperInstance.value.slidePrev()
};

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
              src="@/assets/images/green.jpg"
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
                v-for="item in 4"
                :key="item">
                <div class="w-full aspect-square rounded-2xl overflow-hidden">
                  <img loading="lazy"
                    class="w-full h-full"
                    src="@/assets/images/green.jpg"
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
            <h3 class="w-full text-text text-2xl leading-[30px] font-medium truncate ...">PECAS</h3>
            <p class="text-medium mt-4 text-lg text-primary/[0.7] -tracking-[0.18px]">Use the robust IDÅSEN cabinet to
              store work things close to your workspace – and buy ROTHULT smart lock
              separately to keep important papers safe. Goes perfectly with other furniture in the IDÅSEN series.</p>
          </div>
          <div class="mt-5 flex w-full flex-col pb-5 border-b border-border">
            <div class="p-3 pr-6 bg-light flex items-center">
              <div class="w-[124px]">Price:</div>
              <div class="flex flex-col gap-1">
                <h3 class="text-medium text-primary text-md -tracking-[0.18px]">~ $1,540</h3>
                <p class="text-primary/[0.7] font-medium text-[11px]">(The price shown is an estimated average price of
                  available products and is not fixed)</p>
              </div>
            </div>
            <div class="p-3 pr-6 flex items-center">
              <div class="w-[124px]">Brand:</div>
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-md overflow-hidden">
                  <img class="w-full h-full object-cover"
                    src="@/assets/images/brand.png"
                    alt="brand">
                </div>
                <h3 class="text-medium text-primary text-md -tracking-[0.18px]">IKEA</h3>
              </div>
            </div>
            <div class="p-3 pr-6 bg-light flex items-center">
              <div class="w-[124px]">Style:</div>
              <h3 class="text-medium text-primary text-md -tracking-[0.18px]">Modern</h3>
            </div>
            <div class="p-3 pr-6 flex items-center">
              <div class="w-[124px]">Size:</div>
              <h3 class="text-medium text-primary text-md -tracking-[0.18px]">124inch / 84inch</h3>
            </div>
            <div class="p-3 pr-6 bg-light flex items-center">
              <div class="w-[124px]">Color:</div>
              <div class="flex gap-3">
                <div class="rounded-full bg-blue w-6 h-6"></div>
                <div class="rounded-full bg-black w-6 h-6"></div>
                <div class="rounded-full bg-brand w-6 h-6"></div>
              </div>
            </div>
            <div class="p-3 pr-6 flex items-center">
              <div class="w-[124px]">Material:</div>
              <h3 class="text-medium text-primary text-md -tracking-[0.18px]">Fabric</h3>
            </div>
          </div>
          <div class="flex mt-9 w-full gap-3">
            <Button variant="outline"
              class="w-1/2">
              <svg width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.5007 4.3964C12.2625 2.815 14.985 2.8675 16.6819 4.56802C18.379 6.26854 18.4372 8.97775 16.8589 10.7448L10.4999 17.1138L4.14103 10.7448C2.56279 8.97775 2.62178 6.26426 4.31802 4.56802C6.01618 2.86986 8.73389 2.81265 10.5007 4.3964ZM15.6202 5.62758C14.4959 4.50096 12.6807 4.45526 11.5027 5.51265L10.5014 6.41143L9.49957 5.51336C8.31823 4.45448 6.50629 4.50106 5.37868 5.62868C4.26137 6.74598 4.20528 8.53548 5.23495 9.7174L10.4999 14.9907L15.7651 9.7174C16.7951 8.53503 16.7392 6.74894 15.6202 5.62758Z"
                  fill="#0A0A0A"
                  fill-opacity="0.45" />
              </svg>
              <h3 class="px-1">Add to wishlist</h3>
            </Button>
            <Dialog>
              <DialogTrigger as-child>
                <Button class="w-1/2">
                  <svg width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.75 10.9317V16H17.5V17.5H2.5V16H3.25V10.9317C2.34551 10.3263 1.75 9.29515 1.75 8.125C1.75 7.50464 1.91832 6.90716 2.22491 6.3981L4.25898 2.875C4.39295 2.64295 4.64054 2.5 4.90849 2.5H15.0915C15.3594 2.5 15.6071 2.64295 15.741 2.875L17.7681 6.38629C18.0817 6.90716 18.25 7.50464 18.25 8.125C18.25 9.29515 17.6545 10.3263 16.75 10.9317ZM15.25 11.4794C15.1269 11.493 15.0017 11.5 14.875 11.5C13.9307 11.5 13.0592 11.1085 12.4375 10.4599C11.8158 11.1085 10.9443 11.5 10 11.5C9.05568 11.5 8.18418 11.1085 7.5625 10.4599C6.94082 11.1085 6.06933 11.5 5.125 11.5C4.99825 11.5 4.87313 11.493 4.75 11.4794V16H15.25V11.4794ZM5.34149 4L3.51698 7.15991C3.34307 7.44882 3.25 7.77917 3.25 8.125C3.25 9.16052 4.08947 10 5.125 10C5.89822 10 6.5835 9.52772 6.86634 8.82212C7.11805 8.19417 8.00695 8.19417 8.25866 8.82212C8.54148 9.52772 9.22675 10 10 10C10.7732 10 11.4585 9.52772 11.7414 8.82212C11.9931 8.19417 12.8819 8.19417 13.1336 8.82212C13.4165 9.52772 14.1018 10 14.875 10C15.9105 10 16.75 9.16052 16.75 8.125C16.75 7.77917 16.6569 7.44882 16.476 7.1481L14.6585 4H5.34149Z"
                      fill="white" />
                  </svg>
                  <h3 class="px-1">See available stores</h3>
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
                    <yandex-map ref="map"
                      class="h-full w-full"
                      :settings="{
              location: {
                center: [69.279737, 41.311158],
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

          </div>
          <div class="mt-9 rounded-xl flex items-start gap-4 bg-blueL w-full p-6">
            <div
              class="w-[48px] h-[48px] rounded-full shadow-xs border-light border bg-background flex justify-center items-center">
              <svg width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z"
                  fill="#1487FA" />
              </svg>
            </div>
            <div>
              <h3 class="-tracking-[0.18px] text-md font-medium mb-1">Chat with support</h3>
              <p class="text-primary/[0.7] text-sm font-medium mb-4">Get in touch with our customer service team for any
                inquiries or issues you may have.</p>
              <Button variant="outline"
                size="sm">
                <h3 class="px-1">Start a chat</h3>
              </Button>
            </div>
          </div>



        </div>
      </div>
      <div class="mt-8">
        <div class="flex justify-between items-center gap-6">
          <h3 class="-tracking-[0.18px] text-2xl font-semibold text-primary">Related products</h3>
          <div class="flex items-center">
            <button class="rounded-l-2xl w-10 h-10 border border-primary/[0.1] flex justify-center items-center"
              @click="swiperPrevSlide">
              <svg width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.2183 9.33327H15.3327V10.6666H7.2183L10.7943 14.2425L9.85148 15.1853L4.66602 9.99993L9.85148 4.81445L10.7943 5.75726L7.2183 9.33327Z"
                  fill="#0A0A0A"
                  fill-opacity="0.45" />
              </svg>
            </button>
            <button class="rounded-r-2xl w-10 h-10 border border-primary/[0.1] flex justify-center items-center"
              @click="swiperNextSlide">
              <svg width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.7804 9.33327L9.20442 5.75726L10.1472 4.81445L15.3327 9.99993L10.1472 15.1853L9.20442 14.2425L12.7804 10.6666H4.66602V9.33327H12.7804Z"
                  fill="#0A0A0A"
                  fill-opacity="0.45" />
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-6">
          <swiper @swiper="onSwiper"
            ref="productSwiper"
            :slidesPerView="4"
            :space-between="24"
            :free-mode="true"
            :navigation="false"
            :modules="[Navigation]"
            class="productSwiper">
            <swiper-slide class="rounded-2xl aspect-square bg-light">
              <img class="w-full h-full object-cover"
                src="@/assets/images/product.jpg"
                alt="">
            </swiper-slide>
            <swiper-slide class="rounded-2xl aspect-square bg-light">
              <img class="w-full h-full object-cover"
                src="@/assets/images/product.jpg"
                alt="">
            </swiper-slide>
            <swiper-slide class="rounded-2xl aspect-square bg-light">
              <img class="w-full h-full object-cover"
                src="@/assets/images/product.jpg"
                alt="">
            </swiper-slide>
            <swiper-slide class="rounded-2xl aspect-square bg-light">
              <img class="w-full h-full object-cover"
                src="@/assets/images/product.jpg"
                alt="">
            </swiper-slide>
            <swiper-slide class="rounded-2xl aspect-square bg-light">
              <img class="w-full h-full object-cover"
                src="@/assets/images/product.jpg"
                alt="">
            </swiper-slide>
            <swiper-slide class="rounded-2xl aspect-square bg-light">
              <img class="w-full h-full object-cover"
                src="@/assets/images/product.jpg"
                alt="">
            </swiper-slide>
          </swiper>
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

<style lang="scss">
.productSwiper {

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
</style>