import React, { useEffect } from 'react';

const GradientCanvas = () => {
  useEffect(() => {
    import('../../Gradient.js')
      .then((module) => {
        // Vérifiez si `Gradient` est un export nommé ou par défaut
        const Gradient = module.Gradient || module.default;
        const gradient = new Gradient();
        gradient.initGradient('#gradient-canvas');
      })
      .catch((err) => console.error("Erreur lors de l'import du module Gradient :", err));
  }, []);

  return <canvas id="gradient-canvas" data-transition-in />;
};

export default GradientCanvas;
