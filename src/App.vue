<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Button } from '@/components/ui/button'

</script>

<template>
  <RouterView />
</template>


<style lang="scss">
.dialog {
  &>button:not(.dialog-close) {
    display: none;
  }
}
</style>