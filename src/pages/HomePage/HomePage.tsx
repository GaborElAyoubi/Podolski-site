import { About } from '@/sections/About/About';
import { Concept } from '@/sections/Concept/Concept';
import { Hero } from '@/sections/Hero/Hero';
import { Signup } from '@/sections/Signup/Signup';

interface HomePageProps {
  scrollProgress: number;
}

export function HomePage({ scrollProgress }: HomePageProps) {
  return (
    <>
      <Hero progress={scrollProgress} />
      <Concept />
      <Signup />
      <About />
    </>
  );
}
