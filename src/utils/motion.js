/** Smooth deceleration — premium UI default */
export const EASE = [0.22, 1, 0.36, 1];
/** Slightly snappier for micro-interactions */
export const EASE_SNAP = [0.16, 1, 0.3, 1];

const DIST = {
  sm: 16,
  md: 28,
  lg: 40,
};

export const textVariant = (delay = 0) => ({
  hidden: {
    y: DIST.sm,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
      delay,
      ease: EASE,
    },
  },
});

export const fadeIn = (direction = '', type = 'tween', delay = 0, duration = 0.55) => {
  const axis =
    direction === 'left' || direction === 'right'
      ? 'x'
      : direction === 'up' || direction === 'down'
        ? 'y'
        : null;

  const offset =
    direction === 'left' || direction === 'up'
      ? DIST.md
      : direction === 'right' || direction === 'down'
        ? -DIST.md
        : 0;

  return {
    hidden: {
      ...(axis ? { [axis]: offset } : { y: DIST.sm }),
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type === 'spring' ? 'spring' : 'tween',
        ...(type === 'spring'
          ? { stiffness: 120, damping: 22, mass: 0.8 }
          : { duration, ease: EASE }),
        delay,
      },
    },
  };
};

export const zoomIn = (delay = 0, duration = 0.5) => ({
  hidden: {
    scale: 0.92,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: EASE,
    },
  },
});

export const slideIn = (direction, type = 'tween', delay = 0, duration = 0.6) => ({
  hidden: {
    x: direction === 'left' ? '-24%' : direction === 'right' ? '24%' : 0,
    y: direction === 'up' ? '24%' : direction === 'down' ? '24%' : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: type === 'spring' ? 'spring' : 'tween',
      ...(type === 'spring'
        ? { stiffness: 100, damping: 20 }
        : { duration, ease: EASE }),
      delay,
    },
  },
});

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.05) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/** Hero entrance — orchestrated stagger */
export const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const heroVisual = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: 0.12 },
  },
};
