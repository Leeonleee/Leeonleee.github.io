type PageFooterProps = {
    className?: string;
    textClassName?: string;
};

const PageFooter = ({ className = "", textClassName = "" }: PageFooterProps) => {
    return (
        <footer className={`py-8 px-8 md:px-16 lg:px-24 border-t-2 ${className}`}>
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <span className={`text-brutal-xs opacity-60 ${textClassName}`}>© 2026</span>
                <span className={`text-brutal-xs opacity-60 ${textClassName}`}>Leon Lee</span>
            </div>
        </footer>
    );
};

export default PageFooter;
