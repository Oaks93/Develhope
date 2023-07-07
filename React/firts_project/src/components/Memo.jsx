import React, { useMemo, useEffect, useState } from "react"

export default function Memo() {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    const themeStyles ={
        
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
        
    }
    useEffect(() => {
        console.log("Theme Changed");
    }, [themeStyles]);
    return (
        <>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((prevDark) => !prevDark)}>
                Change Time
            </button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}

function slowFunction(num) {
    console.log("Calling slow function......");
    // eslint-disable-next-line no-empty
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2;
}
// Carlos