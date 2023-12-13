// gsap.registerPlugin(ScrollTrigger);

// // --- ORANGE PANEL ---

// const tl = gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".splash",
//       pin: true,

//       start: "50% 50%",
//       end: "+=500%",

//       //

//       scrub: 1,
//       pin: true,
//       start: "50% 50%",
//       endTrigger: ".img2",
//       end: "bottom 50%",
//     },
//   })

//   //   .from(".splash", {
//   //     scale: 1,
//   //     ease: "linear",
//   //   })

//   //   .from(
//   //     ".img",
//   //     {
//   //       scale: 1,
//   //       opacity: 1,
//   //       ease: "linear",
//   //       transformOrigin: "center center",
//   //     },
//   //     0
//   //   )
//   .to(
//     ".splash",
//     {
//       scale: 105,

//       ease: "linear",
//       transformOrigin: "center center",
//     },
//     ".brandhub-text-mask__see-through-surface",
//     {
//       opacity: 0,
//     },
//     150
//   );

// gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

// --- ORANGE PANEL ---

const tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".full-screen",
      // pin: true,

      // start: "50% 50%",
      end: "bottom 50%",
      // end: "+=1000",

      // markers: true,
      //

      scrub: 1,
      pin: true,
      duration: 500,
      ease: true,
      // pinSpacing: true,
      // endTrigger: ".img2",
    },
  })

  .to("svg", {
    ease: "power1.inOut",
    transformOrigin: "center ",
    // scale: 105,
    transform: "scale3d(105,105,105)",
    duration: 500,
  })
  .to(
    ".surf",
    {
      opacity: 0,
      ease: "power1.inOut",
      transformOrigin: "center ",
      display: "none",
      duration: 500,
    },
    0
  )
  .from(".img2", {
    position: "fixed",
    pin: true,
  })
  .to(".img2", {
    position: "absolute",
    pin: true,
  });
// .to(".full-screen", {
//   // display: "none",
// })
// .to(".img2", {
//   position: "sticky",
//   top: "-1000%",
// });

gsap.registerPlugin(ScrollTrigger);
