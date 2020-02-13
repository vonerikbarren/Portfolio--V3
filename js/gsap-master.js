// -=-=-=-=-=-=-=-=-=-=
// ==== To start my functions in my js ====
// -=-=-=-=-=-=-=-=-=-=

document.addEventListener("DOMContentLoaded", function () {

  var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.01, yoyo: true });
  tl.from("#Title1", {
    duration: 5,
    opacity: 0.1,
    scale: 0.01,
    rotation: 360,
    rotationX: 360,
    rotationY: 360,
    x: -1000,
    y: 1000,
    z: -1000
  });
  tl.to("#Title1", {
    // y: -50, 
    duration: 5,
    opacity: 1,
    // scale: 0.01,
    rotation: 360,
    rotationX: 360,
    rotationY: 360,
    x: 1000,
    y: 1000,
    strength: 1,
    points: 20,
    taper: 'none',
    randomize: true,
    clamp: false


  });
  tl.to("#Title1", {
    // opacity: 0, duration: 1 
    duration: 5,
    opacity: 0.1,
    // scale: 0.01,
    rotation: 360,
    rotationX: 360,
    rotationY: 360,
    x: 0,
    y: 0,

  });







  // gsap.from("#Title1", {
  //   duration: 5,
  //   opacity: 0.1,
  //   scale: 0.01,
  //   rotation: 360,
  //   rotationX: 360,
  //   rotationY: 360,
  //   x: -1000,
  //   y: 1000,
  //   z: -1000



  // });





});  