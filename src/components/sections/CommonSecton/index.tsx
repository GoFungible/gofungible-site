import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface CommonSectionProps {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
  gap?: 'none' | 'small' | 'medium' | 'large';
  align?: 'top' | 'center' | 'bottom';
}

export interface CommonSectionItemProps {
  children: React.ReactNode;
  className?: string;
}

const CommonSection: React.FC<CommonSectionProps> & {
  Item: React.FC<CommonSectionItemProps>;
} = ({ 
  children, 
  reverse = false, 
  className,
  gap = 'medium',
  align = 'center'
}) => {
  return (
    <section className={clsx(
      styles.splitSection,
      styles[`gap-${gap}`],
      styles[`align-${align}`],
      { [styles.reverse]: reverse },
      className
    )}>
      {children}
    </section>
  );
};

const CommonSectionItem: React.FC<CommonSectionItemProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={clsx(styles.splitSectionItem, className)}>
      {children}
    </div>
  );
};

CommonSection.Item = CommonSectionItem;

export default CommonSection;