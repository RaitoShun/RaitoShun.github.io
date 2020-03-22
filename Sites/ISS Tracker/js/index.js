//Creating the initial scene components
let renderer = new THREE.WebGLRenderer();
let scene = new THREE.Scene();
let aspectRatio = window.innerWidth / window.innerHeight;
let camera = new THREE.PerspectiveCamera(95, aspectRatio * 0.8, 0.1, 1500);
let controls = new THREE.OrbitControls(camera, renderer.domElement);

// Lights to make the scene visible, one to add glare to Earth
let spotLight = new THREE.SpotLight(0xffffff, 1, 0, 10, 2);
let light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

// Texture Loader declaration
let loader = new THREE.TextureLoader();
let modelLoader = new THREE.GLTFLoader();


//Defining the Earth Geometry, Material, combining it in a mesh and adding textures
var earthGeometry = new THREE.SphereGeometry(1, 32, 32);
var earthMaterial = new THREE.MeshPhongMaterial();
var earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
earthMaterial.map = loader.load('assets/textures/earthmap1k.jpg')
earthMaterial.bumpMap = loader.load('assets/textures/earthbump1k.jpg')
earthMaterial.bumpScale = 0.05;
earthMaterial.specularMap = loader.load('assets/textures/earthspec1k.jpg')
earthMaterial.specular = new THREE.Color('grey')

//Creating the Cloud geometry, Material and making a mesh
var cloudGeometry = new THREE.SphereGeometry(1.01, 33, 33)
var cloudMaterial = new THREE.MeshPhongMaterial({
    map: loader.load('assets/textures/Earth-clouds.png'),
    opacity: 0.8,
    side: THREE.DoubleSide,
    transparent: true,
    depthWrite: false,
});
var cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
earthMesh.add(cloudMesh)


// Galaxy Geo and Mat
let galaxyGeometry = new THREE.SphereGeometry(15, 32, 32);
let galaxyMaterial = new THREE.MeshBasicMaterial({
    side: THREE.BackSide
});
let galaxy = new THREE.Mesh(galaxyGeometry, galaxyMaterial);

// Load Galaxy Textures
loader.load(
    'assets/textures/starfield.png',
    function (texture) {
        galaxyMaterial.map = texture;
        scene.add(galaxy);
    }
);

// Scene, Camera, Renderer Configuration and Adding to the DOM
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Making the Camera have a position
camera.position.set(1, 1, 1);

//Adding basic components
scene.add(camera);
scene.add(spotLight);

// Light Configurations
spotLight.position.set(2, 0, 1);

// Mesh Configurations to make the lighting realistic
earthMesh.receiveShadow = true;
earthMesh.castShadow = true;
earthMesh.geometry.center();

// On window resize, adjust camera aspect ratio and renderer size
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

//Actual issLongLat object for ISS Tracking
var issMeshPos = new THREE.Mesh();
issMeshPos.position.set(1.2, 0, 0); //1.2 is a comfortable distance from Earth
var issLongLat = new THREE.Object3D();
issLongLat.add(issMeshPos);

//ISS 3D model loaded in here
modelLoader.load('assets/models/ISS_stationary.glb', function (issModel) {
    //Make ISS Model Smaller
    issModel.scene.scale.x = 0.001;
    issModel.scene.scale.y = 0.001;
    issModel.scene.scale.z = 0.001;

    issMeshPos.add(issModel.scene);
}, undefined, function (error) {
    console.error(error);
});

//Creating the Bubble around the ISS
var bubbleGeometry = new THREE.SphereGeometry(0.15, 24, 24)
var bubbleMaterial = new THREE.MeshPhongMaterial({
    color: '#ffffff',
    transparent: true,
    opacity: 0.1
});
var bubbleMesh = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
issMeshPos.add(bubbleMesh);

//Wrapper for Earth and ISS issLongLat
var mainWrapper = new THREE.Object3D();
mainWrapper.add(earthMesh);
earthMesh.add(issLongLat);
scene.add(mainWrapper);


//Initialise controls
controls.update();

// Main render function
let render = function () {
    controls.update();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    cloudMesh.rotation.y += 1 / 32 * 0.02;
    earthMesh.rotation.y += 1 / 32 * 0.01;
    requestAnimationFrame(render);
    renderer.render(scene, camera);
};

function getISSPOS(data) {
    let issLong, issLat;
    issLong = data.longitude;
    issLat = data.latitude;
    issLongLat.quaternion.setFromEuler(new THREE.Euler(0, issLong * RADIUS, issLat * RADIUS, "YZX"));
}



//Setting Radius and issLongLat position in relation to Earth
var RADIUS = Math.PI / 180;

window.addEventListener("load", function () {
    let introTitle = document.querySelector('h1');
    let introParagraphTip = document.querySelector('p');

    //Fetch initial location
    fetch("https://realtime-iss-tracker.herokuapp.com/")
        .then(response => response.json())
        .then(data => getISSPOS(data))

    document.body.removeChild(load_screen);
    introTitle.classList.add('slide_in');
    setTimeout(() => {
        introParagraphTip.classList.add('pulsate');
    }, 4000);

    //Update the position of the ISS
    setInterval(() => {
        fetch("https://realtime-iss-tracker.herokuapp.com/")
            .then(response => response.json())
            .then(data => getISSPOS(data))
    }, 10000);



})
render();