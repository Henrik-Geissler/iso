import React from 'react'
import {Audio} from 'handy-ui'
import Components from '../Components/Components'
import { List, ListItem,ListItemText } from '@material-ui/core';
type Props = {
    setOpenComponent:CallableFunction
}
const ComponentsList = ({setOpenComponent}:Props): JSX.Element => {
    
    return (
        <>
        <List>
          {Components.map(({name}, index) => (
            <ListItem button key={name} onClick={() => {setOpenComponent(index)}}>
              <ListItemText primary={name}/>
            </ListItem>
          ))}
        </List>
        </>
    );
}

export default ComponentsList;
