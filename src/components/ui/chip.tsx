import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Cross1Icon, PlusIcon } from "@radix-ui/react-icons";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-2 space-x-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
  // {
  //   variants: {
  //     variant: {
  //       default:
  //         "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
  //       secondary:
  //         "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
  //       destructive:
  //         "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
  //       outline: "text-foreground",
  //     },
  //   },
  //   defaultVariants: {
  //     variant: "default",
  //   },
  // }
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  text: string;
  onRemove?: () => void;
}

function Chip({ className, onRemove, text, ...props }: ChipProps) {
  return (
    <div className={cn(badgeVariants(), className)} {...props}>
      <p>{text}</p>
      <div className="cursor-pointer" onClick={onRemove}>
        <Cross1Icon />
      </div>
    </div>
  );
}

export { Chip, badgeVariants };
