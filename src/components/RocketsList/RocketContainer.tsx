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
        const dataStorage = JSON.parse(window.localStorage.getItem('rockets')!);
        return (
            <div className="container margin">
                <Grid container spacing={3} justify="space-evenly">
                    <RocketsList data={dataStorage as GetRocketsQuery} />
                </Grid>
            </div>
        )
    }
    window.localStorage.setItem('rockets', JSON.stringify(data));
    return (
        <div className="container margin">
            <Grid container spacing={3} justify="space-evenly">
                <RocketsList data={data!} />
            </Grid>
        </div>
    )
}

export default RocketsContainer;
