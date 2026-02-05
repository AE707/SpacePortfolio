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
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-10">
        <ProjectCard
          src="https://raw.githubusercontent.com/AE707/FlarpyBloarb/main/Assets/Screenshots/GamePlay.gif"
          title="FlarpyBloarb"
          description="Unity 2D casual game inspired by Flappy Bird with physics-based movement and clean code."
          link="https://github.com/AE707/FlarpyBloarb"
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="ShiftRunner3D"
          description="Fast-paced 3D endless runner built in Unity with dynamic obstacles and smooth controls."
          link="https://github.com/AE707/ShiftRunner3D"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Trading Agent"
          description="Automated ML trading bot with backtester, rule engine, and continuous learning system."
          link="https://github.com/AE707/trading-agent"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="AE SpacePortfolio"
          description="Modern Next.js portfolio with space theme, 3D animations, and responsive design."
          link="https://github.com/AE707/SpacePortfolio"
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="FitTrack"
          description="Comprehensive fitness tracking app with workout plans, progress monitoring, and analytics."
          link="https://github.com/AE707/FitTrack-hard"
        />
        <ProjectCard
          src="/CardImage.png"
          title="SubM"
          description="Subscription management system with automated billing, analytics, and customer portal."
          link="https://github.com/AE707/SubM"
        />
      </div>
    </div>
  );
};

export default Projects;
