import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Attachment } from 'svelte/attachments';

export function scrollreveal(override_vars: GSAPTweenVars = {}): Attachment {
  return (element) => {
    gsap.registerPlugin(ScrollTrigger)

    const defaults: GSAPTweenVars = {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      translateY: 10,
      duration: 0.35
    };
    const vars = Object.assign(defaults, override_vars);

    let ctx = gsap.context(() => {
      gsap.from(element, vars);
    });
    return () => ctx.revert();
  };
}
