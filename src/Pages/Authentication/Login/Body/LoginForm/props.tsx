import { AuthenticationButtonProps } from "../../../../../components/Authentication/AuthenticationButton";
import { AuthenticationLinkProps } from "../../../../../components/Authentication/AuthenticationLink";

export const buttonProps: AuthenticationButtonProps = {
    content: 'Đăng nhập'
}

export const forgotPasswordProps: AuthenticationLinkProps = {
    to: '/forgot-password',
    content: 'Quên mật khẩu?'
} 

export const registerProps: AuthenticationLinkProps = {
    to: 'register',
    content: 'Đăng kí tài khoản'
}


