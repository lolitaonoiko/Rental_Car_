// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import s from './Calendar.module.css';

// export default function Calendar() {
//     return (
//         <LocalizationProvider dateAdapter={AdapterDayjs} className={s.dd}>
//             <DemoContainer components={['DatePicker', 'DesktopDatePicker']}>
//                 <DemoItem label="">
//                     <DesktopDatePicker
//                         format="DD.MM.YY"
//                         label="Booking a date"
//                         slotProps={{
//                             layout: {
//                                 sx: {
//                                     color: '#1565c0',
//                                     borderRadius: '25px',
//                                     borderWidth: '0px',
//                                     border: 'none',
//                                 },
//                             },
//                             textField: {
//                                 InputProps: {
//                                     className: s.input,
//                                 },
//                             },
//                         }}
//                     />
//                 </DemoItem>
//             </DemoContainer>
//         </LocalizationProvider>
//     );
// }
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function Calendar() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DesktopDatePicker
                    label="Booking a date"
                    format="DD.MM.YY"
                    slotProps={{
                        textField: {
                            InputProps: {
                                className: s.input,
                            },
                            sx: {
                                color: '#1565c0',
                                borderRadius: '20px',
                                borderWidth: '0px',
                                borderColor: '#2196f3',
                                border: '0px solid',
                                backgroundColor: '#90caf9',
                            },
                        },
                    }}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
