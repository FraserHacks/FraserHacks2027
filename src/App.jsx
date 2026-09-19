import { CloudWash } from "./components/CloudWash";
import { ForegroundClouds } from "./components/hero/ForegroundClouds";
import { HeroSection } from "./components/hero/HeroSection";
import { useParallaxLayer } from "./hooks/useParallaxLayer";

function App() {
  useParallaxLayer();

  return (
    <div className="page">
      <HeroSection />
      <CloudWash />
      <ForegroundClouds />
    </div>
  );
}

export default App;
