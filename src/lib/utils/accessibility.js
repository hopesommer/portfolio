export const prefersReducedMotion = () => {
	const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
	if (mediaQuery.matches) return true;
	return false;
};