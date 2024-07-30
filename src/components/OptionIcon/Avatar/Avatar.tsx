import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser"
export interface AvatarProps {
    size?: "lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x";
}

const Avatar: React.FC<AvatarProps> = ({ size = "2x" }) => {
    return (
        <div>
            <FontAwesomeIcon icon={faUser} size={size}/>
        </div>
    );
}

export default Avatar;