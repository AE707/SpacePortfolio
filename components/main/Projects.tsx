import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-6 md:py-10"
      id="projects"
    >
      <h1 className="text-[32px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-12 md:py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4 md:px-10">
        <ProjectCard
          src="https://raw.githubusercontent.com/AE707/FlarpyBloarb/main/Assets/Screenshots/GamePlay.gif"
          title="FlarpyBloarb - Flappy Bird Clone"
          description="Unity 2D casual game inspired by Flappy Bird. Built with C# focusing on gameplay mechanics, physics-based movement, and clean code structure."
          link="https://github.com/AE707/FlarpyBloarb"
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="ShiftRunner3D - Endless Runner"
          description="Fast-paced 3D endless runner game built in Unity. Features dynamic obstacle generation, smooth character controls, and progressive difficulty scaling."
          link="https://github.com/AE707/ShiftRunner3D"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Trading Agent - ML Trading Bot"
          description="Automated three-stage trader learning pipeline with backtester, rule engine, ML scoring, paper broker, and continuous learning system."
          link="https://github.com/AE707/trading-agent"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="AE SpacePortfolio"
          description="Modern Next.js portfolio with stunning space theme, 3D animations, and responsive design. Built with TypeScript, Tailwind CSS, and Framer Motion."
          link="https://github.com/AE707/SpacePortfolio"
        />
      </div>
    </div>
  );
};

export default Projects;
