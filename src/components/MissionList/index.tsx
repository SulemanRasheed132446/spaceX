import React, { useState } from 'react'
import { missionsList } from '../../util/Mission'
import { Grid } from '@material-ui/core'
import MissionsContainer from '../Missions/MissionsContainer';
import styles from './style.module.css'
const MissionList = () => {
    const { missions, selected } = styles;
    const [missionId, setMissionId] = useState(missionsList[0].mission_id)
    return (
        <div className="container">
            <Grid container spacing={3} justify="space-evenly">
                <Grid item xs={3} >
                    <div className={missions}>
                        {missionsList.map(mission => (
                            <div
                                className={missionId === mission.mission_id ? selected : ''}
                                onClick={() => setMissionId(mission.mission_id)} key={mission.mission_id}>
                                {mission.mission_name}
                            </div>
                        ))}
                    </div>
                </Grid>
                <Grid item xs={9} >
                    <MissionsContainer mission_id={missionId} />
                </Grid>
            </Grid>
        </div>
    )
}

export default MissionList
