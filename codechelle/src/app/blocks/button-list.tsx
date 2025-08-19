import { FC, JSX } from "react";
import Button from "../components/button";
import { ButtonProps } from "../types/button";

interface ButtonListProps {
    buttons: ButtonProps[]
}

const ButtonList: FC<ButtonListProps> = ({ buttons: props }): JSX.Element => {
    return (
        <div className="flex gap-4 items-center flex-col sm:flex-row flex-wrap">
            {props.map((button, index: number) => (
                <Button 
                    key={index}
                    label={button.label}
                    url={button.url}
                    inProgress={button.inProgress}
                    icon={button.icon}
                />
            ))}
        </div>
    );
}

export default ButtonList;