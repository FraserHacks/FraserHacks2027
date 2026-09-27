export function ParallaxLayer({ layer, className, children }) {
  return (
    <div data-parallax={layer} className={className}>
      {children}
    </div>
  );
}
