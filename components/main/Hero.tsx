import HeroContent from "../sub/HeroContent";


const Hero = () => {
    return (
        <div className="relative h-full w-full" id="home">
            <video
                autoPlay
                muted
                loop
                className="absolute top-[-80vh] sm:top-[-45vh] md:top-[-320px] lg:top-[-420px] left-0 z-[0] w-full min-h-[150vh] h-auto object-cover"
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
            <HeroContent />
            
        </div>
    );
};

export default Hero;
