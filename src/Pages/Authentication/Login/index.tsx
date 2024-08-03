import AuthenticationButton from "../../../components/Authentication/AuthenticationButton";
import { TextInput, PasswordInput } from "../../../components/Authentication/AuthenticationInput";
import AuthenticationLink from "../../../components/Authentication/AuthenticationLink";
import HeaderLogo from "./HeaderLogo";
import Footer from "../../../components/Footer";
import { headerLogoProps } from "./props";
import LoginForm from "./Body/LoginForm";

function Login() {
    return (
        <div className='container'>
            {/* Header */}
            <HeaderLogo logoProps={headerLogoProps} />
            {/* Body */}
            <LoginForm />
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Login;