import React from 'react'
import { useGetRocketsQuery } from '../../generated/graphql'
import { Grid } from '@material-ui/core';
import RocketsList from '.';

const RocketsContainer = () => {
    const { data, loading, error } = useGetRocketsQuery();
    if (loading) {
        return <p>Loading</p>
    }
    if (error) {
        return <p>Error</p>
    }
    return (
        <div className="container margin">
            <Grid container spacing={3} justify="space-evenly">
                <RocketsList data={data!} />
            </Grid>
        </div>
    )
}

export default RocketsContainer;
