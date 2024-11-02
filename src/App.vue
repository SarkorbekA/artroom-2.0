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

.product {
  &-box {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0px;
      z-index: -1;
      box-shadow: 0 0 50px 30px rgba(0, 0, 0, 0.5);
    }
  }

  &:hover {
    .product {
      &-inner {
        opacity: 1;
        visibility: visible;
      }

      &-btn {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>