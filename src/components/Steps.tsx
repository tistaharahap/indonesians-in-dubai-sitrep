import React from 'react';

interface StepsProps {
  children: React.ReactNode;
}

export function Steps({children}: StepsProps): React.ReactElement {
  return <div className="steps">{children}</div>;
}

interface StepProps {
  title: string;
  children: React.ReactNode;
}

export function Step({title, children}: StepProps): React.ReactElement {
  return (
    <div className="step">
      <div className="step__title">{title}</div>
      <div className="step__content">{children}</div>
    </div>
  );
}
