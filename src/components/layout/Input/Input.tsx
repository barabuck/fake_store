import React from 'react';

import './input.scss';

interface Props {
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: (str: string) => void;
}

const Input = (props: Props) => {
    const { className, placeholder, value, onChange } = props;

    const change = (e: React.FormEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.currentTarget.value);
        }
    };

    return (
        <input
            type="text"
            className={`app-input ${className || ''}`}
            placeholder={placeholder || 'Enter text..'}
            value={value}
            onChange={change}
        />
    );
};

export default Input;
