import type { CSSProperties } from 'react';
import { HERO_SHRINK_DISTANCE } from '@/hooks/useHeroScrollProgress';

export type HeroStyle = CSSProperties & {
  '--hero-feather-x': string;
  '--hero-feather-y': string;
  '--hero-feather-rotate': string;
  '--hero-feather-opacity': number;
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
  const featherFallProgress = clampedProgress ** 1.18;
  const featherDriftProgress = clampedProgress ** 1.52;
  const featherFadeProgress = clampedProgress ** 1.35;

  return {
    '--hero-feather-x': `${featherDriftProgress * 24}vw`,
    '--hero-feather-y': `${featherFallProgress * 72}vh`,
    '--hero-feather-rotate': `${-8 + clampedProgress * 46}deg`,
    '--hero-feather-opacity': Math.max(0, 0.22 - featherFadeProgress * 0.22),
    '--hero-scroll-buffer': `${HERO_SHRINK_DISTANCE}px`,
    '--hero-visible-height': `calc(${100 - clampedProgress * 100}vh + ${4.75 * clampedProgress}rem)`,
    '--hero-padding-block': `${4 - clampedProgress * 3.15}rem`,
    '--hero-padding-inline': `${4 - clampedProgress * 2.5}rem`,
    '--hero-center-scale': 1 - clampedProgress * 0.42,
    '--hero-center-y': `${-2 + clampedProgress * 2}vh`,
  };
}
