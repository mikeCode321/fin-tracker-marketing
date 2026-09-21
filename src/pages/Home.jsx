import React from 'react';
import { Hero } from '../components/Hero';
import { ProjectionChart } from '../components/ProjectionChart';
import { Stats } from '../components/Stats';
import { Features } from '../components/Features';
import { Philosophy } from '../components/Philosophy';
import { FinalCTA } from '../components/FinalCTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <ProjectionChart />
      <Stats />
      <Features />
      <Philosophy />
      <FinalCTA />
    </>
  );
};