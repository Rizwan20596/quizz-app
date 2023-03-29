import React from "react";
import { Card, CardContent, CardHeader, Typography, Divider, Button, } from '@mui/material';

const ResultsScreen = (props) => {
    return (
        <>
            <Card variant="outlined" style={{ width: '90%', height: '50vh' }}>
                <CardHeader subheader='Thank you for taking the quiz @Sample Quizz' title='Hurray!! You have completed the quiz successfully!' />
                <Divider />
                <CardContent>
                    <Typography variant="h4">
                        Congrats!! Your Score: {props.score} out of {window.sessionStorage.getItem('range')}
                    </Typography>
                </CardContent>
            </Card>
            <Button variant="outlined" onClick={() => { props.resetQuiz() }}>Click here to restart</Button>
        </>
    )
}

export default ResultsScreen;