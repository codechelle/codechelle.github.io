import { faFreeCodeCamp, faHackerrank } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type CertItem = {
    org: string;
    certName: string;
    url: string;
    inProgress?: boolean;
    icon?: IconDefinition
}

interface CertProps {
    certItems: CertItem[];
}

const certItems: CertItem[]  = [
    {
        org: 'FreeCodeCamp', 
        certName: 'Responsive Web Design', 
        url: 'https://www.freecodecamp.org/certification/codechelle/responsive-web-design',
        icon: faFreeCodeCamp,
    },
    {
        org: 'HackerRank', 
        certName: 'CSS Certificate', 
        url: 'https://www.hackerrank.com/certificates/a3d4c4479415',
        icon: faHackerrank
    },
    {
        org: 'CodeSignal', 
        certName: 'General Programming & JavaScript', 
        url: 'https://codesignal.com/learn/certificates/cmdl7859h0008l404feuw9oad/courses/59',
    },
    {
        org: 'CodeSignal', 
        certName: 'Full Stack Engineering with JavaScript', 
        url: "#",
        inProgress: true,
    },
]

export { certItems };
export type { CertProps };

