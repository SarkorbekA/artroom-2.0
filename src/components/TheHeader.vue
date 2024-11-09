<script setup>
import { useAPI } from "../../axios.js";
import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_BASE_URL
import useFileList from "@/compositions/file-list";
import DropZone from "@/components/DropZone.vue";
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
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCounterStore } from '@/stores/counter'
import { ref, reactive, onMounted, watch, computed } from 'vue'
const counterStore = useCounterStore()
const { post, get, remove, put } = useAPI();
const { files, removeFile, addFiles } = useFileList();

const phone = ref('');
const form = reactive({
  email: "",
  password: "",
});
const isLoginOpen = ref(false);
const isGenerateOpen = ref(false);
const isSearchOpen = ref(false);


const onInputChange = (e) => {
  addFiles(e.target.files);
};

const formatPhoneInput = (event) => {
  let cleaned = event.target.value.replace(/\D/g, '');

  if (cleaned.length > 9) {
    cleaned = cleaned.slice(0, 9);
  }

  const match = cleaned.match(/^(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})$/);

  if (match) {
    phone.value = [match[1], match[2], match[3], match[4]]
      .filter(Boolean)
      .join(' ');
  } else {
    phone.value = cleaned;
  }
};

const login = async () => {
  try {
    if (form.email && form.password) {
      const response = await axios.post(baseUrl + "/users-permissions/login", {
        username: form.email,
        password: form.password,
      })

      localStorage.setItem("access_token", response?.data?.data?.token)

      isLoginOpen.value = false;
    }
  } catch (error) {
    console.log(error);
  } finally {
    auth()
  }
};

const logOut = () => {
  localStorage.removeItem("access_token")
  isAuthorised.value = false;
}

const isAuthorised = ref(false)


const auth = async () => {
  let token = localStorage.getItem("access_token")

  if (token) {
    try {
      const response = await get("/users/me");

      isAuthorised.value = true;
    } catch (error) {
      console.log(error);

      if (error.status == 401 && error.status == 403) {
        isAuthorised.value = false;
      }
    }
  }
}

const openSearch = () => {
  isGenerateOpen.value = false;
  isSearchOpen.value = true;
}


// const locale = localStorage.getItem('locale');

// const changeLocale = (locale) => {
//   localStorage.setItem('locale', locale);
//   window.location.reload();
// }

onMounted(async () => {
  auth()
  await counterStore.updateCount()
})


</script>

<template>
  <header class="header py-6 border-b border-border">
    <div class="container flex items-center justify-between">
      <div class="flex gap-6 items-center">
        <a href="/"
          class="header-logo">
          <img src="@/assets/images/logo.svg"
            alt="logo">
        </a>
        <div class="h-8 w-[1px] bg-[#0A0A0A12]"></div>
        <ul class="flex gap-1">
          <li>
            <Button variant="ghost"
              size="sm">
              <h3 class="px-1">Features</h3>
            </Button>
          </li>
          <li>
            <Button variant="ghost"
              size="sm">
              <h3 class="px-1">How it works?</h3>
            </Button>
          </li>
          <li>
            <Button variant="ghost"
              size="sm">
              <h3 class="px-1">Support</h3>
            </Button>
          </li>
        </ul>
      </div>
      <div class="flex gap-4 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button size="sm"
              variant="ghost">
              <svg width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5ZM7.28252 14.7506C6.56057 13.2194 6.11799 11.5307 6.02048 9.75H3.04642C3.3435 12.1324 5.03729 14.081 7.28252 14.7506ZM7.52302 9.75C7.63582 11.5791 8.15835 13.2973 9 14.814C9.84165 13.2973 10.3642 11.5791 10.477 9.75H7.52302ZM14.9536 9.75H11.9795C11.882 11.5307 11.4395 13.2194 10.7175 14.7506C12.9627 14.081 14.6565 12.1324 14.9536 9.75ZM3.04642 8.25H6.02048C6.11799 6.46933 6.56057 4.78055 7.28252 3.24942C5.03729 3.919 3.3435 5.86762 3.04642 8.25ZM7.52302 8.25H10.477C10.3642 6.42092 9.84165 4.70269 9 3.18599C8.15835 4.70269 7.63582 6.42092 7.52302 8.25ZM10.7175 3.24942C11.4395 4.78055 11.882 6.46933 11.9795 8.25H14.9536C14.6565 5.86762 12.9627 3.919 10.7175 3.24942Z"
                  fill="#0A0A0A"
                  fill-opacity="0.45" />
              </svg>
              <h3 class="px-1">Uzbekistan (EN)</h3>
              <svg width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.99998 10.4623L13.4623 6L14.523 7.06066L8.99998 12.5837L3.47705 7.06066L4.53771 6L8.99998 10.4623Z"
                  fill="#0A0A0A"
                  fill-opacity="0.45" />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent :align="'end'"
            class="w-[316px] shadow-xs py-1.5 px-0">
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

        <Dialog :open="isGenerateOpen">
          <DialogTrigger as-child>
            <Button @click="isGenerateOpen = !isGenerateOpen"
              size="sm"
              :variant="isAuthorised ? 'outline' : 'default'">
              <svg width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1163_37388)">
                  <path
                    d="M13.7505 1.90625L14.7396 3.76087L16.5942 4.75L14.7396 5.73913L13.7505 7.59376L12.7613 5.73913L10.9067 4.75L12.7613 3.76087L13.7505 1.90625ZM7.00049 4.25L9.00047 8L12.7505 9.99999L9.00047 12L7.00049 15.75L5.00049 12L1.25049 9.99999L5.00049 8L7.00049 4.25ZM15.7505 13.25L14.5005 10.9063L13.2505 13.25L10.9067 14.5L13.2505 15.75L14.5005 18.0938L15.7505 15.75L18.0942 14.5L15.7505 13.25Z"
                    :fill="!isAuthorised ? 'white' : 'black'"
                    fill-opacity="0.7" />
                </g>
                <defs>
                  <clipPath id="clip0_1163_37388">
                    <rect width="18"
                      height="18"
                      fill="white"
                      transform="translate(1 1)" />
                  </clipPath>
                </defs>
              </svg>
              <h3 :class="{
            rainbow: !isAuthorised,
            'primary': isAuthorised
          }"
                class="px-1">Generate your idea</h3>
            </Button>
          </DialogTrigger>
          <DialogContent class="dialog max-w-[633px] py-8 flex flex-col items-center gap-0 shadow-md">
            <DialogHeader class="gap-0">
              <DialogTitle class="text-text text-2xl -tracking-[0.18px] font-medium text-center">
                Generate your next idea
              </DialogTitle>
              <DialogDescription class="mt-2 text-primary/[70%] text-sm text-center">
                With AI, you can easily and endlessly design your home interior.
              </DialogDescription>
            </DialogHeader>
            <div class="mt-[64px] w-full justify-center flex gap-6">
              <button @click="openSearch"
                class="border text-left border-border p-4 h-[220px] rounded-2xl">
                <div class="aspect-[195/124] w-[195px]">
                  <img loading="lazy"
                    class="w-full object-contain"
                    src="@/assets/images/search.png"
                    alt="search">
                </div>
                <h3 class="mt-3 text-medium -tracking-[0.18px] text-md text-primary">Search products</h3>
                <h4 class="mt-2 text-primary/[0.7] text-sm">Find products within seconds</h4>
              </button>
              <button class="border text-left border-border p-4 h-[220px] rounded-2xl">
                <div class="aspect-[195/124] w-[195px]">
                  <img loading="lazy"
                    class="w-full object-contain"
                    src="@/assets/images/interior.png"
                    alt="search">
                </div>
                <h3 class="mt-3 text-medium -tracking-[0.18px] text-md text-primary">Interior assistant</h3>
                <h4 class="mt-2 text-primary/[0.7] text-sm">Design your home easily</h4>
              </button>
            </div>
            <DialogClose as-child
              class="absolute dialog-close top-8 right-8 hover:border-[1px]">
              <Button @click="isGenerateOpen = !isGenerateOpen"
                class="w-8 h-8 p-0"
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
        <Dialog v-if="!isAuthorised"
          :open="isLoginOpen">
          <DialogTrigger as-child>
            <Button @click="isLoginOpen = !isLoginOpen"
              class="ml-2"
              variant="ghost"
              size="sm">
              <h3 class="px-1">Login</h3>
            </Button>
          </DialogTrigger>
          <DialogContent class="dialog max-w-[633px] py-8 flex flex-col items-center gap-0 shadow-md">
            <DialogHeader class="gap-0">
              <DialogTitle class="text-text text-2xl -tracking-[0.18px] font-medium text-center">Sign in to Artoom
              </DialogTitle>
              <DialogDescription class="mt-2 text-primary/[70%] text-sm text-center">
                Fill out the form below to access your account.
              </DialogDescription>
            </DialogHeader>
            <form @submit.prevent="login"
              class="mt-16 max-w-[370px] w-full flex flex-col gap-6">
              <!-- <div class="flex flex-col gap-2">
                <Label for="phone"
                  class="text-left">
                  Phone
                </Label>
                <div class="relative w-full max-w-sm items-center">
                  <Input required
                    id="phone"
                    type="text"
                    v-model="phone"
                    @input="formatPhoneInput"
                    class="pl-[78px]"
                    inputmode="numeric" />
                  <span
                    class="absolute border-r border-border start-0 inset-y-0 flex items-center justify-center px-4 py-2.5 text-sm">
                    +998
                  </span>
                </div>
              </div> -->
              <div class="flex flex-col gap-2">
                <Label for="email"
                  class="text-left">
                  Email
                </Label>
                <Input v-model="form.email"
                  required
                  placeholder="Email"
                  type="email"
                  id="email" />
              </div>
              <div class="flex flex-col gap-2">
                <Label for="password"
                  class="text-left">
                  Password
                </Label>
                <Input v-model="form.password"
                  placeholder="Password"
                  required
                  id="password" />
              </div>
              <Button class="w-full">Continue</Button>
              <div class="flex gap-2 items-center justify-center">
                <h3 class="text-primary/[0.45] text-xs">Don't have an account?</h3>
                <button type="submit"
                  class="text-xs font-medium text-primary/[0.7]">Sign up here</button>
              </div>
            </form>

            <DialogClose as-child
              class="absolute dialog-close top-8 right-8 hover:border-[1px]">
              <Button @click="isLoginOpen = !isLoginOpen"
                class="w-8 h-8 p-0"
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
        <div v-if="isAuthorised"
          class="flex gap-6 items-center">
          <Button variant="outline"
            size="sm">
            <svg width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.375 3.25C15.6532 3.25 17.5 5.125 17.5 7.75C17.5 13 11.875 16 10 17.125C8.125 16 2.5 13 2.5 7.75C2.5 5.125 4.375 3.25 6.625 3.25C8.01998 3.25 9.25 4 10 4.75C10.75 4 11.98 3.25 13.375 3.25ZM10.7004 14.9529C11.3616 14.5364 11.9575 14.1216 12.5162 13.6772C14.7503 11.8998 16 9.95762 16 7.75C16 5.98057 14.8472 4.75 13.375 4.75C12.5681 4.75 11.6945 5.17683 11.0606 5.81066L10 6.87132L8.93935 5.81066C8.30551 5.17683 7.43192 4.75 6.625 4.75C5.1693 4.75 4 5.99238 4 7.75C4 9.95762 5.2497 11.8998 7.48385 13.6772C8.0425 14.1216 8.63838 14.5364 9.29957 14.9529C9.52345 15.0939 9.74582 15.2297 10 15.3814C10.2542 15.2297 10.4766 15.0939 10.7004 14.9529Z"
                fill="#0A0A0A"
                fill-opacity="0.45" />
            </svg>
            <h3 class="px-1">Favourities</h3>
            <span class="px-1 py-[1px] mr-1 rounded bg-primary/[0.07] text-xs leading-[18px]">
              {{ counterStore.count }}
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline"
                size="icon">
                <img src="@/assets/images/user.jfif"
                  class="w-full h-full object-cover"
                  alt="">
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent :align="'end'"
              class="w-[150px] shadow-xs py-1.5 px-0">
              <DropdownMenuCheckboxItem>
                Edit
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem @click="logOut()"
                variant="destructive">
                Log out
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
    </div>

    <Dialog :open="isSearchOpen">
      <DialogContent class="dialog max-w-[633px] p-8 flex flex-col items-center gap-0 shadow-md">
        <DialogHeader class="gap-0">
          <DialogTitle class="text-text text-2xl -tracking-[0.18px] font-medium text-center">
            Search products
          </DialogTitle>
          <DialogDescription class="mt-2 text-primary/[70%] text-sm text-center max-w-[370px]">
            Upload a photo of the product you are looking for. AI Assistant will find you that product or its
            alternatives in the stores closest to you
          </DialogDescription>
        </DialogHeader>
        <div class="mt-[64px] w-full">
          <DropZone class="drop-area w-full w-full rounded-xl border border-dashed border-primary/[0.16]"
            @file-dropped="addFiles">
            <label class="py-[55px] px-6"
              for="file-input">
              <div class="flex flex-col items-center">
                <div class="flex items-center justify-center w-6 h-6">
                  <svg width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.5 12.5858L16.7426 16.8284L15.3284 18.2426L13.5 16.415V22H11.5V16.413L9.67157 18.2426L8.25736 16.8284L12.5 12.5858ZM12.5 2C16.0934 2 19.0544 4.70761 19.4541 8.19395C21.7858 8.83154 23.5 10.9656 23.5 13.5C23.5 16.3688 21.3036 18.7246 18.5006 18.9776L18.5009 16.9644C20.1966 16.7214 21.5 15.2629 21.5 13.5C21.5 11.567 19.933 10 18 10C17.7912 10 17.5867 10.0183 17.3887 10.054C17.4616 9.7142 17.5 9.36158 17.5 9C17.5 6.23858 15.2614 4 12.5 4C9.73858 4 7.5 6.23858 7.5 9C7.5 9.36158 7.53838 9.7142 7.61205 10.0533C7.41331 10.0183 7.20879 10 7 10C5.067 10 3.5 11.567 3.5 13.5C3.5 15.2003 4.71241 16.6174 6.31986 16.934L6.50005 16.9646L6.50039 18.9776C3.69696 18.7252 1.5 16.3692 1.5 13.5C1.5 10.9656 3.21424 8.83154 5.54648 8.19411C5.94561 4.70761 8.90661 2 12.5 2Z"
                      fill="#0A0A0A"
                      fill-opacity="0.45" />
                  </svg>
                </div>
                <h3 class="text-sm text-center text-primary select-none mt-4">
                  Drop your files here, or
                  <span class="block font-semibold text-brand">
                    click to browse
                  </span>
                </h3>
              </div>
              <input multiple
                type="file"
                accept=".svg, .png, .jpg, .jpeg, .gif .webp"
                id="file-input"
                @change="onInputChange" />
            </label>
          </DropZone>
          <div class="flex justify-between mt-3 text-xs text-primary/[0.45]">
            <h3>Up to 10 files</h3>
            <h3>50MB total limit</h3>
          </div>
          <div v-if="files.length"
            class="branch-images mt-3 w-full grid grid-cols-3 max-h-[194px] gap-2 overflow-x-auto scrollbarY pr-0.5">
            <div v-for="file in files"
              :key="file.id"
              class="w-full min-w-[170px] h-[194px] rounded-lg overflow-hidden relative">
              <img class="w-full h-full object-cover"
                :src="file.url"
                :alt="file.file.name"
                :title="file.file.name" />
              <button @click="removeFile(file)"
                type="button"
                class="bg-primary/[0.45] flex items-center justify-center rounded-full absolute top-2 right-2 w-5 h-5">
                <svg width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.00045 7.05767L11.3003 3.75781L12.2431 4.70062L8.94325 8.00047L12.2431 11.3003L11.3003 12.2431L8.00045 8.94327L4.70063 12.2431L3.75781 11.3003L7.05765 8.00047L3.75781 4.70062L4.70063 3.75781L8.00045 7.05767Z"
                    fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <DialogClose as-child
          class="absolute dialog-close top-8 right-8 hover:border-[1px]">
          <Button @click="isSearchOpen = !isSearchOpen"
            class="w-8 h-8 p-0"
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

  </header>
</template>

<style lang="scss"
  scoped>
  .drop-area {
    transition: 0.2s ease;

    &[data-active="true"] {
      background: rgba(127, 86, 217, 0.1);
    }
  }

  label {
    cursor: pointer;
    display: block;
    position: relative;

    input[type="file"] {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      top: 0;
      left: 0;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }


  }
</style>