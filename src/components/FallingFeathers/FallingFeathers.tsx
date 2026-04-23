import { useEffect, useRef, useState, type CSSProperties } from 'react';
import featherImage from '../../public/images/feder.png';
import './FallingFeathers.css';

type FeatherStyle = CSSProperties & {
  '--feather-left-x': string;
  '--feather-left-y': string;
  '--feather-left-rotate': string;
  '--feather-left-scale': number;
  '--feather-right-x': string;
  '--feather-right-y': string;
  '--feather-right-rotate': string;
  '--feather-right-scale': number;
  '--feather-opacity': number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getFeatherStyle(progress: number): FeatherStyle {
  const clampedProgress = clamp(progress, 0, 1);

  return {
    '--feather-left-x': `${4 + clampedProgress * 9}vw`,
    '--feather-left-y': `${-8 + clampedProgress * 88}vh`,
    '--feather-left-rotate': `${-22 + clampedProgress * 106}deg`,
    '--feather-left-scale': 1 - clampedProgress * 0.18,
    '--feather-right-x': `${82 - clampedProgress * 11}vw`,
    '--feather-right-y': `${4 + clampedProgress * 84}vh`,
    '--feather-right-rotate': `${232 - clampedProgress * 112}deg`,
    '--feather-right-scale': 1 - clampedProgress * 0.16,
    '--feather-opacity': 0.9 - clampedProgress * 0.18,
  };
}

export function FallingFeathers() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const frameId = useRef<number | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScrollTop > 0 ? window.scrollY / maxScrollTop : 0;

      if (frameId.current !== null) {
        window.cancelAnimationFrame(frameId.current);
      }

      frameId.current = window.requestAnimationFrame(() => {
        setScrollProgress(clamp(nextProgress, 0, 1));
        frameId.current = null;
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);

      if (frameId.current !== null) {
        window.cancelAnimationFrame(frameId.current);
      }
    };
  }, []);

  return (
    <div className="falling-feathers" style={getFeatherStyle(scrollProgress)} aria-hidden="true">
      <img className="falling-feather falling-feather-left" src={featherImage} alt="" />
      <img className="falling-feather falling-feather-right" src={featherImage} alt="" />
    </div>
  );
}
