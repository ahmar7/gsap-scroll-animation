// gsap.registerPlugin(ScrollTrigger);

// // --- ORANGE PANEL ---

// const tl = gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".splash",
//       pin: true,

//       start: "50% 50%",
//       end: "+=200%",

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
      trigger: ".splash",
      // pin: true,

      // start: "50% 50%",
      end: "bottom ",

      // markers: true,
      //

      scrub: 2,
      pin: true,
      // pinSpacing: true,
      // endTrigger: ".img2",
    },
  })

  .to(".splash", {
    ease: "linear",
    transformOrigin: "center ",
    scale: 105,
  })
  .to(
    ".surf",
    {
      opacity: 0,
      ease: "linear",
      transformOrigin: "center ",
      display: "none",
    },
    0
  );
// .to(".full-screen", {
//   // display: "none",
// })
// .to(".img2", {
//   position: "sticky",
//   top: "-1000%",
// });

gsap.registerPlugin(ScrollTrigger);
