import React, { useState } from "react";
import { Card, CardContent, CardHeader, Typography, Divider, FormControl, Button, FormControlLabel, Checkbox, Alert, Snackbar } from '@mui/material';

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

return(
    <>
        {enableAlert &&
            <Snackbar open={enableAlert} autoHideDuration={6000} anchorOrigin={{vertical:'bottom', horizontal:'right'}}>
                <Alert severity="success">Congrats! it was the right answer.</Alert>
            </Snackbar>}
        <Card variant="outlined" style={{ width: '80%' }}>
            <CardHeader subheader={props.question.question} />
            <Divider />
            <CardContent>
                <FormControl fullWidth style={{ marginLeft: '20px' }}>
                    {props.question.choices.map((v, ind) => (
                        <FormControlLabel control={<Checkbox checked={selectedIndex === ind ? true : false} onChange={() => { setSelectedIndex(ind) }} />} label={v} />
                    ))}
                    <Button variant="contained" onClick={() => { verifyAnswer() }}>{props.lastQuestion ? 'Finish' : 'Next'}</Button>
                </FormControl>
            </CardContent>
        </Card>
    </>
)
}

export default QNAComponent