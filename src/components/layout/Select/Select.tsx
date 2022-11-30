import React, { ReactNode } from 'react';
import { ISelectOption } from '../../../models';

import './select.scss';

interface Props {
    className?: string;
    value?: string;
    options?: ISelectOption[];
    onChange?: (option: string) => void;
}

const Select = (props: Props) => {
    const { className, value, options, onChange } = props;

    const renderOptions = (): ReactNode[] => {
        const optionsNode: ReactNode[] = [];
        if (options) {
            options.forEach((item) => {
                optionsNode.push(
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                );
            });
        }
        return optionsNode;
    };

    const change = (e: React.FormEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.currentTarget.value);
        }
    };

    return (
        <select className={`app-select ${className || ''}`} value={value} onChange={change}>
            {renderOptions()}
        </select>
    );
};

export default Select;
