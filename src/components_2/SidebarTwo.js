import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";


function SidebarTwo() {
    const selectedTab = useSelector(state => state.selectedTab.selectedTab);
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <div className={selectedTab === "INBOX" ? "active" : ""} onClick={() => dispatch({ type: 'INBOX' })}>
                <FaInbox className="icon" />
                Inbox</div>
            <div className={selectedTab === "TODAY" ? "active" : ""} onClick={() => dispatch({ type: 'TODAY' })} >
                <FaRegCalendarAlt className="icon" />
                Today</div>
            <div className={selectedTab === "NEXT_7" ? "active" : ""} onClick={() => dispatch({ type: 'NEXT_7' })} >
                <FaRegCalendar className="icon" />
                Next 7 days</div>
        </div>
    )
}

export default SidebarTwo
