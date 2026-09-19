import SkillTile from "./SkillTile";

// One category of skills: a heading and an icon grid. Rendered on the server so the icon
// components never ship to the browser. No levels or ratings: name and category only.
const SkillGroup = ({ label, items }) => {
  return (
    <div>
      <h3 className="text-[20px] xl:text-[24px] leading-[1.2] font-semibold mb-4">{label}</h3>
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-3 xl:gap-4">
        {items.map(({ name, icon: Icon }) => (
          <li key={name}>
            <SkillTile name={name}>
              <Icon className="text-4xl xl:text-5xl group-hover:text-accent-dark transition-all duration-300" aria-hidden="true" />
            </SkillTile>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillGroup;
