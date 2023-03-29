import React, { useState } from "react";
import { Card, CardContent, CardHeader, Divider, Select, MenuItem, InputLabel, FormControl, TextField, Button } from '@mui/material';

const PreStartComponent = (props) => {
    const dropdownVals = Array(10).fill(1);
    const [selectedRange, setSelectedRange] = useState(false);
    const storeVal = (name,val) => {
        sessionStorage.setItem(name, val);
    }
    return (
        <Card variant="outlined" style={{ width: '40%' }}>
            <CardHeader
                subheader='Please enter the below details to start..'
            />
            <Divider />
            <CardContent>
                <FormControl fullWidth>
                    <InputLabel id="no-of-questions-label">Number of questions</InputLabel>
                    <Select
                        labelId="no-of-questions-label"
                        value={selectedRange}
                        onChange={(e) => {setSelectedRange(e.target.value); storeVal('range',e.target.value)}}
                    >
                        {dropdownVals.map((v, ind) => (
                            <MenuItem value={ind}>{ind}</MenuItem>
                        ))}
                    </Select>
                    <TextField id="outlined-basic" label='name' variant="outlined" onChange={(e) => { storeVal('name',e.target.value) }} />
                    <Button variant="outlined" onClick={(e) => { props.startTest(selectedRange) }}>Start Test</Button>
                </FormControl>
            </CardContent>
        </Card>
    )
}
export default PreStartComponent