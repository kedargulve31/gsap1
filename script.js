gsap.from('.header', {
      opacity: 0,
      y: -100,
      delay: 0.3,
      duration: 2
  });
  
  gsap.from('.header h2', {
      opacity: 0,
      x: -100,
      delay: 2.3,
      duration: 1
  });
  
  gsap.from('.header .links a', {
      opacity: 0,
      y: 100,
      delay: 3.3,
      duration: 0.5
  });
  
  gsap.from('.header .links button', {
      opacity: 0,
      x: 100,
      delay: 3.8,
      duration: 0.9
  });
  
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from('.main .info', {
      opacity: 0,
      x: -100,
      scrollTrigger: {
          trigger: '.main .info',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
          markers:true
      }
  });
  
  gsap.from('.main .banner', {
      opacity: 0,
      scale: 0,
      scrollTrigger: {
          trigger: '.main .banner',
          start: 'top 50%',
          end: 'top 50%',
          scrub: 2,
          
      }
  });
  
  gsap.from('.about .one', {
      opacity: 0,
      x: -100,
      scrollTrigger: {
          trigger: '.about .one',
          start: 'top 90%',
          end: 'top 60%',
          scrub: true
      }
  });
  
  gsap.from('.about .two', {
      opacity: 0,
      x: 100,
      scrollTrigger: {
          trigger: '.about .two',
          start: 'top 90%',
          end: 'top 60%',
          scrub: true
      }
  });
  