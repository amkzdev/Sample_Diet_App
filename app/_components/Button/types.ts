// import { IconType } from "@types";

import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { ILocalIconType } from "_icons/type";


export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    size?: 'xlarge' | 'large' | 'medium' | 'fit',
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'white' | 'orange' | 'text' | 'error' | 'disabled',
    fullWidth?: boolean,
    fillFlex?: boolean,
    leftIcon?: typeof ArrowDownCircleIcon | ILocalIconType,
    rightIcon?: typeof ArrowDownCircleIcon | ILocalIconType,
    iconSide?: 'right' | 'left',
    loading?: boolean,
}