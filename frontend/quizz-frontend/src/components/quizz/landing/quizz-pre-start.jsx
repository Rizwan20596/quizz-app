import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, Divider, Select, MenuItem, InputLabel, FormControl, TextField, Button, CircularProgress } from '@mui/material';

const PreStartComponent = (props) => {
    //Random 11 values of array to show in number of questions dropdown
    const dropdownVals = Array(11).fill(1);

    //Active dropdown value
    const [selectedRange, setSelectedRange] = useState(5);

    //If there is no value selected/changed in dropdown set the default value(5) to session to show in results page
    useEffect(()=>{
        sessionStorage.setItem('range', 5);
    },[])

    //If there is a value selected/changed in dropdown set the default value to session to show in results page
    const storeVal = (name, val) => {
        sessionStorage.setItem(name, val);
    }
    return (
        <Card variant="outlined" style={{ width: '50%' }}>
            <CardHeader
                subheader='Please enter the below details to start..'
            />
            <Divider />
            <CardContent>
                <FormControl fullWidth>
                    <InputLabel id="no-of-questions-label" style={{ marginTop: '20px' }}>Number of questions</InputLabel>
                    <Select
                        labelId="no-of-questions-label"
                        value={selectedRange}
                        onChange={(e) => { setSelectedRange(e.target.value); storeVal('range', e.target.value) }}
                        style={{ margin: '10px' }}
                    >
                        {dropdownVals.map((v, ind) => (
                            <MenuItem key={ind} value={ind+5}>{ind+5}</MenuItem>
                        ))}
                    </Select>
                    <TextField id="outlined-basic" label='name' variant="outlined" onChange={(e) => { storeVal('name', e.target.value) }} style={{ margin: '10px' }} />
                    <Button variant="outlined" onClick={(e) => { props.startTest(selectedRange) }} disabled={!selectedRange} style={{ margin: '10px' }}>{props.loader && <CircularProgress color="inherit" size={20} sx={{marginLeft:'5px', marginRight:'5px'}}/>} Start Test</Button>
                </FormControl>
            </CardContent>
        </Card>
    )
}
export default PreStartComponent