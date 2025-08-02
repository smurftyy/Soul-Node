import React from 'react';
import Hero from "../components/Hero";
import ValueProps from "../components/ValueProps";
import HowItWorks from "../components/HowItWorks";
import MockPortfolio from "../components/MockPortfolio";
import CallToAction from "../components/CallToAction";

export default function Landing() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <HowItWorks />
      <MockPortfolio />
      <CallToAction />
    </main>
  );
} 