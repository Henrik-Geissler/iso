import React from 'react'
import {Resource,Text} from 'handy-ui'

const ResourceSimple = (): JSX.Element => {
    return (<Resource src='https://jsonplaceholder.typicode.com/users/1' render={data=><Text>{data.name}</Text>}/>);
}

export default ResourceSimple;
