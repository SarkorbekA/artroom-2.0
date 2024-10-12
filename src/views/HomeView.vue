<script setup>
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
</script>

<template>
  <div>
    <TheHeader />
    <div class="container">
      <!-- Header -->
      <div class="flex justify-between items-center py-6">
        <h3 class="text-[--text-primary] text-lg letter-spacing-[-1%]">Inspirations</h3>
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
            class="w-[180px] shadow-xs py-1.5">
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

      <!-- Products -->
      <ul class="grid grid-cols-4 gap-6 py-8">
        <li v-for="item in 12"
          :key="item"
          class="w-full h-[322px] overflow-hidden bg-[#F7F7F7] rounded-2xl border border-border">
          <img class="w-full h-full object-cover"
            src="@/assets/images/product.jpg"
            alt="product">
        </li>
      </ul>

      <!-- Sketelon -->
      <div v-if="false" class="grid grid-cols-4 gap-6 py-8">
        <Skeleton v-for="item in 12"
          :key="item"
          class="w-full h-[322px] rounded-2xl" />
      </div>
    </div>

    <TheFooter />
  </div>
</template>


<style lang="scss"
  scoped></style>