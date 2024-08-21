import React, { useEffect, useRef } from 'react';
import { Renderer, Vec2, Vec4, Geometry, Texture, Program, Mesh, Flowmap } from 'ogl';

const FlowmapCanvas = ({ imgSrc, titleText, isTitle }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const resizeHandlerRef = useRef(null);
  const rendererRef = useRef(null);  // Référence pour le renderer
  const meshRef = useRef(null);      // Référence pour le mesh

  // Déclaration des variables en dehors des fonctions
  const _size = [2000, 2500];
  const mouse = new Vec2(-1);
  const velocity = new Vec2();
  let lastTime = null;
  const lastMouse = new Vec2();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    async function loadShader(url) {
      const response = await fetch(url);
      return response.text();
    }

    function resize() {
      if (!resizeHandlerRef.current) return;

      canvas.width = container.offsetWidth * 2.0;
      canvas.height = container.offsetHeight * 2.0;

      const rect = container.getBoundingClientRect();
      const imageAspect = _size[0] / _size[1];
      const canvasAspect = rect.width / rect.height;

      let a1, a2;
      if (canvasAspect > imageAspect) {
        a1 = imageAspect / canvasAspect;
        a2 = 1.0;
      } else {
        a1 = 1.0;
        a2 = canvasAspect / imageAspect;
      }

      if (meshRef.current) {
        meshRef.current.program.uniforms.res.value = new Vec4(rect.width, rect.height, a1, a2);
      }
      if (rendererRef.current) {
        rendererRef.current.setSize(rect.width, rect.height);
      }
    }

    function updateMouse(e) {
      e.preventDefault();

      const rect = container.getBoundingClientRect();
      let x, y;

      if (e.changedTouches && e.changedTouches.length) {
        x = e.changedTouches[0].pageX - rect.left;
        y = e.changedTouches[0].pageY - rect.top;
      } else {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }

      mouse.set(x / rect.width, 1.0 - y / rect.height);

      if (!lastTime) {
        lastTime = performance.now();
        lastMouse.set(x, y);
      }

      const deltaX = x - lastMouse.x;
      const deltaY = y - lastMouse.y;

      lastMouse.set(x, y);

      const time = performance.now();
      const delta = Math.max(10.4, time - lastTime);
      lastTime = time;
      velocity.x = deltaX / delta;
      velocity.y = deltaY / delta;
      velocity.needsUpdate = true;
    }

    const initFlowmap = async () => {
      const vertexShader = await loadShader('./shaders/vertexShader.glsl');
      const fragmentShader = await loadShader('./shaders/fragmentShader.glsl');

      const renderer = new Renderer({ dpr: 2 });
      const gl = renderer.gl;

      // Sauvegarder la référence du renderer
      rendererRef.current = renderer;

      // Initialisation du canvas
      canvas.width = container.offsetWidth * 2.0;
      canvas.height = container.offsetHeight * 2.0;

      // Création de la flowmap
      const flowmap = new Flowmap(gl, {
        falloff: 0.3,
        dissipation: 0.92,
        alpha: 0.5,
      });

      // Définition de la géométrie
      const geometry = new Geometry(gl, {
        position: {
          size: 2,
          data: new Float32Array([-1, -1, 3, -1, -1, 3]),
        },
        uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
      });

      // Création de la texture
      const texture = new Texture(gl, {
        minFilter: gl.LINEAR,
        magFilter: gl.LINEAR,
      });

      // Chargement de l'image dans la texture
      const image = new Image();
      image.src = imgSrc;
      image.onload = () => {
        texture.image = image;
      };

      // Création du programme avec les shaders et uniformes
      const program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          tWater: { value: texture },
          res: { value: new Vec4(window.innerWidth, window.innerHeight, 1, 1) },
          tFlow: { value: flowmap.uniform },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });

      // Sauvegarder la référence du mesh
      meshRef.current = mesh;

      resizeHandlerRef.current = resize;

      window.addEventListener('resize', resize, false);
      resize();

      // Gestion des événements de la souris
      const isTouchCapable = 'ontouchstart' in window;
      if (isTouchCapable) {
        container.addEventListener('touchstart', updateMouse, false);
        container.addEventListener('touchmove', updateMouse, { passive: false });
      } else {
        container.addEventListener('mousemove', updateMouse, false);
      }

      function update(t) {
        requestAnimationFrame(update);

        if (!velocity.needsUpdate) {
          mouse.set(-1);
          velocity.set(0);
        }
        velocity.needsUpdate = false;

        flowmap.mouse.copy(mouse);
        flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1);
        flowmap.update();

        // Correction du nom de l'uniforme
        program.uniforms.uTime.value = t * 0.01;
        renderer.render({ scene: mesh });
      }

      requestAnimationFrame(update);
    };

    initFlowmap();

    return () => {
      // Nettoyage des événements et du canvas
      container.innerHTML = ''; 
      window.removeEventListener('resize', resizeHandlerRef.current);
      if ('ontouchstart' in window) {
        container.removeEventListener('touchstart', updateMouse);
        container.removeEventListener('touchmove', updateMouse);
      } else {
        container.removeEventListener('mousemove', updateMouse);
      }
    };
  }, [imgSrc, titleText, isTitle]);

  return (
    <div ref={containerRef} style={{ position: 'relative', overflow: 'hidden', display: 'inline-block' }}>
      {isTitle ? (
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
      ) : (
        <>
          <img src={imgSrc} alt="" style={{ display: 'none' }} />
          <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
        </>
      )}
      {titleText && <h1>{titleText}</h1>}
    </div>
  );
};

export default FlowmapCanvas;
