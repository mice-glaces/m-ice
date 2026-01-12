import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Note: I haven't installed class-variance-authority or radix-ui/react-slot yet.
// I should use standard props or install them. 
// For now, I'll stick to simple props to avoid extra deps if not needed, 
// OR I should install them to be proper modern shadcn-like.
// Given the "start from scratch" nature, I'll do a simple flexible Button first.
// But wait, Shadcn is the standard for modern Next.js apps.
// The user didn't ask for Shadcn specifically but "High quality".
// I will install `class-variance-authority` and `@radix-ui/react-slot` to make it robust.

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary-dark hover:shadow-glow shadow-md shadow-black/40",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-primary/10 hover:text-primary",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-8 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-14 rounded-full px-10 text-base font-semibold tracking-wide",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
