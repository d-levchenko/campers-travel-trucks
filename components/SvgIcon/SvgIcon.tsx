import logo from '@/assets/logo.svg';
import rating from '@/assets/rating.svg';
import location from '@/assets/location.svg';
import engine from '@/assets/engine.svg';
import transmission from '@/assets/transmission.svg';
import form from '@/assets/form.svg';
import searchLocation from '@/assets/searchLocation.svg';
import closeIcon from '@/assets/close.svg';
import dot from '@/assets/dot.svg';
import circle from '@/assets/circle.svg';

const icons = {
  mainLogo: logo,
  rating: rating,
  location: location,
  transmission: transmission,
  engine: engine,
  form: form,
  searchLocation: searchLocation,
  close: closeIcon,
  dot: dot,
  circle: circle,
};

export type IconName = keyof typeof icons;

interface SvgIconProps {
  name: IconName;
  width?: number;
  height?: number;
  className?: string;
  'aria-label'?: string;
}

const SvgIcon = ({
  name,
  width = 24,
  height = 24,
  className,
  'aria-label': ariaLabel,
}: SvgIconProps) => {
  const Icon = icons[name];

  return (
    <Icon
      width={width}
      height={height}
      className={className}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    />
  );
};

export default SvgIcon;
