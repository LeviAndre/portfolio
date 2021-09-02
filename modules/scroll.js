export function scrollAnim () {

    document.addEventListener('DOMContentLoaded', () => {
      var timeline = gsap.timeline();
  
      // timeline.from(".info", {
      //     duration: 1,
      //     opacity: 0,
      //     y: 50,
      //     ease: "power3.out",
      //     delay: 0.3
      // }).from(".qualidades", {
      //     duration: 01,
      //     opacity: 0,
      //     y: 50,
      //     ease: "power3.out",
      // });


        gsap.from(".anim", {
            duration: 1.7,
            opacity: 0,
            x: -200,
            stagger: { each: 0.2 },
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".anim"
            }
        })

        gsap.from(".anim1", {
            duration: 1,
            opacity: 0,
            x: -100,
            stagger: { each: 0.2 },
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".anim1"
            }
        })

        gsap.from(".subAnim1", {
            duration: 1,
            opacity: 0,
            x: -100,
            delay: 0.5,
            stagger: { each: 0.2 },
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".anim1"
            }
        })
  
        gsap.from(".anim2", {
            duration: 1,
            opacity: 0,
            y: 500,
            stagger: { each: 0.2 },
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".anim2"
            }
        })
  
        gsap.from(".anim3", {
            duration: 1,
            opacity: 0,
            y: 500,
            stagger: { each: 0.2 },
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".anim3"
            }
        })
  
        gsap.from(".anim4", {
          duration: 2,
          opacity: 0,
          delay: 0.5,
          x: -80,
          stagger: { each: 0.2 },
          ease: "expo",
          scrollTrigger: {
              trigger: ".anim3"
          }
      })
  
      gsap.from(".anim5", {
        duration: 2,
        opacity: 0,
        delay: 1,
        x: 80,
        stagger: { each: 0.2 },
        ease: "expo",
        scrollTrigger: {
            trigger: ".anim3"
        }
      })
  
      gsap.from(".anim6", {
        duration: 2,
        opacity: 0,
        delay: 1.5,
        x: -80,
        stagger: { each: 0.2 },
        ease: "expo",
        scrollTrigger: {
            trigger: ".anim3"
        }
      })
      });
  
  }