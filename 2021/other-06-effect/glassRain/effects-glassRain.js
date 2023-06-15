class Resize {
  constructor() {}

  cover(canvas, image) {
    const [ratioImage, ratioCanvas] = this.getAspect(canvas, image);
    const size = this.onResize(ratioImage > ratioCanvas, canvas, ratioImage);
    return size;
  }

  fit(canvas, image) {
    const [ratioImage, ratioCanvas] = this.getAspect(canvas, image);
    const size = this.onResize(ratioImage < ratioCanvas, canvas, ratioImage);
    return size;
  }

  getAspect(canvas, image) {
    return [image.height / image.width, canvas.height / canvas.width];
  }

  onResize(isCover, c, ratioImage) {
    if (isCover) {
      const w = c.width;
      const h = w * ratioImage;
      return { w, h, x: (c.width - w) / 2, y: (c.height - h) / 2 };
    } else {
      const h = c.height;
      const w = h / ratioImage;
      return { w, h, x: (c.width - w) / 2, y: (c.height - h) / 2 };
    }
  }
}


"use strict";
var idName = "canvas";
window.onload = function () {
    var shader = {
        vertex: "    \n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    \n    // those are the mandatory attributes that the lib sets\n    attribute vec3 aVertexPosition;\n    attribute vec2 aTextureCoord;\n\n    // those are mandatory uniforms that the lib sets and that contain our model view and projection matrix\n    uniform mat4 uMVMatrix;\n    uniform mat4 uPMatrix;\n\n    uniform mat4 dispImageMatrix;\n\n    // if you want to pass your vertex and texture coords to the fragment shader\n    varying vec3 vVertexPosition;\n    varying vec2 vTextureCoord;\n\n    void main() {\n        vec3 vertexPosition = aVertexPosition;\n        gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);\n\n        // set the varyings\n        vTextureCoord = (dispImageMatrix * vec4(aTextureCoord, 0., 1.)).xy;\n        vVertexPosition = vertexPosition;\n    }",
        fragment: "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    \n    #define PI2 6.28318530718\n    #define PI 3.14159265359\n    #define S(a,b,n) smoothstep(a,b,n)\n    \n    // get our varyings\n    varying vec3 vVertexPosition;\n    varying vec2 vTextureCoord;\n\n    // the uniform we declared inside our javascript\n    uniform float uTime;\n    uniform vec2 uReso;\n    uniform vec2 uMouse;\n\n    // our texture sampler (default name, to use a different name please refer to the documentation)\n    uniform sampler2D dispImage;\n    uniform sampler2D blurImage;\n  \n    // Noise\n    float N12(vec2 p){\n      p = fract(p * vec2(123.34, 345.45));\n      p += dot(p, p + 34.345);\n\n      return fract(p.x * p.y);\n    }\n\n    vec3 Layer(vec2 uv0, float t){\n\n      vec2 asp = vec2(2., 1.);\n\n      vec2 uv1 = uv0 * 3. * asp;\n\n      uv1.y += t * .25;\n\n      vec2 gv = fract(uv1) - .5;\n      vec2 id = floor(uv1);\n\n      float n = N12(id);\n\n      t+= n * PI2;\n\n      float w = uv0.y * 10.;\n      float x = (n - .5) * .8;\n      x += (.4 - abs(x)) * sin(3. * w) * pow(sin(w), 6.) * .45;\n      float y = -sin(t + sin(t + sin(t) * .5)) * (.5 - .06);\n      y -= (gv.x - x) * (gv.x - x); // sesgar;\n\n      vec2 dropPos = (gv - vec2(x, y)) / asp; \n      float drop = S(.03, .02, length(dropPos));\n\n      vec2 trailPos = (gv - vec2(x, t * .25)) / asp; \n      trailPos.y = (fract(trailPos.y * 8.) - .5) / 8.;\n      float trail = S(.02, .015, length(trailPos));\n\n      float fogTrail = S(-.05, .05, dropPos.y);\n\n      fogTrail *= S(.5, y, gv.y);\n      trail *= fogTrail;\n      fogTrail *= S(.03, .015, abs(dropPos.x));\n\n      vec2 off = drop * dropPos + trail * trailPos;\n\n      return vec3(off, fogTrail);\n    }\n  \n    void main() {      \n          float dist = 5.;\n          float blurSize = 5.;\n          float t = mod(uTime * .03, 7200.);\n\n          vec4 c = vec4(0);\n          vec2 uv = vTextureCoord;    \n\n          vec3 drops = Layer(uv, t);\n          drops += Layer(uv * 1.25 + 7.54, t);\n          drops += Layer(uv * 1.35 + 1.54, t);\n          drops += Layer(uv * 1.57 - 7.54, t);\n\n          float blur = blurSize * 7. * (1. - drops.z);\n\n          vec4 col = vec4(0.);\n          int numSamples = 32;\n          float a = N12(uv) * PI2;\n      \n          blur *= .0005;\n          uv += drops.xy * dist;\n            \n          for(int n = 0; n < 32; n++){\n            vec2 off = vec2(sin(a), cos(a)) * blur;\n            float d = fract(sin((float(n) + 1.) * 546.) * 5424.);\n            d = sqrt(d);         \n            off *= d;\n            col += texture2D(dispImage, uv + off);\n            a++;\n          }\n      \n          col /= float(numSamples);\n \n          gl_FragColor = col;\n    }\n    "
    }; // get our canvas wrapper

    var canvasContainer = document.getElementById(idName);
    var mouse = {
        x: 0,
        y: 0
    }; // set up our WebGL context and append the canvas to our wrapper

    var webGLCurtain = new Curtains({
        container: idName
    }); //webGLCurtain.glContext.getExtension('OES_standard_derivatives');
    // get our plane element

    var planeElement = document.getElementsByClassName("plane")[0]; // set our initial parameters (basic uniforms)

    var params = {
        vertexShader: shader.vertex,
        // our vertex shader ID
        fragmentShader: shader.fragment,
        // our framgent shader ID
        // 滑下來速度
        widthSegments: 40,
        heightSegments: 40,
        // we now have 40*40*6 = 9600 vertices !
        uniforms: {
            time: {
                name: "uTime",
                // uniform name that will be passed to our shaders
                type: "1f",
                // this means our uniform is a float
                value: 0
            },
            mousepos: {
                name: "uMouse",
                type: "2f",
                value: [mouse.x, mouse.y]
            },
            resolution: {
                name: "uReso",
                type: "2f",
                value: [innerWidth, innerHeight]
            }
        }
    }; // create our plane mesh

    var plane = webGLCurtain.addPlane(planeElement, params); // use the onRender method of our plane fired at each requestAnimationFrame call

    plane.onRender(function () {
        plane.uniforms.time.value++; // update our time uniform value

        plane.uniforms.resolution.value = [innerWidth, innerHeight];
    });
    canvasContainer.addEventListener("mousemove", function (_ref) {
        var clientX = _ref.clientX,
            clientY = _ref.clientY;
        mouse.x = clientX;
        mouse.y = clientY;
        plane.uniforms.mousepos.value = [mouse.x, mouse.y];
    });
};