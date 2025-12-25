const SkillCard = ({ img, header }: { img: string; header: string }) => {
  return (
    <div className="skill-card-hover group relative rounded-2xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur p-6 transition-all duration-300 ease-out cursor-pointer hover:scale-110 hover:-translate-y-2 w-full max-w-[180px]">
      <div className="flex items-center justify-center mb-4 min-h-16">
        <img
          src={img}
          alt={header}
          className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110 filter group-hover:brightness-110"
        />
      </div>
      <p className="text-center font-medium text-sm text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
        {header}
      </p>
    </div>
  );
};

export default SkillCard;
