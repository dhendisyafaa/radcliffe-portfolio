import TitleSection from "../homepage/TitleSection";

const MySkills = ({ data }) => {
  return (
    <div className="w-full min-h-fit">
      <TitleSection title={data.title} description={data.description} />
      <div className="grid md:grid-cols-2 gap-6">
        {data.categories.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-primary font-bold text-sm uppercase tracking-widest">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
