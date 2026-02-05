import {
    RxDiscordLogo,
    RxGithubLogo
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[10px] md:p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="p-[10px] md:min-w-[150px] md:min-w-[200px]p-[15px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <p className="flex flex-row items-center p-[10px] md:my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] cursor-pointer">
                            <FaYoutube />
                            <span className="p-[10px] md:text-[13px] md:text-[15px]my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] ml-[6px]">
                                Youtube
                            </span>
                        </p>
                        <p className="flex flex-row items-center p-[10px] md:my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="p-[10px] md:text-[13px] md:text-[15px]my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] ml-[6px]">Github</span>
                        </p>
                        <p className="flex flex-row items-center p-[10px] md:my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="p-[10px] md:text-[13px] md:text-[15px]my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] ml-[6px]">
                                Discord
                            </span>
                        </p>
                    </div>
                    <div className="p-[10px] md:min-w-[150px] md:min-w-[200px]p-[15px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">
                            Social Media
                        </div>
                        <p className="flex flex-row items-center p-[10px] md:my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] cursor-pointer">
                            <FaYoutube />
                            <span className="p-[10px] md:text-[13px] md:text-[15px]my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] ml-[6px]">
                                Instagram
                            </span>
                        </p>
                        <p className="flex flex-row items-center p-[10px] md:my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="p-[10px] md:text-[13px] md:text-[15px]my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] ml-[6px]">
                                Twitter
                            </span>
                        </p>
                        <p className="flex flex-row items-center p-[10px] md:my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="p-[10px] md:text-[13px] md:text-[15px]my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] ml-[6px]">
                                Linkedin
                            </span>
                        </p>
                    </div>
                    <div className="p-[10px] md:min-w-[150px] md:min-w-[200px]p-[15px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center p-[10px] md:my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] cursor-pointer">
                            <span className="p-[10px] md:text-[13px] md:text-[15px]my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] ml-[6px]">
                                Become Sponsor
                            </span>
                        </p>
                        <p className="flex flex-row items-center p-[10px] md:my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] cursor-pointer">
                            <span className="p-[10px] md:text-[13px] md:text-[15px]my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] ml-[6px]">
                                Learning about me
                            </span>
                        </p>
                        <p className="flex flex-row items-center p-[10px] md:my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] cursor-pointer">
                            <span className="p-[10px] md:text-[13px] md:text-[15px]my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] ml-[6px]">
                                AE7\07@outlook.com
                            </span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] p-[10px] md:text-[13px] md:text-[15px]my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] text-center">
                    &copy; WebChain Dev 2023 Inc. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
