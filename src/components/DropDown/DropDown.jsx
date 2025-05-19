import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import s from './DropDown.module.css';

const FilterBarIcon = React.lazy(() => import('../FilterBarIcon/FilterBarIcon'));

export default function DropDown({ items, text }) {
    const [item, setItem] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const selectRef = React.useRef(null);

    const handleChange = event => {
        setItem(event.target.value);
    };

    return (
        <>
            <FormControl sx={{ minWidth: 120 }}>
                <p className={s.selectDescr}>Car brand</p>
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
                    disableUnderline
                    variant="standard"
                    value={item}
                    onChange={handleChange}
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

//IconComponent={() => <FilterBarIcon open={open} onClick={handleOnClickIcon} />}
