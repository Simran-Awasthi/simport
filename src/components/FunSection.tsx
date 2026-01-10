import ProjectCard from "./ProjectCard";
import FeaturedProjectCard from "./FeaturedProjectCard";
import FlappyCollage from "./FlappyCollage";

const FunSection = () => {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-16 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-gray-800 w-96"></div>
            <div className="text-2xl">🎀</div>
            <div className="h-px bg-gray-800 w-96"></div>
          </div>
          <h2 className="text-xl font-bold text-gray-700 text-left">
            — just for fun (ᴗ͈ˬᴗ͈)
          </h2>
        </div>

        <div className="space-y-16">
          <FeaturedProjectCard
            title="Flappy Bird Game Played by AI"
            description="An AI-powered version of the classic Flappy Bird game where machine learning algorithms learn to play and master the game through reinforcement learning techniques."
            customContent={<FlappyCollage />}
            customBorderColor="#69c6ce"
            customBackgroundColor="#b8e6ea"
            customShadowColor="#69c6ce"
            hideDecorations={true}
          />
        </div>
      </div>
    </section>
  );
};

export default FunSection;
