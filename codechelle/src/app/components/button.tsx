import { FC, JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonProps } from "../types/button";

const Button: FC<ButtonProps> = ({ label, url, inProgress, icon }): JSX.Element => {

    const buttonClass = 'rounded-full border border-solid border-black/[.08] dark:border-white/[.145] text-nowrap transition-colors flex items-center justify-center hover:bg-[#002e4d] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-fit sm:w-auto'

    const inProgressButtonClass = 'rounded-full bg-[#002e4d] border-transparent text-nowrap flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-fit sm:w-auto';

    return (
            <a 
            className={inProgress ? inProgressButtonClass : buttonClass}
            href={url} target="_blank" rel="noopener noreferrer">
                {icon && <FontAwesomeIcon icon={icon} className="w-[16px] h-[16px] mr-[6px]" />}
                {label} {inProgress && '(In Progress)'}
            </a>
    );
}

export default Button;