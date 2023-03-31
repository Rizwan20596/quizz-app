import React, { useState } from "react";
import { Card, CardContent, CardHeader, Divider, FormControl, Button, FormControlLabel, Checkbox, Alert, Snackbar } from '@mui/material';
import Timer from '../helper/timer';

const QNAComponent = (props) => {
    //Stores the selected answer index to compare it with the actual answer index to show a message and set score to +1
    const [selectedIndex, setSelectedIndex] = useState(100);

    //To show the alert that it was a right answer
    const [enableAlert, setEnableAlert] = useState(false);

    //When clicked on next need to reset the timer
    const [nextClicked,setNextClicked] = useState(false);

    //Gets called on click of next and checks if answer is right or not
    const verifyAnswer = () => {
        if (selectedIndex === props.question.answer_index) {
            setEnableAlert(true);
            setTimeout(() => {
                setEnableAlert(false)
            }, 3000);
            props.increaseScore();
        }
        setSelectedIndex(100);
        setNextClicked(true);
        props.nextQuestion();
        setTimeout(() => {
            setNextClicked(false);
        }, 50);
    }

    return (
        <>
            {!nextClicked && <Timer hint={!nextClicked && props.question.hint} nextQuestion={props.nextQuestion} answer={props.question.choices[props.question.answer_index]} />}
            {enableAlert &&
                <Snackbar open={enableAlert} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                    <Alert severity="success">Hurray! it was the right answer.</Alert>
                </Snackbar>
            }
            <Card variant="outlined" style={{ width: '80%' }}>
                <CardHeader subheader={props.question.question} />
                <Divider />
                <CardContent>
                    <FormControl fullWidth style={{ marginLeft: '20px' }}>
                        {props.question.choices.map((v, ind) => (
                            <FormControlLabel key={ind} control={<Checkbox checked={selectedIndex === ind ? true : false} onChange={() => { setSelectedIndex(ind) }} />} label={v} />
                        ))}
                        <Button variant="contained" onClick={() => { verifyAnswer() }} style={{ width: '90%' }}>{props.lastQuestion ? 'Finish' : 'Next'}</Button>
                    </FormControl>
                </CardContent>
            </Card>
        </>
    )
}

export default QNAComponent