import { useState, useEffect } from 'react';
function timer() {

    const [seconds, setSeconds] = useState(0);
    const [isrunning, setIsrunning] = useState(false);
    useEffect(() => {
        let interval = null;
        if (isrunning) {
            interval = setInterval(() => {
                setSeconds(seconds + 1);
            }, 1000);
        }
        else if (!isrunning && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isrunning, seconds]
    )
    return (
        <div>
            <h1>this is a timer</h1>
            <p>seconds:{seconds}</p>
            <button onClick={() => setIsrunning(true)}>start</button>
            <button onClick={() => setIsrunning(false)}>stop</button>
            <button onClick={() => { setSeconds(0) }}>reset</button>
        </div>
    )
}
export default timer;