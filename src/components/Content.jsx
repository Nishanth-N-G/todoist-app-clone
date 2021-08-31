import React from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import Tasks from './Tasks.jsx';

const Content = () => {
    const [selectedTab, setSelectedTab] = useState("INBOX")
    return (
        <section className="content">
            <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <Tasks selectedTab={selectedTab} />
        </section>
    )
}


export default Content;
