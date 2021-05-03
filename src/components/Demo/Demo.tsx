import React, { useState } from 'react'
import AudioAutoplay from '../demos/AudioAutoplay';
import AudioCustom from '../demos/AudioCustom';
import AudioSimple from '../demos/AudioSimple';
import ComponentsList from '../demos/ComponentsList';
import JpgDemo from '../demos/JpgDemo';
import JpgSimple from '../demos/JpgSimple';
import CodeSimple from '../demos/CodeSimple';
import CodeSimple2 from '../demos/CodeSimple2';
import ResourceSimple from '../demos/ResourceSimple';
import ResourceArray from '../demos/ResourceArray';
import ResourceLoading from '../demos/ResourceLoading';
import ResourceSwitch from '../demos/ResourceSwitch';
import IfSimple from '../demos/IfSimple';
import VhDemo from '../demos/VhDemo';
import VhFullscreen from '../demos/VhFullscreen';
type DemoProps = {
    demo:string
    setOpenComponent:CallableFunction
    load:number
}
const Demo = ({demo,setOpenComponent,load}: DemoProps): JSX.Element => {
    const [loaded,setLoaded] = useState(0)

    if(loaded!=load)
        {
            setTimeout(()=>setLoaded(load),1000)
            return null
        }
    switch (demo) {
        
        case 'Components: Getting started':
            return (
                <ComponentsList setOpenComponent={setOpenComponent}/>
                );
        case 'Audio: Autoplay Music':
            return (
                <AudioAutoplay />
              );
        case 'Audio: Simple Player':
            return (
                <AudioSimple />
            );
        case 'Audio: Custom Audio Controle':
            return (
                <AudioCustom />
                );
        case 'Code: Automate syntax highlighting':
            return (
                <CodeSimple />
                );
        case 'Code: Print your components':
            return (
                <CodeSimple2 />
                );
        case 'If: Render conditionally':
            return (
                <IfSimple />
                );
        case 'Jpg: An image':
            return (
                <JpgSimple />
                );
        case 'Jpg: Place as many images as you want':
            return (
                <JpgDemo />
                );
        case 'Resource: Get data':
            return (
                <ResourceSimple />
                );
        case 'Resource: Data handling':
            return (
                <ResourceArray />
                );
        case 'Resource: Loading indicator':
            return (
                <ResourceLoading />
                );
        case 'Resource: Reload':
            return (
                <ResourceSwitch />
                );
        case 'VhProvider: Use it':
            return (
                <VhDemo />
                );
        
        case 'VhProvider: Full height':
            return (
                <VhFullscreen />
                );
        default:
            return (
              <>
              Work in progress! This example will be added soon.
              </>
            );
    }
}

export default Demo;
