'use client';

import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { GetStarted } from './components/GetStarted';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <HowItWorks />
      <GetStarted />
      <Footer />
    </main>
  );
}
