import React, { useState } from 'react'
import {VhProvider, Text} from 'handy-ui'
import { Fade, Button } from '@material-ui/core';

const VhFullscreen = (): JSX.Element => {
  const [show, setShow] = useState(false)
  return <>
          <Button onClick={() => setShow(!show)}>
              {show?'Hide':'Show'}
          </Button>
      <VhProvider/>
      <Fade in={show}>
        <div style={{
          position:'fixed',
          top: 0,
          zIndex: 9999,
          right:0,
          display:'flex',
          pointerEvents:'none',
        }}>
        <div style={{
          backgroundColor:'tomato',
          height:'100vh',
          marginRight:'10px',
          border:'dotted black 4px',
          pointerEvents:'none',
          width:'30px',
        }}><div className='handy-verticalText' ><p style={{margin:'auto',width:'300px',
        marginLeft: '-65vh'}}>100vh no VhProvider</p></div></div>
        <div style={{
          backgroundColor:'darkseagreen',
          height:'calc(var(--vh, 1vh) * 100)',
          border:'dotted black 4px',
          marginRight:'10px',
          pointerEvents:'none',
          width:'30px',
        }}><div className='handy-verticalText' ><p style={{margin:'auto',width:'300px',
        marginLeft: '-65vh'}}>100vh using VhProvider</p></div></div>
        </div>
      </Fade>
      </>
    
}

export default VhFullscreen;
