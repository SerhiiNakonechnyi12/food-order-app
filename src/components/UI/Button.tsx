import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> &
  PropsWithChildren<{
    textOnly?: boolean;
    className?: string;
  }>;

export default function Button({
  children,
  textOnly,
  className,
  ...props
}: ButtonProps) {
  let cssClasses = textOnly ? 'text-button' : 'button';
  if (className) {
    cssClasses += ' ' + className;
  }

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
