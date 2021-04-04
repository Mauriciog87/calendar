import React from 'react';
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [{
    title: 'Birthday of my commit',
    start: moment().toDate(),
    end: moment().add(2, 'hour').toDate(),
    bgcolor: '#FAFAFA',
    notes: 'Trying to be better'
}];

export const CalendarScreen = () => {
    const eventStyleGetter = (event, start, end, isSelected) => {
        console.log(event, start, end, isSelected);
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    };

    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                eventPropGetter={eventStyleGetter}
            />
        </div>
    );
}
