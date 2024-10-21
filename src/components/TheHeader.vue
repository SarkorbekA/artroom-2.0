<script setup>
import { useAPI } from "../../axios.js";
import axios from "axios";

const { post, get, remove, put } = useAPI();
const baseUrl = import.meta.env.VITE_APP_BASE_URL

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
import { ref, reactive, onMounted, computed } from 'vue'

const phone = ref('');
const form = reactive({
  email: "",
  password: "",
});
const isLoginOpen = ref(false)

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
      // const response = await post("/users-permissions/login", {
      //   username: form.email,
      //   password: form.password,
      // });

      localStorage.setItem("access_token", response?.data?.data?.token)

      isLoginOpen.value = false;
    }
  } catch (error) {
    console.log(error);
  } finally {
    auth()
  }
};

const isAuthorised = ref(false)


const auth = async () => {
  let token = localStorage.getItem("access_token")

  if (token) {
    try {
      const response = await get("/users/me");

      console.log(response);

      isAuthorised.value = true;
    } catch (error) {
      console.log(error);

      if (error.status == 401 && error.status == 403) {
        isAuthorised.value = false;
      }
    }
  }
}





onMounted(async () => {
  auth()
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
        <Button v-if="!isAuthorised"
          size="sm">
          <svg width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1163_37388)">
              <path
                d="M13.7505 1.90625L14.7396 3.76087L16.5942 4.75L14.7396 5.73913L13.7505 7.59376L12.7613 5.73913L10.9067 4.75L12.7613 3.76087L13.7505 1.90625ZM7.00049 4.25L9.00047 8L12.7505 9.99999L9.00047 12L7.00049 15.75L5.00049 12L1.25049 9.99999L5.00049 8L7.00049 4.25ZM15.7505 13.25L14.5005 10.9063L13.2505 13.25L10.9067 14.5L13.2505 15.75L14.5005 18.0938L15.7505 15.75L18.0942 14.5L15.7505 13.25Z"
                fill="white"
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
          <h3 class="px-1 rainbow">Generate your idea</h3>
        </Button>
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
            <span class="px-1 py-[1px] mr-1 rounded bg-primary/[0.07] text-xs leading-[18px]">16</span>
          </Button>
          <Button variant="outline"
            size="icon">
            <img src="@/assets/images/user.jfif"
              class="w-full h-full object-cover"
              alt="">
          </Button>
        </div>
      </div>
    </div>

  </header>
</template>

<style lang="scss"></style>