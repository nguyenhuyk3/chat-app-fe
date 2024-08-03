import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';


export interface AuthenticationButtonProps {
    content?: string,
}

const AuthenticationButton: React.FC<AuthenticationButtonProps> = ({
    content
}) => {
    return (
        <button type='submit'
            className='w-11/12 p-3 text-white transition-colors duration-300 rounded-full bg-emerald-600 hover:bg-emerald-700'>
            {content}
        </button >
    );
}


export default AuthenticationButton;