// One achievement: title, awarding organization, date, and an optional one-line detail.
const AchievementCard = ({ title, organization, date, detail }) => {
  return (
    <li className="rounded-lg border border-black/10 bg-surface p-6 flex flex-col gap-1">
      <p className="text-sm text-accent-dark font-semibold">{date}</p>
      <h3 className="text-[20px] leading-[1.2] font-semibold">{title}</h3>
      <p className="text-black/80">{organization}</p>
      {detail && <p className="text-sm text-black/60">{detail}</p>}
    </li>
  );
};

export default AchievementCard;
