import { cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center gap-0.5 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none border-[0.5px] border-transparent ring-[2.5px] ring-transparent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-background border-primary focus: hover:bg-primary-foreground focus:border-[--border-hover] focus:ring-ring",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input shadow-xs bg-background",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-primary/[0.7] hover:bg-primary/[0.04] focus:bg-primary/[0.01] focus:border-[--border-hover] focus:ring-ring",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: "h-7 rounded px-2",
        sm: "h-8 rounded-lg px-2 py-1.5",
        smT: "h-8 rounded-lg px-3 py-1.5",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
