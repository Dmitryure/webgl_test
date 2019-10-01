import React, {useState, useRef, useEffect} from 'react';
import * as THREE from 'three'

function App() {
	const canvasRef = useRef(null)


	useEffect(() => {
		const context = canvasRef.current.getContext("webgl")
		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
		const renderer = new THREE.WebGLRenderer(context)
		renderer.setSize(window.innerWidth, window.innerHeight)
		const geometry = new THREE.BoxGeometry( 1, 1, 1 );
		const material = new THREE.MeshBasicMaterial( { color: 'red' } );
		const cube = new THREE.Mesh( geometry, material );
		scene.add(cube)
		scene.background = new THREE.Color('blue')
		camera.position.z = 5;
		const animate = function () {
			requestAnimationFrame( animate );
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			renderer.render( scene, camera );
		};
		animate();
	})

	return (
		<canvas ref={canvasRef} width={window.innerWidth-150} height={window.innerHeight-150}/>
	);
}

export default App;
