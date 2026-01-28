import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  variant?: "light" | "dark";
}

const BackButton = ({ variant = "dark" }: BackButtonProps) => {
  const colorClass = variant === "light" 
    ? "text-background border-background hover:bg-background hover:text-foreground" 
    : "text-foreground border-foreground hover:bg-foreground hover:text-background";

  return (
    <Link
      to="/"
      className={`fixed top-6 left-6 md:top-8 md:left-8 z-50 flex items-center gap-2 px-4 py-2 border-2 ${colorClass} text-brutal-xs transition-colors duration-200`}
    >
      <ArrowLeft className="w-4 h-4" />
      <span>Back</span>
    </Link>
  );
};

export default BackButton;
