export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImage: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImage: string;
}