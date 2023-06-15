// import * as THREE from 'https://cdn.skypack.dev/three/build/three.module.js';
// import { OrbitControls } from 'https://cdn.skypack.dev/three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader.js';
// import { DragControls } from 'utils/bg-decoration-instance/threejs-gift/DragControls.js'

var camera, scene, renderer;
var mixers, controls, mixer;
var model;

// example: https://discoverthreejs.com/book/first-steps/animation-system/
//          https://discourse.threejs.org/t/trouble-changing-position-of-an-imported-model/16790/2
//          https://mugen87.github.io/yuka/examples/


// let tween = new TWEEN.Tween({
//   x:10}).to({
//   x:3}, 1000);
// tween.easing(TWEEN.Easing.Elastic.InOut);
// tween.onUpdate(function () {
  
// // update the mesh
// });
// console.log("what");

var init = () => {
  scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x333333);

  // renderer
  var container = document.createElement('div');
  document.body.appendChild(container);
  renderer = new THREE.WebGLRenderer({
    container,
    antialias: true,
    alpha: true,
  });
  var windowWidth = window.innerWidth;
  // console.log(windowWidth);
  if(windowWidth >= 960){
    renderer.setSize( 277.2, 215.6);
  }else{
    renderer.setSize( window.innerWidth/3.5, window.innerWidth/3.5);
  }
  container.appendChild(renderer.domElement);

  // camera
  var aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(55, aspect, 1, 1000);
  // camera.rotation.y = (90 / 180) * Math.PI;
  camera.position.set(10, 10, 300);
  // camera.position.x += 2;


  //場景控制
  controls = new THREE.OrbitControls( camera , renderer.domElement );
  controls.enableZoom = false;
  // controls.addEventListener("change", renderer);
  // var answer = controls.getPolarAngle();
  // console.log(answer);
  // controls.minPolarAngle = answer;
  // controls.autoRotate = true;
  // controls.autoRotateSpeed *= -5;
  // controls.screenSpacePanning = true;

  // light
  ambientLight = new THREE.AmbientLight(0xFFFFFF, 2);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight( 0xffffff, 2);
  directionalLight.target.set = (10, 10, 10);
  scene.add(directionalLight.target)
  scene.add( directionalLight );

  spotLight = new THREE.SpotLight(0xaaaaaa, 5);
  scene.add(spotLight);
  
  pointLight = new THREE.PointLight(0xffffff, 1, 4);
  pointLight.position.set( 30, 30, 30 );
  scene.add(pointLight);

  
  // loader
  // https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf
  var obj3d = document.getElementById("dynamicSliderGift");
  // console.log(plane);
  var loader = new THREE.GLTFLoader();
  loader.load("gift.jpg", (gltf) => {
    model = gltf.scene;
    if(windowWidth >= 960){
      model.scale.set(2.5, 2.5, 2.5);
      model.position.set(-20, -100, 0);
    }else{
      model.scale.set(1, 2, 1);
      model.position.set(-20, -50, 0);
    }
    // model.position.x += 2;
    // model.position.z += 2;
    scene.add(model);
    
  });
  var canvas = document.getElementsByTagName('canvas')[0];
  obj3d.appendChild(canvas);

  
  animate();
  
  // plane.addEventListener('click', function ( event ) {

  //   camera.translateX( -100 );

  // }, false );
  // plane.rotation.y += 0.02;
  
  // plane.scale.set(0.5, 0.5, 0.5);
};

function selfRotate(){
  model.rotation.y += 0.005;
  model.position.x += 0.02;
}

// 拖曳場景
var animate = () => {
  if (model) {
    selfRotate();
  }
  requestAnimationFrame(animate);
  controls.update();
  var direction = new THREE.Vector3();
  camera.getWorldDirection( direction );
    spotLight.position.set(
    camera.position.x + 5, 
    camera.position.y + 5, 
    camera.position.z + 5 
  )
  // camera.position.add( direction );
  renderer.render(scene, camera);
  // loop();
}
init();

window.addEventListener('resize',function(){
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth,window.innerHeight);
});




