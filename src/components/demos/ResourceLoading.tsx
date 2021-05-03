import React, { useState } from 'react'
import {Resource} from 'handy-ui'
import { Button, CircularProgress } from '@material-ui/core';

const ResourceLoading = (): JSX.Element => {
    return (
        <>
            <Resource
                src='https://deelay.me/5000/https://jsonplaceholder.typicode.com/users/1'
                render={data => 'I\'m done! Restart to see the loading indicator'}
                loadingIndicator={<CircularProgress />}
            />
        </>
    );
}

export default ResourceLoading;
