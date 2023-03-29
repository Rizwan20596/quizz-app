import React from "react";
import { Card, CardContent, CardHeader, Typography, Divider, } from '@mui/material';

const ResultsScreen = (props) => {
return(
    <Card variant="outlined" style={{ width: '80%' }}>
        <CardHeader subheader='Thank you for taking the quiz @Sample Quizz' title='Hurray!! You have completed the quiz successfully!'/>
        <Divider />
        <CardContent>
            <Typography variant="h4">
                Your Score: {props.score} out of {window.sessionStorage.getItem('range')}
            </Typography>
        </CardContent>
    </Card>
)
}

export default ResultsScreen;