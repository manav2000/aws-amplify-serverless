import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Predictions from '@aws-amplify/predictions';

function PollySec() {

    const [text, setText] = useState('');

    function PollyTrigger(e) {
        e.preventDefault();
        Predictions.convert({
            textToSpeech: {
                source: {
                    text: text
                },
                voiceId: "Salli"
            }
        }).then(result => {
            var audio = new Audio();
            audio.src = result.speech.url;
            audio.play();
        })
    }

    return (
        <div style={{display:'flex', justifyContent:'center', marginTop:'100px'}}>
            <Paper style={{width: 'max-content'}}>
                <Typography variant="h5" gutterBottom color="primary" style={{fontWeight: '600'}}>
                    Try Polly
                </Typography>
                <form style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'25px' }}>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        onChange={e => setText(e.target.value)} 
                        placeholder="write here to use polly"
                        variant="outlined"
                        style={{width: '350px'}}
                    />
                    {/* <textarea /> */}
                    <Button type="submit" color="primary" variant="contained" 
                        onClick={e => PollyTrigger(e)}
                        style={{marginTop:'15px', width: '100%'}}
                        >
                        Use Polly
                    </Button>
                </form>
            </Paper>
        </div>
    )
}

export default PollySec
