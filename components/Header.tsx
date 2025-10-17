import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
        UncensorAI
      </h1>
      <p className="mt-3 max-w-2xl mx-auto text-lg text-slate-400">
        Transform any description into a stunning, high-fidelity image with maximum artistic freedom.
      </p>
    </header>
  );
};

export default Header;