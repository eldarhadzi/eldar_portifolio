import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[48px] rounded-md border border-black/10 focus:border-accent-dark font-light bg-primary px-4 py-5 text-base placeholder:text-black/60 outline-none focus-visible:ring-2 focus-visible:ring-accent-dark",
        className
      )}
      ref={ref}
      {...props} />
  );
})
Input.displayName = "Input"

export { Input }
