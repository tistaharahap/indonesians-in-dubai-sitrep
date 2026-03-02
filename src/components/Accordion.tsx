import React from 'react';
import {
  ListChecks,
  ClipboardList,
  Building,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'list-check': ListChecks,
  'clipboard-list': ClipboardList,
  'building-flag': Building,
};

interface AccordionProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
}

export function Accordion({
  title,
  icon,
  children,
}: AccordionProps): React.ReactElement {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <details className="accordion">
      <summary>
        {IconComponent && (
          <span className="accordion__icon">
            <IconComponent size={18} />
          </span>
        )}
        {title}
      </summary>
      <div className="accordion__content">{children}</div>
    </details>
  );
}

interface AccordionGroupProps {
  children: React.ReactNode;
}

export function AccordionGroup({
  children,
}: AccordionGroupProps): React.ReactElement {
  return <div className="accordion-group">{children}</div>;
}
