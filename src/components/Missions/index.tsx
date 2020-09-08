import React from 'react'
import { GetMissionQuery } from '../../generated/graphql'
import { Grid } from '@material-ui/core'
interface Props {
    data: GetMissionQuery
}
const Missions: React.FC<Props> = ({ data }) => {
    return (
        <Grid >
            <h1><span>{data.mission?.mission_name}</span></h1>
            <p>{data.mission?.description?.slice(0, 500)} ...</p>
            <div>
                <a href={data.mission!.wikipedia!}> Wikipedia</a>
            </div>
            <div>
                <a href={data.mission!.website!}> Website</a>
            </div>
        </Grid>
    )
}

export default Missions;
