import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type HeroNavItem = {
    name: string;
    icon: IconDefinition;
    url: string;
}

interface HeroNavProps {
    heroNavItems: HeroNavItem[];
}

const heroNavItems: HeroNavItem[] = [
    // {
    //     name: 'Certifications', 
    //     icon: 'faCertificate', 
    //     url: ''
    // },
    {
        name: 'LinkedIn', 
        icon: faLinkedin, 
        url: 'https://linkedin.com/in/nichellehayes'
    },
    {
        name: 'Github', 
        icon: faGithub, 
        url: 'https://github.com/codechelle'
    },
]

export { heroNavItems };
export type { HeroNavProps };