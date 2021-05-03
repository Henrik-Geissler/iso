import React from 'react'
import {Resource} from 'handy-ui'

const ResourceArray = (): JSX.Element => {
    return (
        <ol style={{margin: 0,padding: 0,paddingLeft:'20px'}}>
            <Resource src='https://jsonplaceholder.typicode.com/users'
    render={data => 
            data.map(eachUser => 
                <li>
                    {eachUser.name}
                    <b> {eachUser.company.name}</b>
                </li>
            )
    }
    />
    </ol>);
}

export default ResourceArray;
