"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// One skill tile: the icon (passed in as children, rendered on the server) with its name in a
// tooltip and in aria-label. Only the tooltip behavior is client code.
const SkillTile = ({ name, children }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger
          aria-label={name}
          className="w-full h-[96px] xl:h-[120px] bg-surface border border-black/10 rounded-xl flex justify-center items-center group outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-4 focus-visible:ring-offset-primary"
        >
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SkillTile;
