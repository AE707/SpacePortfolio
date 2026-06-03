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
         {/* FinTech Automation */}
        <ProjectCard
          src={["/1.webp", "/2.webp", "/dash.png", "/que.png", "/supa.png"]}
          staticImage="/dash.png"
          title="FinTech Automation"
          description="A production-grade fintech automation portfolio built with Retool, n8n, and Supabase — demonstrating real-world transaction monitoring, multi-tier approval workflows, and event queue processing."
          link="https://github.com/AE707/Automation-ROI-calculator"
          tools={[
            { name: "Unity", icon: "/Unity-Dark.svg" },
            { name: "C#", icon: "/CS.svg" },
            { name: "git", icon: "/Git.svg" },
          ]}
        />
        
        {/* Tooling Decision Framework (Decision Engine) */}
        <ProjectCard
          src={["/uno.png", "/dos.png"]}
          staticImage="/uno.png"
          title="Decision Engine"
          description="Designed to help teams make informed decisions on whether to Build, Buy, or Retool their software solutions based on a set of weighted criteria."
          link="https://github.com/AE707/Automation-ROI-calculator"
          tools={[
            { name: "Unity", icon: "/Unity-Dark.svg" },
            { name: "C#", icon: "/CS.svg" },
            { name: "git", icon: "/Git.svg" },
          ]}
        />
        
        {/* Automation ROI Calculator */}
        <ProjectCard
          src={["/first.png", "/second.png", "/third.png"]}
          staticImage="/first.png"
          title="Automation ROI Calculator"
          description="A fully interactive, mobile-responsive React application for calculating automation return on investment."
          link="https://github.com/AE707/Automation-ROI-calculator"
          tools={[
            { name: "Unity", icon: "/Unity-Dark.svg" },
            { name: "C#", icon: "/CS.svg" },
            { name: "git", icon: "/Git.svg" },
          ]}
        />
        {/* FlarpyBloarb */}
        <ProjectCard
          src="https://raw.githubusercontent.com/AE707/FlarpyBloarb/main/Assets/Screenshots/GamePlay.gif"
          staticImage="/flarpy.png"
          title="FlarpyBloarb"
          description="Unity 2D casual game inspired by Flappy Bird. Built with C# focusing on gameplay mechanics, physics-based movement, and clean code structure."
          link="https://github.com/AE707/FlarpyBloarb"
          tools={[
            { name: "Unity", icon: "/Unity-Dark.svg" },
            { name: "C#", icon: "/CS.svg" },
            { name: "git", icon: "/Git.svg" },
          ]}
        />

        {/* ShiftRunner3D */}
        <ProjectCard
          src="https://media.githubusercontent.com/media/AE707/ShiftRunner3D/main/Assets/screenshots/ShifGamePlay.gif"
          staticImage="/shift.png"
          title="ShiftRunner3D"
          description="ShiftRunner3D is a 3D endless runner built with Unity, focused on modular environment tiles, pattern‑based obstacle spawning, and responsive feedback through UI, sound, and camera effects."
          link="https://github.com/AE707/ShiftRunner3D"
          tools={[
            { name: "Unity", icon: "/Unity-Dark.svg" },
            { name: "C#", icon: "/CS.svg" },
            { name: "git", icon: "/Git.svg" },
          
          ]}
        />

        {/* SubM */}
        <ProjectCard
          src={["/CardImage.jpeg", "/subm1.jpeg", "/subm2.jpeg"]}
          title="SubM"
          description="SubM is a production-ready Autonomous Underwater Vehicle (AUV) control system built with distributed ESP32 microcontrollers. Originally developed as a Master's thesis project in Mechanical Engineering."
          link="https://github.com/AE707/SubM"
          tools={[
            { name: "ESP32", icon: "/espressif-systems.svg" },
            { name: "C++", icon: "/CPP.svg" },
            { name: "git", icon: "/Git.svg" },
          
          ]}
        />

        {/* AE SpacePortfolio */}
        <ProjectCard
          src="/SpaceWebsite.png"
          title="AE SpacePortfolio"
          description="Modern Next.js portfolio with space theme, 3D animations, and responsive design."
          link="https://github.com/AE707/SpacePortfolio"
          tools={[
            { name: "Next.js", icon: "/next.png" },
            { name: "React", icon: "/react.png" },
            { name: "ts", icon: "/ts.png" },
            { name: "Tailwind", icon: "/tailwind.png" },
            { name: "ui", icon: "/MaterialUI-Dark.svg" },
          ]}
        />

        {/* FitTrack */}
        <ProjectCard
          src={["/FIT_TRACK.png", "/protype .png"]}
          title="FitTrack"
          description="fitTrack-hard explores whether core smartwatch logic — health monitoring, fall detection, and activity tracking — can be implemented efficiently using embedded C++, without reliance on heavy frameworks. Along with a comprehensive fitness tracking app with workout plans, progress monitoring, and analytics."
          link="https://github.com/AE707/FitTrack-hard"
          tools={[
            { name: "ESP32", icon: "/espressif-systems.svg" },
            { name: "C++", icon: "/CPP.svg" },
            { name: "Flutter", icon: "/Flutter-Dark.svg" },
            { name: "dart", icon: "/Dart-Dark.svg" },
            { name: "fire", icon: "/Firebase-Dark.svg" },
            { name: "git", icon: "/Git.svg" },
            { name: "figma", icon: "/figma.png" },
          ]}
        />

        {/* NutryCicle */}
        <ProjectCard
          src={["/period_app.png", "/protype_period.png"]}
          title="NutryCicle"
          description="Subscription management system with automated billing, analytics, and customer portal."
          link="https://github.com/AE707/nutri-cycle"
          tools={[
            { name: "Flutter", icon: "/Flutter-Dark.svg" },
            { name: "dart", icon: "/Dart-Dark.svg" },
            { name: "fire", icon: "/Firebase-Dark.svg" },
            { name: "git", icon: "/Git.svg" },
            { name: "figma", icon: "/figma.png" },
          ]}
        />

        {/* AccessDoorController */}
        <ProjectCard
          src={["/access.webp", "/access1.jpeg", "/access2.jpeg"]}
          title="AccessDoorController"
          description="AccessControlDoor is an ESP32-based access control firmware built with PlatformIO, designed for secure and modular embedded door systems. It showcases GPIO control, authentication logic, state management, and hardware–software integration."
          link="https://github.com/AE707/AccessControlDoor"
          tools={[
            { name: "ESP32", icon: "/espressif-systems.svg" },
            { name: "C++", icon: "/CPP.svg" },
            { name: "PlatformIO", icon: "/PlatformIO_logo.png" },
            { name: "sql", icon: "/SQLite.svg" },
            { name: "git", icon: "/Git.svg" },
          ]}
        />

        {/* Trading Agent */}
        <ProjectCard
          src="/tradingagent.webp"
          title="Trading Agent"
          description="Production-ready Python framework for autonomous trading agents implementing theory → backtest → paper test → live trading pipeline with continuous learning."
          link="https://github.com/AE707/trading-agent"
          tools={[
            { name: "ts", icon: "/ts.png" },
            { name: "Python", icon: "/Python-Dark.svg" },
            { name: "docker", icon: "/Docker.svg" },
            { name: "css", icon: "/css.png" },
            { name: "git", icon: "/Git.svg" },
          
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
