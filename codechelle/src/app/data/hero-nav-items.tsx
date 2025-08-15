type HeroNavItemType = {
    name: string;
    icon: string;
    url: string;
}

interface HeroNavItemProps {
    heroNavItem: HeroNavItemType,
}

const heroNavItem = [
    {
        name: 'Certifications', 
        icon: 'faCertificate', 
        url: ''
    },
    {
        name: 'LinkedIn', 
        icon: 'faLinkedin', 
        url: 'https://linkedin.com/in/nichellehayes'
    },
    {
        name: 'Github', 
        icon: 'faGithub', 
        url: 'https://github.com/codechelle'
    },
]

export { heroNavItem };
export type { HeroNavItemProps, HeroNavItemType };