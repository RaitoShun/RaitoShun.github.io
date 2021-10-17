import * as THREE from "./three.module.js";
import { TWEEN } from "./tween.module.min.js";
import { TrackballControls } from "./TrackballControls.js";
import { CSS3DRenderer, CSS3DObject } from "./CSS3DRenderer.js";

const table = [
  "/icons/js.png",
  "Javascript",
  "4 Years",
  1,
  1,

  "/icons/ts.png",
  "Typescript",
  "2 Years",
  1,
  2,

  "/icons/node.png",
  "Node.js",
  "3.5 Years",
  13,
  2,

  "./icons/graphql.png",
  "GraphQL",
  "2 Years",
  15,
  2,

  "./icons/tailwinds.png",
  "Tailwinds CSS",
  "2 Years",
  17,
  2,

  "./icons/chakra.png",
  "Chakra UI",
  "2 Years",
  1,
  3,

  "./icons/material.png",
  "Material UI",
  "1 Year",
  13,
  3,

  "./icons/css.png",
  "CSS3",
  "4 years",
  15,
  3,

  "./icons/html.png",
  "HTML 5",
  "4 years",
  17,
  3,

  "./icons/postgres.png",
  "Postges",
  "3 Years",
  1,
  4,

  "/icons/php.png",
  "PHP",
  "1 Year",
  3,
  4,

  "/icons/python.png",
  "Python",
  "1 Year",
  5,
  4,

  "/icons/typeorm.png",
  "TypeORM",
  "2 Years",
  7,
  4,

  "./icons/react.png",
  "React.js",
  "3.5 Years",
  9,
  4,

  "./icons/svelte.png",
  "Svelte",
  "1 Year",
  11,
  4,

  "./icons/git.png",
  "Git",
  "4 Years",
  13,
  4,

  "./icons/cmd.png",
  "Command Line",
  "3.5 Years",
  15,
  4,

  "./icons/react.png",
  "React Native",
  "2.5 Years",
  17,
  4,

  "./icons/electron.png",
  "Electron",
  "2 Years",
  1,
  5,

  "./icons/jquery.png",
  "JQuery",
  "2 Years",
  3,
  5,

  "./icons/figma.png",
  "Figma",
  "1.5 Years",
  5,
  5,

  "./icons/sass.png",
  "SASS",
  "2 Years",
  7,
  5,

  "./icons/next.png",
  "Next.js",
  "2.5 Years",
  9,
  5,

  "./icons/bootstrap.png",
  "Bootstrap",
  "3 Years",
  11,
  5,

  "./icons/mysql.png",
  "MySQL",
  "2 Years",
  13,
  5,
];
let camera, scene, renderer;
let controls;
const objects = [];
const targets = { table: [], sphere: [], helix: [], grid: [] };
init();
animate();
function init() {
  camera = new THREE.PerspectiveCamera(
    40,
    (window.innerWidth * 0.9) / window.innerHeight,
    1,
    10000
  );
  camera.position.z = 3000;
  scene = new THREE.Scene();
  for (let i = 0; i < table.length; i += 5) {
    const element = document.createElement("div");
    element.className = "element";
    element.style.backgroundColor = "#fff";
    const symbol = document.createElement("img");
    symbol.className = "symbol";
    symbol.src = table[i];
    element.appendChild(symbol);

    const details = document.createElement("div");
    details.className = "details";
    details.innerHTML = table[i + 1] + "<br>" + table[i + 2];
    element.appendChild(details);

    const objectCSS = new CSS3DObject(element);
    objectCSS.position.x = Math.random() * 4000 - 2000;
    objectCSS.position.y = Math.random() * 4000 - 2000;
    objectCSS.position.z = Math.random() * 4000 - 2000;
    scene.add(objectCSS);
    objects.push(objectCSS);
    const object = new THREE.Object3D();
    object.position.x = table[i + 3] * 140 - 1330;
    object.position.y = -(table[i + 4] * 180) + 990;

    targets.table.push(object);
  }
  const vector = new THREE.Vector3();
  for (let i = 0, l = objects.length; i < l; i++) {
    const theta = i * 0.25 + Math.PI;
    const y = 450;

    const object = new THREE.Object3D();
    object.position.setFromCylindricalCoords(1200, theta, y);
    vector.x = object.position.x * 2;
    vector.y = object.position.y;
    vector.z = object.position.z * 2;
    object.lookAt(vector);
    targets.helix.push(object);
  }
  renderer = new CSS3DRenderer();
  renderer.setSize(window.innerWidth * 0.9, window.innerHeight);
  document.getElementById("container-helix").appendChild(renderer.domElement);
  controls = new TrackballControls(camera, renderer.domElement);
  controls.minDistance = 500;
  controls.maxDistance = 6000;
  controls.addEventListener("change", render);
  transform(targets.helix, 2000);
  window.addEventListener("resize", onWindowResize);
}

function transform(targets, duration) {
  TWEEN.removeAll();
  for (let i = 0; i < objects.length; i++) {
    const object = objects[i];
    const target = targets[i];
    new TWEEN.Tween(object.position)
      .to(
        {
          x: target.position.x,
          y: target.position.y,
          z: target.position.z,
        },
        Math.random() * duration + duration
      )
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();

    new TWEEN.Tween(object.rotation)
      .to(
        {
          x: target.rotation.x,
          y: target.rotation.y,
          z: target.rotation.z,
        },
        Math.random() * duration + duration
      )
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
  }
  new TWEEN.Tween(this)
    .to({}, duration * 2)
    .onUpdate(render)
    .start();
}

function onWindowResize() {
  camera.aspect = (window.innerWidth * 0.9) / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth * 0.9, window.innerHeight);
  render();
}

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
  controls.update();
}

function render() {
  renderer.render(scene, camera);
}
