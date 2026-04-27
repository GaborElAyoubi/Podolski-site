import { useEffect, useRef, useState } from 'react';

export function useTimedPulse(durationMs: number) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const triggerPulse = (key: string) => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    setActiveKey(key);
    timeoutRef.current = window.setTimeout(() => {
      setActiveKey((currentKey) => (currentKey === key ? null : currentKey));
      timeoutRef.current = null;
    }, durationMs);
  };

  return {
    activeKey,
    triggerPulse,
  };
}
