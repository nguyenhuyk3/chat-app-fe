import { Link } from "react-router-dom";
import React from 'react';

import { Logo } from "../../../../components/Svg";
import { LogoProps } from "../../../../components/Svg/interfaces";

interface HeaderLogoProps {
    logoProps: LogoProps
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ logoProps }) => {
    return (
        <header style={{
            height: '10vh'
        }}>
            <Link to='/home'>
                <Logo {...logoProps} />
            </Link>
        </header>
    );
}

export default HeaderLogo;