import glslify from 'glslify'

export const vertexShader = glslify(`varying vec3 vNorm; varying vec2 vUv;
void main() {
  vUv = uv;
  vNorm = position.xyz;
  gl_Position = projectionMatrix *
              modelViewMatrix *
              vec4(position, 1.0);
}
  `);

export const fragmentShader = glslify(`
    varying vec2 vUv;
    uniform float time;
    #pragma glslify: hsl2rgb = require('glsl-hsl2rgb');
    void main () {
      vec3 color = hsl2rgb(mod(vUv.y * 0.1 + time * 0.1, 1.0), 0.5, 0.5);
      gl_FragColor = vec4(color, 1.0);
      if (!gl_FrontFacing) {
        gl_FragColor = vec4(color * 0.25, 1.0);
      }
    }
  `);
