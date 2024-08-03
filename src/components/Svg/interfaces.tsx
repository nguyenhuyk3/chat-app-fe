import { PaddingProps, MarginProps, PositionProps } from "../../Interfaces";

export interface UserAvartar {
    width?: string,
    height?: string,
    className?: string,
}

export interface LogoProps extends PaddingProps, MarginProps, PositionProps {
    width?: string,
    height?: string,
}