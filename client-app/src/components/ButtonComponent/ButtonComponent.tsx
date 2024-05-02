import React from 'react';
import CustomButtonStyledComponent from './StyledCustomButton'

interface Props {
  id: string;
  children?: any;
  href?: string;
  ariaLabel?: string;
  type?: "button" | "reset" | "submit";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "inherit" | "success" | "error" | "info" | "warning";
  variant?: 'contained' | 'outlined' | 'text';
  sx?: object;
  className?: string;
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function ButtonComponent({ id, children, className, href, ariaLabel, type, size, color, variant, sx, onClick, disabled }: Props) {
  return (
    <CustomButtonStyledComponent
      id={id}
      className={className}
      href={href || ''}
      type={type || "button"}
      aria-label={ariaLabel || 'Button'}
      size={size}
      color={color}
      variant={variant}
      sx={sx}
      onClick={ onClick }
      disabled={disabled}>
      {children}
    </CustomButtonStyledComponent>
  );
}
