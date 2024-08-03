import { Link } from "react-router-dom";

export interface AuthenticationLinkProps {
    to: string,
    content: string
}

const AuthenticationLink: React.FC<AuthenticationLinkProps> = ({to, content}) => {
    return (
        <Link to={to}
            className="px-3 py-1 font-medium transition duration-300 rounded-full text-slate-600 hover:bg-green-200 hover:underline">
            {content}
        </Link>
    );
}

export default AuthenticationLink;