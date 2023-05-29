import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers';
import PropTypes from 'prop-types';

const ServerDay = (props) => {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected =
        !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) > 0;

    return (
        <Badge
            key={props.day.toString()}
            overlap="circular"
            badgeContent={isSelected ? '🗓️' : undefined}
        >
            <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
        </Badge>
    );
}

export { ServerDay }

ServerDay.propTypes = {
    day: PropTypes.object.isRequired,
    highlightedDays: PropTypes.arrayOf(PropTypes.number),
    outsideCurrentMonth: PropTypes.bool.isRequired,
}