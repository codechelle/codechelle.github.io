import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, JSX } from "react";
import { HeroNavProps, heroNavItems } from "../data/hero-nav-items";

const HeroNav: FC<HeroNavProps> = ({ heroNavItems: props }): JSX.Element => {
    return (
        <div className="flex gap-4 items-center flex-col sm:flex-row">

            {heroNavItems.map((item, index) => (
                <a 
                key={index}
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-fit sm:w-auto"
                href={item.url}>
                    <FontAwesomeIcon icon={item.icon} className="w-[16px] h-[16px] mr-[6px]" />
                    {item.name}
                </a>
            ))}

        </div>
    );
}

export default HeroNav;