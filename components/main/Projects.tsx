import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center text-[32px] mpy-6 md:py-10d:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-12 md:py-20"
            id="projects"
        >
            <h1 className="text-[32px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-12 md:py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row text-[32px] mgap-6 md:gap-10 px-4 md:px-10py-6 md:py-10d:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-12 md:py-20">
                <ProjectCard
                    src="https://raw.githubusercontent.com/AE707/FlarpyBloarb/main/Assets/Screenshots/GamePlay.gif"
              title="FlarpyBloarb - Flappy Bird Clone"
                    description="Unity 2D casual game inspired by Flappy Bird. Built with C# focusing on gameplay mechanics, physics-based movement, and clean code structure."
                />
                <ProjectCard
                    src="/CardImage.png"
                    title="Interactive Website Cards"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ProjectCard
                    src="/SpaceWebsite.png"
                    title="Space Themed Website"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
        </div>
    );
};

export default Projects;
