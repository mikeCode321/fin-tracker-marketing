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
      <div className="hero-chart-section">
        <div className="container">
          <div className="hero-chart-layout">
            <div className="hero-wrapper">
              <Hero />
            </div>
            <div className="chart-wrapper">
              <ProjectionChart />
            </div>
          </div>
        </div>
      </div>
      <Stats />
      <Features />
      <Philosophy />
      <FinalCTA />
    </>
  );
};