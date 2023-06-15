// import * as THREE from 'https://cdn.skypack.dev/three/build/three.module.js';
// import { OrbitControls } from 'https://cdn.skypack.dev/three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader.js';

var camera, scene, renderer;
var mixers, controls, mixer;


// example: https://discoverthreejs.com/book/first-steps/animation-system/
//          https://discourse.threejs.org/t/trouble-changing-position-of-an-imported-model/16790/2
//          https://mugen87.github.io/yuka/examples/


var init = () => {
  scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x777777);

  // renderer
  var container = document.createElement( 'div' );
  document.body.appendChild(container);
  renderer = new THREE.WebGLRenderer({
    container,
    antialias: true,
    alpha: true,
  });
  renderer.setSize( window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // camera
  var aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(45, aspect, 1, 5000);
  // camera.rotation.y = (90 / 180) * Math.PI;
  camera.position.set(1000, 0, 4500);

  //場景控制
  controls = new THREE.OrbitControls( camera , renderer.domElement )
  // controls.addEventListener("change", renderer);
  // controls.target.set(0, -20, 0);
  controls.minPolarAngle = 1.65;
  controls.autoRotate = true;
  var windowWidth = window.innerWidth;
  // console.log(windowWidth);
  controls.autoRotateSpeed *= -3;

  // light
  ambientLight = new THREE.AmbientLight(0xFFFFFF, 2);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight( 0xffffff, 2);
  directionalLight.target.set = (10, 10, 10);
  scene.add(directionalLight.target)
  scene.add( directionalLight );

  spotLight = new THREE.SpotLight(0xaaaaaa, 5);
  scene.add(spotLight);

  pointLight = new THREE.PointLight(0xffffff, 1, 10);
  pointLight.position.set( 0, 0, 0 );
  scene.add(pointLight);

  // loader
  // /utils/bg-decoration-instance/threejs-plane/plane-2.gltf
  // https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf
  var plane = document.getElementById("airplaneFly");
  // console.log(plane);
  // console.log(gltf);
  var loader = new THREE.GLTFLoader();
  loader.load("plane-2.jpg", (gltf) => {
    var model = gltf.scene;
    model.scale.set(.8, .8, .8);
    // if (windowWidth<=1920){
      // model.position.set(1400, 880, 800);
    // }else {
      model.position.set(1500, 880, 600);
    // }
    scene.add(model);

    // result.mixer = new THREE.AnimationMixer(result);
    // mixers.push(result.mixer);
    var myAxis = new THREE.Vector3(0, 0, 1);
    model.rotateOnWorldAxis(myAxis, THREE.Math.degToRad(25));
    // model.rotation.y += 0.02;

    // renderer.render(scene, camera);
  } );
  var canvas = document.getElementsByTagName('canvas')[1];

  plane.appendChild(canvas);

  animate();

  // plane.rotation.y += 0.02;

  // plane.scale.set(0.5, 0.5, 0.5);
};

// 拖曳場景
var animate = () => {
  // if (model) {
  // }
  requestAnimationFrame(animate);
  controls.update();
  spotLight.position.set(
    camera.position.x + 5,
    camera.position.y - 5,
    camera.position.z + 5
  )
  // model.position.y -= 0.1;
  renderer.render(scene, camera);
}
init();

window.addEventListener('resize',function(){
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth,window.innerHeight);
});


