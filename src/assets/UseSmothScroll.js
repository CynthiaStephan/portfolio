// useSmoothScroll.js
import Lenis from 'lenis';
import { useEffect } from 'react';


const useSmoothScroll = () => {
useEffect(() => {
    const lenis = new Lenis({
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smooth: true,
        smoothTouch: true,
        touchMultiplier: 2,
    });

    // Fonction pour mettre à jour Lenis à chaque frame
    function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
    }

    // Demande à l'animation de démarrer
    requestAnimationFrame(raf);

    // Nettoie à la destruction du composant
    return () => lenis.destroy();
}, []);
};

export default useSmoothScroll;
