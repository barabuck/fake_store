import React, { useEffect, useState } from 'react';

import './switch.scss';

interface Props {
    className?: string;
    onChange?: (bool: boolean) => void;
    checked?: boolean;
}

const Switch = (props: Props) => {
    const { className, checked, onChange } = props;
    const [check, setCheck] = useState<boolean>(false);

    useEffect(() => {
        if (typeof checked === 'boolean') {
            setCheck(checked);
        }
    }, [checked]);

    const handlerClick = (bool: boolean) => {
        if (onChange) {
            onChange(bool);
        }
        setCheck(bool);
    };

    return (
        <div className={`app-switch ${className || ''}`}>
            <label>
                <input
                    type="checkbox"
                    checked={check}
                    onChange={(e) => {
                        handlerClick(e.target.checked);
                    }}
                />
                <span className="slider" />
            </label>
        </div>
    );
};

export default Switch;
