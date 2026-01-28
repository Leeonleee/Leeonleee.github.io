type PageHeaderProps = {
    label: string;
    title: string;
    subtitle: string;
    className?: string;
    labelClassName?: string;
    titleClassName?: string;
    subtitleClassName?: string;
};

const PageHeader = ({
    label,
    title,
    subtitle,
    className = "",
    labelClassName = "",
    titleClassName = "",
    subtitleClassName = "",
}: PageHeaderProps) => {
    return (
        <header className={`pt-24 pb-16 px-8 md:px-16 lg:px-24 border-b-2 ${className}`}>
            <div className="max-w-6xl mx-auto">
                <span className={`text-brutal-xs opacity-60 block mb-4 ${labelClassName}`}>
                    {label}
                </span>
                <h1 className={`text-brutal-lg mb-6 ${titleClassName}`}>{title}</h1>
                <p className={`text-lg md:text-xl opacity-80 max-w-2xl font-mono ${subtitleClassName}`}>
                    {subtitle}
                </p>
            </div>
        </header>
    );
};

export default PageHeader;
