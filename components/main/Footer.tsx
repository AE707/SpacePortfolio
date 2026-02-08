import {
    RxGithubLogo,
    RxLinkedinLogo,
    RxTwitterLogo
} from "react-icons/rx";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 md:p-4">
            <div className="w-full flex flex-col items-center justify-center m-auto max-w-[1855px] mx-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap gap-4">
                    <div className="p-3 md:p-4 md:min-w-[180px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-sm md:text-base">Community</div>
                        <a
                            href="https://github.com/AE707"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center p-2 md:my-2 text-[13px] md:text-[15px] cursor-pointer hover:text-purple-400 transition-colors"
                        >
                            <RxGithubLogo className="mr-2" />
                            Github
                        </a>
                    </div>
                    <div className="p-3 md:p-4 md:min-w-[180px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-sm md:text-base">Social Media</div>
                        <a
                            href="https://x.com/ae7_alaa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center p-2 md:my-2 text-[13px] md:text-[15px] cursor-pointer hover:text-purple-400 transition-colors"
                        >
                            <RxTwitterLogo className="mr-2" />
                            Twitter
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alaaelghoul"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center p-2 md:my-2 text-[13px] md:text-[15px] cursor-pointer hover:text-purple-400 transition-colors"
                        >
                            <RxLinkedinLogo className="mr-2" />
                            Linkedin
                        </a>
                    </div>
                    <div className="p-3 md:p-4 md:min-w-[180px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-sm md:text-base">About</div>
                        <a
                            href="#contact"
                            className="flex flex-row items-center p-2 md:my-2 text-[13px] md:text-[15px] cursor-pointer hover:text-purple-400 transition-colors"
                        >
                            Hire Me
                        </a>
                        <a
                            href="mailto:AE7_07@outlook.com"
                            className="flex flex-row items-center p-2 md:my-2 text-[13px] md:text-[15px] cursor-pointer hover:text-purple-400 transition-colors"
                        >
                            AE7_07@outlook.com
                        </a>
                    </div>
                </div>

                <div className="mb-5 p-4 text-[13px] md:text-[15px] text-center">
                    &copy; AE7 Dev 2026 Inc. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
