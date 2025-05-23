import s from './Calendar.module.css';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';

export default function Calendar({ onChange, value, error }) {
    const parsedValue = value ? dayjs(value, 'DD.MM.YY') : null;
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DesktopDatePicker
                    onChange={onChange}
                    value={parsedValue}
                    label="Booking a date"
                    format="DD.MM.YY"
                    slotProps={{
                        textField: {
                            error: !!error,
                            helperText: error,
                            // className: s.input,
                            InputLabelProps: {
                                className: s.noShrinkLabel,
                            },

                            InputProps: {
                                className: s.input,
                            },
                        },
                    }}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
