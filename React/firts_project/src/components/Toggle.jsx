import React, { useState } from 'react'

export default function Toggle({ render }) {
    const [on, setOn] = useState(false)
    const toggle = () => {
        setOn(!on)

    }
    return render(on, toggle)
}
