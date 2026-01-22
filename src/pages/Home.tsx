import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import WorkSection from "../components/WorkSection";
import FunSection from "../components/FunSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background: "#fefefe",
      }}
    >
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <WorkSection />
        <FunSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
