import React, { useEffect, useState } from 'react';
import config from '../../config';
import { IFilter, ISelectOption } from '../../models';
import Input from '../layout/Input/Input';
import Select from '../layout/Select/Select';

import './filters.scss';

const optionsSort = config.sort;

interface Props {
    categories?: ISelectOption[];
    valueSearch?: string;
    onChangeSearch?: (text: string) => void;
    onChange?: (obj: IFilter) => void;
}

const Filters = (props: Props) => {
    const { categories, valueSearch, onChangeSearch, onChange } = props;
    const [sort, setSort] = useState<string>(optionsSort[0].value);
    const [category, setCategory] = useState<string>('');

    const changeFilter = (item: string) => {
        setSort(item);
    };

    const changeCategory = (item: string) => {
        setCategory(item);
    };

    useEffect(() => {
        if (onChange) {
            onChange({ category, sort });
        }
    }, [category, sort]);

    return (
        <div className="app-filters">
            <div className="filters-category">
                <div className="filters-category-text">Category:</div>
                <Select options={categories || []} value={category} onChange={changeCategory} />
            </div>
            <div className="filters-search">
                <Input value={valueSearch} onChange={onChangeSearch} />
            </div>
            <div className="filters-sort">
                <div className="filters-sort-text">Sort:</div>
                <Select options={optionsSort} value={sort} onChange={changeFilter} />
            </div>
        </div>
    );
};

export default Filters;
