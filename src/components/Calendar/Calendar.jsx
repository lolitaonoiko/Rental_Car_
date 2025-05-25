import dayjs from 'dayjs';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import s from './Calendar.module.css';

export default function Calendar({ onChange, value, error }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DesktopDatePicker
                    minDate={dayjs()}
                    onChange={onChange}
                    value={value ? dayjs(value) : null}
                    label="Booking a date"
                    format="DD-MM-YYYY"
                    slotProps={{
                        textField: {
                            error: !!error,
                            helperText: error,
                            FormHelperTextProps: {
                                className: s.errorText,
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
