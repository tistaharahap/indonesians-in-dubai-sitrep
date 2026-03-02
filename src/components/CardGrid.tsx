import React from 'react';

interface CardGridProps {
  cols?: number;
  children: React.ReactNode;
}

export default function CardGrid({
  cols = 3,
  children,
}: CardGridProps): React.ReactElement {
  return (
    <div className={`card-grid card-grid--cols-${cols}`}>
      {children}
    </div>
  );
}
