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
                  staticImage="/flarpy.png"
          title="FlarpyBloarb"
          description="Unity 2D casual game inspired by Flappy Bird. Built with C# focusing on gameplay mechanics, physics-based movement, and clean code structure."
          link="https://github.com/AE707/FlarpyBloarb"
        />
        <ProjectCard
          src="https://media.githubusercontent.com/media/AE707/ShiftRunner3D/main/Assets/screenshots/ShifGamePlay.gif"
                  staticImage="/shift.png"
          title="ShiftRunner3D"
          description="ShiftRunner3D is a 3D endless runner built with Unity, focused on modular environment tiles, pattern‑based obstacle spawning, and responsive feedback through UI, sound, and camera effects."
          link="https://github.com/AE707/ShiftRunner3D"
        />
                <ProjectCard
          src={[
            "/CardImage.jpeg",
            "/subm1.jpeg",
            "/subm2.jpeg"
          ]}
          title="SubM"
          description="SubM is a production-ready Autonomous Underwater Vehicle (AUV) control system built with distributed ESP32 microcontrollers. Originally developed as a Master's thesis project in Mechanical Engineering."
          link="https://github.com/AE707/SubM"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="AE SpacePortfolio"
          description="Modern Next.js portfolio with space theme, 3D animations, and responsive design."
          link="https://github.com/AE707/SpacePortfolio"
        />
        <ProjectCard
          src={[
            "/FIT_TRACK.png",
            "/protype .png"
          ]}
          title="FitTrack"
          description="fitTrack-hard explores whether core smartwatch logic — health monitoring, fall detection, and activity tracking — can be implemented efficiently using embedded C++, without reliance on heavy frameworks. Along with Comprehensive fitness tracking app with workout plans, progress monitoring, and analytics."
          link="https://github.com/AE707/FitTrack-hard"
        />
        <ProjectCard
          src={[
            "/period_app.png",
            "/protype_period.png"
            ]}
          title="NutryCicle"
          description="Subscription management system with automated billing, analytics, and customer portal."
          link="https://github.com/AE707/nutri-cycle "
        />
        <ProjectCard
          src={[
            "/access.webp",
            "/access1.jpeg",
            "/access2.jpeg"
            ]}
          title="AccessDoorController"
          description="AccessControlDoor is an ESP32-based access control firmware built with PlatformIO, designed for secure and modular embedded door systems. The project showcases key embedded concepts including GPIO control, authentication logic, state management, and hardware–software integration."
          link="https://github.com/AE707/AccessControlDoor"
        />
        <ProjectCard
          src="/tradingagent.webp"
          title="Trading Agent"
          description="Production-ready Python framework for autonomous trading agents implementing theory → backtest → paper test → live trading pipeline with continuous learning."
          link="https://github.com/AE707/trading-agent"
        />
      </div>
    </div>
  );
};

export default Projects;
