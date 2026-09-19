export function ParallaxLayer({ layer, className, style, children }) {
  return (
    <div data-parallax={layer} className={className} style={style}>
      {children}
    </div>
  );
}
