import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Avatar, { AvatarProps } from "../../../OptionIcon/Avatar/Avatar";

function Header() {
    const avatarProps: AvatarProps = {
        size: "2x"
    }

    return (
        <header>
            <Avatar {...avatarProps}/>
        </header>
    );
}

export default Header;