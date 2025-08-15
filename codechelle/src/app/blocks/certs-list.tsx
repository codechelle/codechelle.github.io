import { CertProps, certItems } from "../data/certs";
import { FC, JSX } from "react";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CertsList: FC<CertProps> = ({ certItems: props }): JSX.Element => {
    const completeStyle = 'rounded-full border border-solid border-black/[.08] dark:border-white/[.145] text-nowrap transition-colors flex items-center justify-center hover:bg-[#002e4d] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-fit sm:w-auto';

    const inProgressStyle = 'rounded-full bg-[#002e4d] border-transparent text-nowrap flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-fit sm:w-auto';

    return (
        <div className="flex gap-4 items-center flex-col sm:flex-row flex-wrap">
            {certItems.map((cert, index) => (
                <a 
                key={index}
                className={cert.inProgress ? inProgressStyle : completeStyle}
                href={cert.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={cert.icon ? cert.icon : faCertificate} className="w-[16px] h-[16px] mr-[6px]" />
                    {cert.certName} {cert.inProgress ? '(In Progress)' : ''}
                </a>
            ))}
        </div>
    );
}

export default CertsList;