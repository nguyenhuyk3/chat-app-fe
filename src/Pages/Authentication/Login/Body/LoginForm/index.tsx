import { useState } from "react"
import AuthenticationButton from "../../../../../components/Authentication/AuthenticationButton"
import { TextInput, PasswordInput, AuthenticationInputProps } from "../../../../../components/Authentication/AuthenticationInput"
import AuthenticationLink from "../../../../../components/Authentication/AuthenticationLink"
import { forgotPasswordProps, buttonProps, registerProps } from "./props"


const LoginForm: React.FC = () => {
    const [phone, setPhone] = useState('')
    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value)
    }
    const phoneInputProps: AuthenticationInputProps = {
        label: 'Số điện thoại',
        type: 'text',
        value: phone,
        onChangeFunction: handlePhoneChange
    }

    const [password, setPassword] = useState('')
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const passwordInputProps: AuthenticationInputProps = {
        label: 'Mật khẩu',
        type: 'password',
        value: password,
        onChangeFunction: handlePasswordChange
    }

    return (
        <div className='flex flex-col items-center justify-center' style={{
            height: '80vh'
        }}>
            <form className='w-1/4 rounded-lg shadow-xl' style={
                {
                    backgroundColor: '#fff'
                }
            }>

                <div className='flex flex-col items-center justify-center'>
                    <div className='w-11/12'>
                        <h1 className='mt-5 text-2xl font-semibold'>Đăng nhập</h1>
                        <div className='flex justify-center'>
                            <div className='w-full mt-3 mb-3 border-t border-gray-200'></div>
                        </div>
                    </div>
                    <TextInput {...phoneInputProps} />
                    <PasswordInput {...passwordInputProps} />
                    <div className='w-11/12 mb-4'>
                        {/* Forgot password link*/}
                        <AuthenticationLink {...forgotPasswordProps} />
                    </div>
                    <AuthenticationButton {...buttonProps} />
                    <div className='mb-4'></div>
                </div>
            </form>
            <div className='flex items-center mt-8'>
                <p className='mr-2'>Bạn chưa có tài khoản?</p>
                {/* Register link*/}
                <AuthenticationLink {...registerProps} />
            </div>
        </div>
    )
}

export default LoginForm