import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Slogan from './components/Slogan';
import Process from './components/Process';
import Team from './components/Team';
import Properties from './components/Properties';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-legend-light font-sans selection:bg-legend-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <Slogan />
        <Process />
        <Team />
        <Properties />
      </main>
      <Footer />
    </div>
  );
}

export default App;