// One completed program: institution, program, completion date, and GPA as value out of scale.
const EducationCard = ({ institution, program, completed, gpa }) => {
  return (
    <li className="rounded-lg border border-black/10 bg-surface p-6 flex flex-col gap-1">
      <p className="text-sm text-accent-dark font-semibold">Graduated {completed}</p>
      <h3 className="text-[20px] leading-[1.2] font-semibold">{program}</h3>
      <p className="text-black/80">{institution}</p>
      {gpa && (
        <p className="text-sm text-black/60">
          GPA {gpa.value}/{gpa.scale}
        </p>
      )}
    </li>
  );
};

export default EducationCard;
