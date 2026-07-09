import logo from '@/assets/logo.svg';

const icons = {
  mainLogo: logo,
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
