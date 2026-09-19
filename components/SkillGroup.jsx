import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// One category of skills: a heading and an icon grid. Each tile shows its name in a tooltip
// and exposes it to assistive tech through aria-label. No levels or ratings.
const SkillGroup = ({ label, items }) => {
  return (
    <div>
      <h3 className="text-[20px] xl:text-[24px] leading-[1.2] font-semibold mb-4">{label}</h3>
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-3 xl:gap-4">
        {items.map(({ name, icon: Icon }) => (
          <li key={name}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger
                  aria-label={name}
                  className="w-full h-[96px] xl:h-[120px] bg-surface border border-black/10 rounded-xl flex justify-center items-center group outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-4 focus-visible:ring-offset-primary"
                >
                  <Icon className="text-4xl xl:text-5xl group-hover:text-accent-dark transition-all duration-300" aria-hidden="true" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillGroup;
