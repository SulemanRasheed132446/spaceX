import React from 'react'
import { useGetMissionQuery } from '../../generated/graphql'
import Missions from '.';
interface Props {
    mission_id: string
}

const MissionsContainer: React.FC<Props> = ({ mission_id }) => {
    const { loading, error, data } = useGetMissionQuery({
        variables: {
            id: mission_id
        }
    })
    if (loading)
        return <p>Loading</p>
    if (error)
        return <p>Error</p>
    if (!data) {
        return <p>Error</p>
    }
    window.localStorage.setItem('rockets', JSON.stringify(data))
    return (

        <Missions data={data} />

    )
}

export default MissionsContainer;