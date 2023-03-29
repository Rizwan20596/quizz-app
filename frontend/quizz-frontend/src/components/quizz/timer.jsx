import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
const Timer = (props) => {
    const [time, setTime] = useState(30);
    const [hint, setHint] = useState(false);
    const [skippedFlag,setSkippedFlag] = useState(false);
    useEffect(() => {
        if (time === 0) {
            props.nextQuestion();
            setHint(false);
            setTime(30);
            setSkippedFlag(props.answer);
            setTimeout(()=>{
                setSkippedFlag(false);
            },3000)
        }
        if (time === 10) {
            setHint(props.hint);
        }
    }, [time]);

    setTimeout(() => {
        if (time > 0) {
            setTime(time - 10);
        }
    }, 10000);

    return (
        <>
            <Snackbar open={time <= 20} autoHideDuration={30000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} sx={{ marginTop: '20px' }}>
                <Alert severity="warning">You have {time} secs left.</Alert>
            </Snackbar>
            {<Snackbar open={hint} autoHideDuration={200000} anchorOrigin={{ vertical: 'top', horizontal: 'left' }} sx={{ marginTop: '20px', maxWidth: '50%' }}>
                <Alert severity="info">How about a hint? {hint}</Alert>
            </Snackbar>
            }
             {<Snackbar open={skippedFlag} autoHideDuration={3000} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} sx={{ marginTop: '20px', maxWidth: '50%' }}>
                <Alert severity="error">Oops!! your question timed out! The correct answer was {props.answer}</Alert>
            </Snackbar>
            }
        </>
    )
}

export default Timer;