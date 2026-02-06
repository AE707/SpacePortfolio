import {
    RxGithubLogo,
    RxLinkedinLogo,
    RxTwitterLogo
} from "react-icons/rx";


const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[10px] md:p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="p-[10px] md:min-w-[150px] md:min-w-[200px]p-[15px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>

                        <p className="flex flex-row items-center p-[10px] md:my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="p-[10px] md:text-[13px] md:text-[15px]my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[5px] ml-[6px]">Github</span>
                        </p>

                    </div>
                    <div className="p-[10px] md:min-w-[150px] md:min-w-[200px]p-[15px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">
                            Social Media
                        </div>
                        <p className="flex flex-row items-center p-[10px] md:my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] cursor-pointer">
                            <RxTwitterLogo />
                            <span className="p-[10px] md:text-[13px] md:text-[15px]my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] ml-[6px]">
                                Twitter
                            </span>
                        </p>
                        <p className="flex flex-row items-center p-[10px] md:my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] cursor-pointer">
                            <RxLinkedinLogo />
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
                                Hire Me
                            </span>
                        </p>
                        <p className="flex flex-row items-center p-[10px] md:my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] cursor-pointer">
                            <span className="p-[10px] md:text-[13px] md:text-[15px]my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] ml-[6px]">
                                AE7_07@outlook.com
                            </span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] p-[10px] md:text-[13px] md:text-[15px]my-[10px] md:my-[15px]min-w-[150px] md:min-w-[200px]p-[15px] text-center">
                    &copy; AE7 Dev 2026 Inc. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
