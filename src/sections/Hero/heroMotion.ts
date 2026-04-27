import type { CSSProperties } from 'react';
import { HERO_SHRINK_DISTANCE } from '@/hooks/useHeroScrollProgress';

export type HeroStyle = CSSProperties & {
  '--hero-scroll-buffer': string;
  '--hero-visible-height': string;
  '--hero-padding-block': string;
  '--hero-padding-inline': string;
  '--hero-center-scale': number;
  '--hero-center-y': string;
};

export function clampProgress(progress: number) {
  return Math.min(Math.max(progress, 0), 1);
}

export function getHeroStyle(progress: number): HeroStyle {
  const clampedProgress = clampProgress(progress);

  return {
    '--hero-scroll-buffer': `${HERO_SHRINK_DISTANCE}px`,
    '--hero-visible-height': `calc(${100 - clampedProgress * 100}vh + ${4.75 * clampedProgress}rem)`,
    '--hero-padding-block': `${4 - clampedProgress * 3.15}rem`,
    '--hero-padding-inline': `${4 - clampedProgress * 2.5}rem`,
    '--hero-center-scale': 1 - clampedProgress * 0.42,
    '--hero-center-y': `${-2 + clampedProgress * 2}vh`,
  };
}
