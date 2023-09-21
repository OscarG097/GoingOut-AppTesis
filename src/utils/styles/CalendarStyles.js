import { makeStyles } from "@mui/styles";

const CalendarStyle = makeStyles({
    main: {
        fontFamily: "sans-serif",
        fontSize: "1%",
        "& .react-date-picker__wrapper": {
            padding: "0 10px",
            borderColor: "#ccc",
            borderRadius: "4px"
        },
        "& .MuiCalendarPicker-root": {
            background: "aliceblue",
        }, "& .MuiDialogActions-root": {
            display: "none"
        }, "& .MuiDatePickerToolbar-title": {
            margin: 0
        }, "& .MuiDatePickerToolbar-root": {
            background: "aliceblue"
        }

    }
});

export { CalendarStyle }