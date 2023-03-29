import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, Typography, Divider, FormControl, Button, FormControlLabel, Checkbox, Alert, Snackbar } from '@mui/material';
import Timer from './timer';
const QNAComponent = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(100);
    const [enableAlert, setEnableAlert] = useState(false);
    const verifyAnswer = () => {
        if (selectedIndex === props.question.answer_index) {
            setEnableAlert(true);
            setTimeout(() => {
                setEnableAlert(false)
            }, 3000);
            props.increaseScore();
        }
        setSelectedIndex(100);
        props.nextQuestion();
    }
   
    return (
        <>
            <Timer hint={props.question.hint} nextQuestion={props.nextQuestion} answer={props.question.choices[props.question.answer_index]}/>
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
                            <FormControlLabel control={<Checkbox checked={selectedIndex === ind ? true : false} onChange={() => { setSelectedIndex(ind) }} />} label={v} />
                        ))}
                        <Button variant="contained" onClick={() => { verifyAnswer() }} style={{width:'90%'}}>{props.lastQuestion ? 'Finish' : 'Next'}</Button>
                    </FormControl>
                </CardContent>
            </Card>
        </>
    )
}

export default QNAComponent