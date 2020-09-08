import React from 'react'
import { Grid } from '@material-ui/core';
import { GetRocketsQuery } from '../../generated/graphql';

interface Props {
    data: GetRocketsQuery
}

const RocketsList: React.FC<Props> = ({ data }) => {

    return (
        <>
            {data.rockets?.map(rocket => (
                <Grid item sm={5} md={4} lg={3} key={rocket?.rocket_id}>
                    <div className="rocket">
                        <img src={rocket?.flickr_images![0]!} alt={rocket!.rocket_id!}></img>
                        <div>
                            <h2>{rocket?.rocket_name}</h2>
                            <p>{rocket?.description?.slice(0, 130)}...</p>
                            <a href={rocket?.wikipedia!}>Wikipedia</a>
                        </div>
                    </div>
                </Grid>
            ))}
        </>
    )
}

export default RocketsList
