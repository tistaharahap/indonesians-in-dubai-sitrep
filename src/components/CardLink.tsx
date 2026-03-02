import React from 'react';
import Link from '@docusaurus/Link';
import {
  CircleAlert,
  Phone,
  Route,
  ShoppingBag,
  ShieldHalf,
  Shield,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'circle-exclamation': CircleAlert,
  phone: Phone,
  route: Route,
  'bag-shopping': ShoppingBag,
  'shield-halved': ShieldHalf,
  shield: Shield,
  mobile: Smartphone,
};

interface CardLinkProps {
  title: string;
  icon?: string;
  href: string;
  horizontal?: boolean;
  children?: React.ReactNode;
}

export default function CardLink({
  title,
  icon,
  href,
  horizontal = false,
  children,
}: CardLinkProps): React.ReactElement {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <Link
      to={href}
      className={`card-link ${horizontal ? 'card-link--horizontal' : 'card-link--vertical'}`}
    >
      {IconComponent && (
        <span className="card-link__icon">
          <IconComponent size={20} />
        </span>
      )}
      <div className="card-link__content">
        <div className="card-link__title">{title}</div>
        {children && <p className="card-link__description">{children}</p>}
      </div>
    </Link>
  );
}
