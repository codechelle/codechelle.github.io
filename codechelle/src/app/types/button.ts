import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ButtonProps {
    key?: string | number;
    label: string;
    url: string;
    inProgress?: boolean;
    icon?: IconDefinition;
}

export type { ButtonProps };