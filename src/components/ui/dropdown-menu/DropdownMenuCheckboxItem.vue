<script setup>
import { cva } from "class-variance-authority";
import { computed } from "vue";
import {
  DropdownMenuCheckboxItem,
  DropdownMenuItemIndicator,
  useForwardPropsEmits,
} from "radix-vue";
import { Check } from "lucide-vue-next";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center gap-0.5 justify-start cursor-pointer whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none border-[0.5px] border-transparent ring-[2.5px] ring-transparent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        destructive:
          "text-[red]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const props = defineProps({
  variant: { type: null, required: false },
  checked: { type: [Boolean, String], required: false },
  disabled: { type: Boolean, required: false },
  textValue: { type: String, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
});
const emits = defineEmits(["select", "update:checked"]);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DropdownMenuCheckboxItem v-bind="forwarded"
    :class="cn(
    buttonVariants({ variant }),
    'relative flex select-none items-center rounded-sm py-2 px-4 border-none text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    props.class,
  )
    ">
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <Check class="w-4 h-4" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuCheckboxItem>
</template>
