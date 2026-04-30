const SkillCard = ({ img, header }: { img: string; header: string }) => {
  return (
    <div className="skill-card-hover group inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur px-4 py-2.5 transition-all duration-300 ease-out cursor-default hover:scale-105 hover:-translate-y-0.5">
      <img
        src={img}
        alt={header}
        className="w-5 h-5 object-contain shrink-0 transition-transform duration-300 group-hover:scale-110 filter group-hover:brightness-110"
      />
      <p className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors whitespace-nowrap">
        {header}
      </p>
    </div>
  );
};

export default SkillCard;
