import { useState } from 'react'
import CalendarView from '../../components/CalendarView'
import moment, { type Moment } from 'moment'
import { CALENDAR_INITIAL_EVENTS } from '../../utils/dummyData'
import { useDispatch } from 'react-redux'
import { openRightDrawer } from '../common/rightDrawerSlice'
import { RIGHT_DRAWER_TYPES } from '../../utils/globalConstantUtil'
import { showNotification } from '../common/headerSlice'
import type { CalendarEvent, CalendarTheme } from '../../types'



const INITIAL_EVENTS = CALENDAR_INITIAL_EVENTS

function Calendar(){

    const dispatch = useDispatch()

    const [events, setEvents] = useState<CalendarEvent[]>(INITIAL_EVENTS)

    // Add your own Add Event handler, like opening modal or random event addition
    // Format - {title :"", theme: "", startTime : "", endTime : ""}
    const addNewEvent = (date: Moment) => {
        const randomEvent = INITIAL_EVENTS[Math.floor(Math.random() * 10)]
        const newEventObj: CalendarEvent = {
            title : randomEvent.title, 
            theme : randomEvent.theme, 
            startTime : moment(date).startOf('day'), 
            endTime : moment(date).endOf('day')
        }
        setEvents([...events, newEventObj])
        dispatch(showNotification({message : "New Event Added!", status : 1}))
    }

    // Open all events of current day in sidebar 
    const openDayDetail = ({filteredEvents, title}: {filteredEvents: { title: string; theme: string }[]; title: string}) => {
        dispatch(openRightDrawer({header : title, bodyType : RIGHT_DRAWER_TYPES.CALENDAR_EVENTS, extraObject : {filteredEvents}}))
    }

    return(
        <>
           <CalendarView 
                calendarEvents={events}
                addNewEvent={addNewEvent}
                openDayDetail={openDayDetail}
           />
        </>
    )
}

export default Calendar
