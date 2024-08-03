import { IdentifyProps } from '../../../Interfaces';

export interface AuthenticationInputProps extends IdentifyProps {
    label: string,
    type: 'text' | 'password',
    value: string,
    onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void
}