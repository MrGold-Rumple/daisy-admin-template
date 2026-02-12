import { CALENDAR_EVENT_STYLE } from "../../components/CalendarView/util"
import type { CalendarEvent } from '../../types'

const THEME_BG = CALENDAR_EVENT_STYLE

interface CalendarEventsBodyRightDrawerProps {
    filteredEvents: { title: string; theme: string }[]
    closeRightDrawer?: () => void
}

function CalendarEventsBodyRightDrawer({filteredEvents}: CalendarEventsBodyRightDrawerProps){
    return(
        <>
             {
                filteredEvents.map((e, k) => {
                    return <div key={k} className={`grid mt-3 card  rounded-box p-3 ${THEME_BG[e.theme as keyof typeof THEME_BG] || ""}`}>
                            {e.title}
                        </div> 
                })
            }
        </>
    )
}

export default CalendarEventsBodyRightDrawer
