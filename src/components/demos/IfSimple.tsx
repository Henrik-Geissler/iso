import React from 'react'
import {If, Text} from 'handy-ui'
import { Badge, Card } from '@material-ui/core'

const IfSimple = (): JSX.Element => {
    const user = [
      {
        name: 'Prof Albert',
      },
      {
        name: 'Dr Bernhard',
        website: 'doc-bernhard.com',
      },
      {
        name: 'Mr Corens',
        website: 'corens.com',
      },
    ]
    return (
      <>
        {user.map(({name, website}) =>
          <Card variant='outlined' style={{margin:'15px',padding:'15px'}}>
            <Text>{name}</Text>
            <If is={website}>
              <br/>
              <a href={website}>{website}</a>
            </If>
          </Card>
        )}
      </>
    )
}

export default IfSimple;
