import { faFreeCodeCamp, faHackerrank } from "@fortawesome/free-brands-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { ButtonProps } from "../types/button";

const certItems: ButtonProps[]  = [
    {
        label: 'Responsive Web Design', 
        url: 'https://www.freecodecamp.org/certification/codechelle/responsive-web-design',
        icon: faFreeCodeCamp,
    },
    {
        label: 'CSS Certificate', 
        url: 'https://www.hackerrank.com/certificates/a3d4c4479415',
        icon: faHackerrank
    },
    {
        label: 'General Programming & JavaScript', 
        url: 'https://codesignal.com/learn/certificates/cmdl7859h0008l404feuw9oad/courses/59',
        icon: faCertificate
    },
    {
        label: 'Full Stack Engineering with JavaScript', 
        url: "#",
        inProgress: true,
        icon: faCertificate
    },
]

export { certItems };

