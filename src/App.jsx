import { CloudWash } from "./components/CloudWash";
import { CursorBat } from "./components/CursorBat";
import { HeroSection } from "./components/hero/HeroSection";
import { useParallaxLayer } from "./hooks/useParallaxLayer";

function App() {
  useParallaxLayer();

  return (
    <div className="page">
      <HeroSection />
      <CloudWash />
      <CursorBat />
    </div>
  );
}

export default App;
