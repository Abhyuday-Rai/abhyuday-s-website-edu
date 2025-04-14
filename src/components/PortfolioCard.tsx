import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  subtitle: string;
  path: string;
  outlineText?: boolean;
  onSelect?: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, subtitle, path, outlineText, onSelect }) => {
  const navigate = useNavigate();

  return (
    <div
      className="portfolio-card group h-full min-h-[112px] sm:min-h-[120px] cursor-pointer"
      onClick={() => {
        onSelect?.();
        navigate(path);
      }}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl leading-none font-bold mb-2 ${outlineText ? 'outline-text' : ''}`}>
            {title}
          </h2>
          {subtitle && <p className="text-gray-400 text-sm sm:text-base md:text-lg">{subtitle}</p>}
        </div>
        <div className="flex justify-end">
          <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7 card-arrow text-white/60 transition-colors duration-300 group-hover:text-purple-500" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
