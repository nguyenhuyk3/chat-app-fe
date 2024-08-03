import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from '../AuthenticationInput.module.scss';
import { AuthenticationInputProps } from '../interfaces';

const cx = classNames.bind(styles)

const AuthenticationPasswordInput: React.FC<AuthenticationInputProps> = ({
    label, type = 'password',
    value, onChangeFunction,
    id = 'unknown', name = 'unknown', }) => {
    const [typeState, setTypeState] = useState<string>(type)
    const visibility: string = typeState === 'password' ? 'Hiển thị' : 'Ẩn'
    const changeVisibility = () => {
        setTypeState(typeState === 'password' ? 'text' : 'password');
    }
    return (
        <div className={cx('input-wrapper', 'w-11/12')}>
            <input type={typeState} id={id} name={name}
                value={value} onChange={onChangeFunction}
                className={cx('input', 'w-full border-2 rounded-md outline-none focus:border-emerald-500 shadow-md')}
                placeholder='' />
            <label htmlFor={id} className={cx('floating-label')}>{label}</label>
            <span className='absolute px-2 py-1 text-sm font-semibold transition duration-300 rounded-full cursor-pointer hover:bg-green-200 right-3 text-emerald-800'
                style={{
                    top: '50%',
                    transform: 'translateY(-50%)'
                }}
                onClick={changeVisibility}>{visibility}</span>
        </div>
    )
}

export default AuthenticationPasswordInput