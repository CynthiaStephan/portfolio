import { Renderer, Vec2, Vec4, Geometry, Texture, Program, Mesh, Flowmap } from './node_modules/ogl/src/index.js';

// Fonction pour charger un shader depuis un fichier
async function loadShader(url) {
    const response = await fetch(url);
    return response.text();
}

// Fonction principale pour appliquer l'effet Flowmap
async function applyFlowmapEffect() {
    // Chargement des shaders vertex et fragment
    const vertexShader = await loadShader("./shaders/vertexShader.glsl");
    const fragmentShader = await loadShader("./shaders/fragmentShader.glsl");

    const imgSize = [2000, 2500]; // Taille de l'image (largeur, hauteur)

    // Parcourt chaque conteneur d'image avec la classe .flowmap-img
    document.querySelectorAll('.flowmap-img').forEach((imgElement) => {
        const renderer = new Renderer({ dpr: 2 }); // Création d'un renderer OGL
        const gl = renderer.gl; // Récupération du contexte WebGL
        imgElement.appendChild(gl.canvas); // Ajout du canvas au conteneur d'image

        let aspect = 1; // Ratio d'aspect initial
        const mouse = new Vec2(-1); // Position initiale de la souris
        const velocity = new Vec2(); // Vitesse initiale de la souris

        // Fonction pour redimensionner le canvas en fonction du conteneur
        function resize() {
            const rect = imgElement.getBoundingClientRect();
            gl.canvas.width = rect.width * 2.0; 
            gl.canvas.height = rect.height * 2.0;
            gl.canvas.style.width = `${rect.width}px`;
            gl.canvas.style.height = `${rect.height}px`;

            const imageAspect = imgSize[0] / imgSize[1];
            const canvasAspect = rect.width / rect.height;
            let a1, a2;

            if (canvasAspect > imageAspect) {
                a1 = imageAspect / canvasAspect;
                a2 = 1.0;
            } else {
                a1 = 1.0;
                a2 = canvasAspect / imageAspect;
            }

            // Mettre à jour les uniformes du shader avec les nouvelles dimensions
            mesh.program.uniforms.res.value = new Vec4(rect.width, rect.height, a1, a2);
            renderer.setSize(rect.width, rect.height);
            aspect = rect.width / rect.height;
        }

        // Création d'un flowmap avec des paramètres de dissipation et de chute
        const flowmap = new Flowmap(gl, { 
            falloff: 0.215, 
            dissipation: 0.92,
            alpha: 0.5,
        });

        // Création de la géométrie d'un triangle pour le mesh
        const geometry = new Geometry(gl, {
            position: {
                size: 2,
                data: new Float32Array([-1, -1, 3, -1, -1, 3]),
            },
            uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
        });

        // Création d'une nouvelle texture
        const texture = new Texture(gl, {
            minFilter: gl.LINEAR,
            magFilter: gl.LINEAR,
        });
        texture.image = imgElement.querySelector("img");

        // Création d'un programme de shaders avec les shaders chargés
        const program = new Program(gl, {
            vertex: vertexShader,
            fragment: fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                tWater: { value: texture },
                res: { value: new Vec4(window.innerWidth, window.innerHeight, 1, 1) },
                tFlow: flowmap.uniform,
            },
        });

        const mesh = new Mesh(gl, { geometry, program });

        // Redimensionne lorsque la fenêtre est redimensionnée
        window.addEventListener("resize", resize, false);
        resize();

        // Gestion des événements de souris ou tactiles
        const isTouchCapable = "ontouchstart" in window;
        if (isTouchCapable) {
            imgElement.addEventListener("touchstart", updateMouse, false);
            imgElement.addEventListener("touchmove", updateMouse, { passive: false });
        } else {
            imgElement.addEventListener("mousemove", updateMouse, false);
        }

        let lastTime;
        const lastMouse = new Vec2();

        function updateMouse(e) {
            e.preventDefault();
            const rect = imgElement.getBoundingClientRect();
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

            let time = performance.now();
            let delta = Math.max(10.4, time - lastTime);
            lastTime = time;
            velocity.x = deltaX / delta;
            velocity.y = deltaY / delta;
            velocity.needsUpdate = true;
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

            program.uniforms.uTime.value = t * 0.01;
            renderer.render({ scene: mesh });
        }

        requestAnimationFrame(update);
    });
}

// On exporte la fonction pour pouvoir l'utiliser dans React
export { applyFlowmapEffect };
