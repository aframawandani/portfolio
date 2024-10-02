import { useBreakpoint } from 'use-breakpoint';

export default function _useBreakpoint() {
  const breakpoints = useBreakpoint({
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  });

  return breakpoints;
}