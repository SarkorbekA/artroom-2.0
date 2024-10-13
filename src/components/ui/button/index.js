import { cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center text-text gap-0.5 justify-center whitespace-nowrap text-sm font-medium transition-colors focus:outline-none border-[0.5px] border-transparent ring-[2.5px] ring-transparent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-background border-primary hover:bg-primary-foreground focus:border-[--border-hover] focus:ring-ring",
        destructive:
          "bg-destructive text-background hover:bg-destructive/90",
        outline:
          "border border-input shadow-xs bg-background focus:border-[--border-hover] focus:ring-ring",
        secondary:
          "bg-primary/[0.04] text-text hover:bg-primary/[0.07] focus:border-[--border-hover] focus:ring-ring",
        ghost: "text-primary/[0.7] hover:bg-primary/[0.04] focus:bg-primary/[0.01] focus:border-[--border-hover] focus:ring-ring",
        link: "text-primary underline-offset-4 hover:underline",
        base: "gap-1 text-text border-none !p-0",
        group: "bg-background hover:bg-primary/[0.04]",
        current: "bg-primary/[0.04]"
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: "h-7 rounded px-2",
        sm: "h-8 rounded-lg px-2 py-1.5",
        smT: "h-8 rounded-lg px-3 py-1.5",
        lg: "h-11 rounded-md px-8",
        icon: "h-8 w-8 rounded-full overflow-hidden bg-light",
        base: "h-5"
      },
      side: {
        default: 'rounded-md',
        left: 'rounded-l-lg rounded-r-none',
        right: 'rounded-r-lg border-l border-l-primary/[0.1] rounded-l-none'
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      side: "default",
    },
  },
);
