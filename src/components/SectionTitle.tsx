interface SectionTitleProps {
  number: string;
  title: string;
  className?: string;
}

const SectionTitle = ({ number, title, className = "" }: SectionTitleProps) => {
  return (
    <div className={`flex items-baseline gap-4 mb-8 ${className}`}>
      <span className="text-brutal-xs opacity-50">{number}</span>
      <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">{title}</h2>
    </div>
  );
};

export default SectionTitle;
