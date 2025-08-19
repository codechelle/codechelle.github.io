import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ButtonProps } from "../types/button";

const heroNavItems: ButtonProps[] = [
    {
        label: 'LinkedIn', 
        icon: faLinkedin, 
        url: 'https://linkedin.com/in/nichellehayes'
    },
    {
        label: 'Github', 
        icon: faGithub, 
        url: 'https://github.com/codechelle'
    },
]

export { heroNavItems };
