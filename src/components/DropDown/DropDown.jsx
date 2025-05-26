import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { lazy, useRef, useState } from 'react';

import s from './DropDown.module.css';

const FilterBarIcon = lazy(() => import('../FilterBarIcon/FilterBarIcon'));

export default function DropDown({ items, descr, text, value, onChange }) {
    const [open, setOpen] = useState(false);
    const selectRef = useRef(null);

    return (
        <>
            <FormControl sx={{ minWidth: 120 }}>
                <p className={s.selectDescr}>{descr}</p>
                <Select
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                border: '1px solid #f7f7f7',
                                borderRadius: '12px',
                                width: '204px',
                                height: '272px',
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: 1.25,
                                color: '#8d929a',
                                fontFamily: '"Manrope", sans-serif',
                                boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
                                backgroundColor: '#fff',
                            },
                        },
                    }}
                    renderValue={selected => {
                        if (!selected) return <em className={s.text}>{text}</em>;

                        return descr === 'Price/ 1 hour' ? (
                            <span className={s.selectedValue}>
                                To&nbsp;<span className={s.dollar}>${selected}</span>
                            </span>
                        ) : (
                            selected
                        );
                    }}
                    disableUnderline
                    variant="standard"
                    value={value}
                    onChange={onChange}
                    className={s.sel}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    inputRef={selectRef}
                >
                    <MenuItem value="">
                        <em className={s.text}>{text}</em>
                    </MenuItem>
                    {items.map(brand => (
                        <MenuItem value={brand}>{brand}</MenuItem>
                    ))}
                </Select>
                <FilterBarIcon open={open} />
            </FormControl>
        </>
    );
}
