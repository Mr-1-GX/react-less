import { useState } from "react"

import './collapsible.css'

export const Collapsible = ({ className, children, closedTitle, opendTitle, isOpened = true }) => {
    const [opend, setOpend] = useState(isOpened)
    return (
        <div
            className={`box shadow p-3 my-3 ${className}`}
        >
            <h2
                className="text-muted fs-2"
                style={{
                    cursor: 'pointer'
                }}
                onClick={() => setOpend(!opend)}
            >
                {opend ? opendTitle : closedTitle}
            </h2>
            <div
                className={`colap-style ${opend ? 'opend' : ''}`}
            >
                {opend ? children : null}
            </div>
        </div>
    )
}