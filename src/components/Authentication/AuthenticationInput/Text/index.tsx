import React from 'react';
import classNames from 'classnames/bind';

import styles from '../AuthenticationInput.module.scss';
import { AuthenticationInputProps } from '../interfaces';

const cx = classNames.bind(styles)

const AuthenticationTextInput: React.FC<AuthenticationInputProps> = ({
    label, type = 'text',
    value, onChangeFunction,
    id = 'unknown', name = 'unknown',
}) => {
    console.log(value)
    return (
        <div className={cx('input-wrapper', 'w-11/12')}>
            <input type={type} id={id} name={name} 
            value={value} onChange={onChangeFunction}
                className={cx('input', 'w-full border-2 rounded-md outline-none focus:border-emerald-500 shadow-md')}
                placeholder='' />
            <label htmlFor={id} className={cx('floating-label')}>{label}</label>
        </div>
    )
}

export default AuthenticationTextInput;