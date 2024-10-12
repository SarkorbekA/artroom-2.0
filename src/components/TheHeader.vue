<script setup>
import { Button } from '@/components/ui/button'
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
            <a href="#">
              <Button variant="ghost"
                size="sm">
                <h3 class="px-1">Features</h3>
              </Button>
            </a>
          </li>
          <li>
            <a href="#">
              <Button variant="ghost"
                size="sm">
                <h3 class="px-1">How it works?</h3>
              </Button>
            </a>
          </li>
          <li>
            <a href="#">
              <Button variant="ghost"
                size="sm">
                <h3 class="px-1">Support</h3>
              </Button>
            </a>
          </li>
        </ul>
      </div>
      <div class="flex gap-6 items-center">
        <Button size="sm">
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
        <Button variant="ghost"
          size="sm">
          <h3 class="px-1">Login</h3>
        </Button>
      </div>
    </div>

  </header>
</template>

<style lang="scss"
  scoped>

</style>