export interface CircleLayerProps {
  bgColor: string;
  children?: React.ReactNode;
  padding: string;
  ariaLabel?: string;
}

export interface CircularDesignProps {
  initialRotation?: number;
  maxWidth?: number;
}