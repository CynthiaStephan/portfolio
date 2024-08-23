// import React, { useEffect, useRef } from 'react';
// import {
//     Renderer,
//     Vec2,
//     Vec4,
//     Geometry,
//     Texture,
//     Program,
//     Mesh,
//     Flowmap,
// } from "ogl";

// // Fonction pour charger les shaders
// async function loadShader(url) {
//     const response = await fetch(url);
//     return response.text();
// }

// const FlowmapCanvas = () => {
//     const canvasRef = useRef(null);
//     const imgElementRef = useRef(null);

//     useEffect(() => {
//         let _size = [2000, 2500];
//         const vertexShaderPromise = loadShader("./shaders/vertexShader.glsl");
//         const fragmentShaderPromise = loadShader("./shaders/fragmentShader.glsl");

//         // Initialisation des shaders et de la scène
//         async function initFlowmap() {
//             const [vertexShader, fragmentShader] = await Promise.all([vertexShaderPromise, fragmentShaderPromise]);

//             const imgElement = imgElementRef.current;
//             const canvas = canvasRef.current;
//             const renderer = new Renderer({ dpr: 2 });
//             const gl = renderer.gl;

//             imgElement.appendChild(canvas);

//             let aspect = 1;
//             const mouse = new Vec2(-1);
//             const velocity = new Vec2();
//             let lastTime;
//             const lastMouse = new Vec2();

//             function resize() {
//                 const rect = imgElement.getBoundingClientRect();
//                 gl.canvas.width = rect.width * 2.0;
//                 gl.canvas.height = rect.height * 2.0;
//                 gl.canvas.style.width = `${rect.width}px`;
//                 gl.canvas.style.height = `${rect.height}px`;

//                 const imageAspect = _size[0] / _size[1];
//                 const canvasAspect = rect.width / rect.height;

//                 let a1, a2;
//                 if (canvasAspect > imageAspect) {
//                     a1 = imageAspect / canvasAspect;
//                     a2 = 1.0;
//                 } else {
//                     a1 = 1.0;
//                     a2 = canvasAspect / imageAspect;
//                 }

//                 mesh.program.uniforms.res.value = new Vec4(rect.width, rect.height, a1, a2);

//                 renderer.setSize(rect.width, rect.height);
//                 aspect = rect.width / rect.height;
//             }

//             const flowmap = new Flowmap(gl, {
//                 falloff: 0.3,
//                 dissipation: 0.92,
//                 alpha: 0.5,
//             });

//             const geometry = new Geometry(gl, {
//                 position: {
//                     size: 2,
//                     data: new Float32Array([-1, -1, 3, -1, -1, 3]),
//                 },
//                 uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
//             });

//             const texture = new Texture(gl, {
//                 minFilter: gl.LINEAR,
//                 magFilter: gl.LINEAR,
//             });
//             texture.image = imgElement.querySelector("img");

//             const program = new Program(gl, {
//                 vertex: vertexShader,
//                 fragment: fragmentShader,
//                 uniforms: {
//                     uTime: { value: 0 },
//                     tWater: { value: texture },
//                     res: {
//                         value: new Vec4(window.innerWidth, window.innerHeight, 1, 1),
//                     },
//                     tFlow: flowmap.uniform,
//                 },
//             });

//             const mesh = new Mesh(gl, { geometry, program });
//             window.addEventListener("resize", resize);
//             resize();

//             const isTouchCapable = "ontouchstart" in window;
//             const updateMouse = (e) => {
//                 e.preventDefault();

//                 const rect = imgElement.getBoundingClientRect();
//                 let x, y;

//                 if (e.changedTouches && e.changedTouches.length) {
//                     x = e.changedTouches[0].pageX - rect.left;
//                     y = e.changedTouches[0].pageY - rect.top;
//                 } else {
//                     x = e.clientX - rect.left;
//                     y = e.clientY - rect.top;
//                 }

//                 mouse.set(x / rect.width, 1.0 - y / rect.height);

//                 if (!lastTime) {
//                     lastTime = performance.now();
//                     lastMouse.set(x, y);
//                 }

//                 const deltaX = x - lastMouse.x;
//                 const deltaY = y - lastMouse.y;

//                 lastMouse.set(x, y);

//                 const time = performance.now();
//                 const delta = Math.max(10.4, time - lastTime);
//                 lastTime = time;
//                 velocity.x = deltaX / delta;
//                 velocity.y = deltaY / delta;
//                 velocity.needsUpdate = true;
//             };

//             if (isTouchCapable) {
//                 imgElement.addEventListener("touchstart", updateMouse);
//                 imgElement.addEventListener("touchmove", updateMouse, { passive: false });
//             } else {
//                 imgElement.addEventListener("mousemove", updateMouse);
//             }

//             function update(t) {
//                 requestAnimationFrame(update);

//                 if (!velocity.needsUpdate) {
//                     mouse.set(-1);
//                     velocity.set(0);
//                 }
//                 velocity.needsUpdate = false;

//                 flowmap.mouse.copy(mouse);
//                 flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1);
//                 flowmap.update();

//                 program.uniform.uTime.value = t * 0.01;
//                 renderer.render({ scene: mesh });
//             }

//             requestAnimationFrame(update);
//         }

//         initFlowmap();

//         return () => {
//             window.removeEventListener("resize", resize);
//             if (imgElementRef.current) {
//                 imgElementRef.current.removeEventListener("touchstart", updateMouse);
//                 imgElementRef.current.removeEventListener("touchmove", updateMouse);
//                 imgElementRef.current.removeEventListener("mousemove", updateMouse);
//             }
//         };
//     }, []);

//     return (
//         <div ref={imgElementRef} className="img">
//             <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}></canvas>
//         </div>
//     );
// };

// export default FlowmapCanvas;