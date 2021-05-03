import React from 'react'
import {Audio} from 'handy-ui'
const AudioAutoplay = (): JSX.Element => {
    
    return (
        <>
            <Audio src='files/audio/exampleMusic' play/>
            {'Nothing to see, just listen 🎶'}
        </>
    );
}

export default AudioAutoplay;
