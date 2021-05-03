import React from 'react'
import {VhProvider} from 'handy-ui'

const VhDemo = (): JSX.Element => {
   return (
      <>
      <VhProvider/>
      <div style={{display:'flex'}}>
        <div style={{
          backgroundColor:'tomato',
          padding:'5px',
          height:'25vh'
        }}>25vh no<br/>VhProvider</div>
        <div style={{
          backgroundColor:'darkseagreen',
          padding:'5px',
          height:'calc(var(--vh, 1vh) * 25)'
        }}>25vh using<br/>VhProvider</div>
        </div>
      </>
    );
}

export default VhDemo;
