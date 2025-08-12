import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeroNav() {
    return (
        <div className="flex gap-4 items-center flex-col sm:flex-row">
            {/* <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-fit sm:w-auto"
            href="">
                <FontAwesomeIcon icon={faCertificate} className="w-[16px] h-[16px] mr-[6px]" />
                Certifications
            </a> */}
            <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-fit sm:w-auto"
            href="https://linkedin.com/in/nichellehayes">
                <FontAwesomeIcon icon={faLinkedin} className="w-[16px] h-[16px] mr-[6px]" />
                LinkedIn
            </a>
            <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-fit sm:w-auto"
            href="https://github.com/codechelle">
                <FontAwesomeIcon icon={faGithub} className="w-[16px] h-[16px] mr-[6px]" />
                Github
            </a>
        </div>
    );
}