import React, {useEffect} from 'react';
import './Sidebar.css';

const Sidebar = props => {
    const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.keyCode === 27 && props.isOpen) {
                props.toggleSidebar();
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => document.removeEventListener('keydown', handleEscape);
    }, [props.toggleSidebar]);
    return (
        <div className={sidebarClass}>
            <button onClick={props.toggleSidebar} className="sidebar-toggle">
                <span className="material-symbols-outlined">
                    menu
                </span>
            </button>
        </div>
    );
};

export default Sidebar;