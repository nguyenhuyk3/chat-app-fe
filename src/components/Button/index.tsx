import React from 'react';
import classNames from 'classnames';

export interface ButtonProps {
    content: string,
    backgroundColor_T: string,
    color?: string,
    fontWeight?: string,
    fontSize?: string
    width: string,
    paddingTop?: string,
    paddingBottom?: string,
    paddingLeft?: string,
    paddingRight?: string,
    borderRadius?: string,
    hoverBackgroundColor_T?: string,
}

const Button: React.FC<ButtonProps> = ({ content,
    backgroundColor_T, color = "rgb(17 27 33)", fontWeight = "normal", fontSize = "10px",
    width,
    paddingTop = "5px", paddingBottom = "5px", paddingLeft = "5px", paddingRight = "5px",
    borderRadius = "10px", hoverBackgroundColor_T = ""
}) => {
    const buttonClass = classNames(backgroundColor_T, hoverBackgroundColor_T)

    return (
        <button className={buttonClass} style={
            {
                color: color,
                fontWeight: fontWeight,
                fontSize: fontSize,
                width: width,
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
                borderRadius: borderRadius,
            }
        }>
            {content}
        </button>
    )
}

export default Button;