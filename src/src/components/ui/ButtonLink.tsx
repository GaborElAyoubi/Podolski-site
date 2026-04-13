interface ButtonLinkProps {
  href: string;
  children: string;
  variant?: 'primary' | 'secondary';
}

export function ButtonLink({ href, children, variant = 'primary' }: ButtonLinkProps) {
  return (
    <a className={`button button-${variant}`} href={href}>
      {children}
    </a>
  );
}
