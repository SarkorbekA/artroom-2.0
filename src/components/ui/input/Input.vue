<script setup>
import { cn } from '@/lib/utils';
import { useVModel } from '@vueuse/core';

const props = defineProps({
  defaultValue: { type: [String, Number], required: false },
  modelValue: { type: [String, Number], required: false },
  class: { type: null, required: false },
});

const emits = defineEmits(['update:modelValue']);

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <input v-model="modelValue"
    :class="cn(
      'flex h-10 w-full rounded-md bg-primary/[0.04] px-3 py-2 text-sm focus-visible:ring-[1px] focus-visible:ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-primary/[0.45] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
    )
      " />
</template>


<!-- focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background -->