'use client';

import { ReactNode } from 'react';
import { useScrollFade } from './useScrollFade';
import styles from './Hero.module.css';

export function FadingHero({ children }: { children: ReactNode }) {
  const heroRef = useScrollFade(0.6);     // fade threshold

  return (
    <div ref={heroRef} className={styles.hero}>
      {children}
      {/* scroll hint */}
      <span className={styles.scrollHint}>↓  scroll for projects  ↓</span>
    </div>
  );
}
