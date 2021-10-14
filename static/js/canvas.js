import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.3/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118.3/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118.3/examples/jsm/controls/OrbitControls.js'


// Texture Loader
const loader = new THREE.TextureLoader();
const texture = loader.load('/static/images/bg.jpg')
const height = loader.load('/static/images/heightmap.jpg')
const alpha = loader.load('/static/images/alphamap.jpg')

// Canvas
const canvas = document.querySelector('#canvas')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.PlaneBufferGeometry(10, 10, 150, 150)

// Materials

const material = new THREE.MeshStandardMaterial({
    color: 'gray',
    map: texture,
    displacementMap: height,
    displacementScale: 1,
    alphaMap: alpha,
    transparent: true,
    wireframe: true
})

// const shaderMat = new THREE.ShaderMaterial({
//     exxtensions: {
//         derivatives: "#extension GL_OES_standar_derivatives: enable"
//     },
//     side: THREE.DoubleSide,
//     uniforms: {
//         time: { type:"f", value: 0},
//         resolution: {type:"v4", value: new THREE.Vector4()},
//         uvRate1: {
//             value: new THREE.Vector2(1,1)
//         }
//     },
//     vertexShader: vertex,
//     fragmentShader: fragment
// })

// Mesh
const plane = new THREE.Mesh(geometry, material)
plane.clipIntersection = true
scene.add(plane)
plane.rotation.x = 181;

// Axis Helper

// const axesHelper = new THREE.AxesHelper( 1 );
// scene.add( axesHelper );



// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// Lights

const pointLight = new THREE.PointLight(0xffffff, 3)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const renderer = new THREE.WebGLRenderer({
     antialiasing: true, alpha: true 
    })

document.querySelector('#canvas').appendChild(renderer.domElement);

renderer.setSize(sizes.width, sizes.height)


window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3))
})

// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)

camera.position.set(0,0,3)
scene.add(camera)

function lerp(x, y, a) {
    return (1 - a) * x + a * y
}

function scalePercent(start, end) {
    return (scrollPercent - start) / (end - start)
}

// Animations
const animationScripts = []







document.addEventListener('mousemove', getMousePos);

let mouseY = 0
let mouseX = 0

function getMousePos(event) {
    mouseY = event.clientY;
    mouseX = event.clientX;
}

function playScrollAnimations() {
    animationScripts.forEach((a) => {
        if (scrollPercent >= a.start && scrollPercent < a.end) {
            a.func()
        }
    })
}

let scrollPercent = 0

document.body.onscroll = () => {
    //calculate the current scroll progress as a percentage
    scrollPercent = ((document.documentElement.scrollTop || document.body.scrollTop) /((document.documentElement.scrollHeight || document.body.scrollHeight) - document.documentElement.clientHeight)) * 100;
}

// const clock = new THREE.Clock()

const tick = () => {
    plane.rotation.z += 0.0005;

    
    // material.displacementScale = mouseY * 0.002;


    playScrollAnimations()

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()