
import { useEffect, useRef, useState } from 'react';
import { ServerDay } from './ServerDay';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar, DayCalendarSkeleton, LocalizationProvider } from '@mui/x-date-pickers/';
import dayjs from 'dayjs';
import 'dayjs/locale/es-mx'

function CalendarCard() {
    const requestAbortController = useRef(null)
    const [isLoading, setIsLoading] = useState(false)
    const [highlightedDays, setHighlightedDays] = useState([1, 5, 10, 23, 29])

    const initialValue = dayjs();

    //USE EFFECT PARA HACER GET DE LOS highlightedDays

    const fetch = (date, { signal }) => {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                // const daysInMonth = date.daysInMonth();
                // const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));

                // resolve({ daysToHighlight });
            }, 500);

            signal.onabort = () => {
                clearTimeout(timeout);
                reject(new DOMException('aborted', 'AbortError'));
            };
        });
    }

    const fetchHighlightedDays = (date) => {
        const controller = new AbortController();
        fetch(date, {
            signal: controller.signal,
        })
            .then(({ daysToHighlight }) => {
                setHighlightedDays(daysToHighlight);
                setIsLoading(false);
            })
            .catch((error) => {
                if (error.name !== 'AbortError') {
                    throw error;
                }
            });

        requestAbortController.current = controller;
    };

    useEffect(() => {
        fetchHighlightedDays(initialValue)
        return () => requestAbortController.current?.abort()
    })

    // const handleMonthChange = (date) => {
    //     if (requestAbortController.current) {

    //         requestAbortController.current.abort();
    //     }
    //     setIsLoading(true);
    //     setHighlightedDays([]);
    //     fetchHighlightedDays(date);
    // }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'es-mx'}>
            <DateCalendar
                defaultValue={initialValue}
                loading={isLoading}
                // onMonthChange={handleMonthChange}
                renderLoading={() => <DayCalendarSkeleton />}
                slots={{
                    day: ServerDay,
                }}
                slotProps={{
                    day: {
                        highlightedDays,
                    },
                }}
            />
        </LocalizationProvider>
    );
}

export { CalendarCard }