import React, { useState } from 'react'
import { useGetLaunchesQuery, Order, GetLaunchesQuery } from '../../generated/graphql'
import { Grid } from '@material-ui/core';
import Launches from '.';
const LaunchesContainer = () => {
    const [launches, setlaunches] = useState(24)
    const { data, loading, refetch, error } = useGetLaunchesQuery({
        variables: { limit: 24, order: Order.Desc }
    });
    if (loading) {
        return (<p>Loading</p>)
    }
    if (error) {
        const dataStorage = JSON.parse(window.localStorage.getItem('launches')!);
        return (<div className="container margin">
            <h1><span>Launches</span></h1>
            <Grid container spacing={4} justify="space-evenly" alignContent="center">
                <Launches data={dataStorage as GetLaunchesQuery} />
            </Grid>
            <div className="launchBtn">
                <button
                    onClick={() => {
                        refetch({ limit: launches + 2, order: Order.Desc });
                        setlaunches(launches + 2);
                    }}
                >More</button>
            </div>
        </div>
        )
    }
    window.localStorage.setItem('launches', JSON.stringify(data));
    return (
        <div className="container margin">
            <h1><span>Launches</span></h1>
            <Grid container spacing={4} justify="space-evenly" alignContent="center">
                <Launches data={data!} />
            </Grid>
            <div className="launchBtn">
                <button
                    onClick={() => {
                        refetch({ limit: launches + 2, order: Order.Desc });
                        setlaunches(launches + 2);
                    }}
                >More</button>
            </div>
        </div>
    )
}

export default LaunchesContainer
