import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to all `.rv` elements and
 * adds the `.in` class when they scroll into view.
 * Also triggers countUp for `[data-count]` children.
 */
export function useReveal() {
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    function countUp(el) {
      const to = +el.dataset.count;
      const inr = el.dataset.fmt === 'in';
      const fmt = n => inr ? n.toLocaleString('en-IN') : String(n);
      if (reduce) { el.textContent = fmt(to); return; }
      const t0 = performance.now(), D = 1600;
      (function f(t) {
        const k = Math.min(1, (t - t0) / D);
        const v = Math.round(to * (1 - Math.pow(1 - k, 3)));
        el.textContent = fmt(v);
        if (k < 1) requestAnimationFrame(f);
      })(t0);
    }

    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const siblings = Array.from(el.parentElement.querySelectorAll('.rv'))
          .filter(x => !x.classList.contains('in'));
        el.style.transitionDelay = Math.max(0, siblings.indexOf(el)) * 80 + 'ms';
        el.classList.add('in');
        ro.unobserve(el);
        el.querySelectorAll('[data-count]').forEach(countUp);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.rv').forEach(el => ro.observe(el));
    return () => ro.disconnect();
  }, []);
}


/** Magnetic effect for `.magnetic` elements */
export function useMagnetic(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    };
    const onLeave = () => { el.style.transform = ''; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [ref]);
}
