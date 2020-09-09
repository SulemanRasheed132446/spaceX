import React from 'react'
import { GetLaunchesQuery } from '../../generated/graphql';
import { Grid } from '@material-ui/core';
import styles from './style.module.css';
const imgSrc = "https://live.staticflickr.com/65535/50291306346_136d3dce7b_o.jpg";
interface Props {
    data: GetLaunchesQuery
}
const Launches: React.FC<Props> = ({ data }) => {
    const { launchDiv, content, success } = styles;

    const filteredLaunches = data.launches?.filter(launch => launch?.launch_success !== null);
    return (
        <>
            {filteredLaunches?.map(launch => (
                <Grid item sm={6} md={4} lg={3} key={launch?.mission_name}>
                    <div className={launchDiv}>
                        <img src={
                            !!(launch!.links!.flickr_images![0]) ?
                                (launch!.links!.flickr_images![0]) :
                                imgSrc
                        } alt={launch!.mission_name!}></img>
                        <div className={content}>
                            <h2>{launch?.mission_name}</h2>
                            <p className={launch?.launch_success ? success : ''}><span>Launch Success : </span>{launch?.launch_success ? 'Success' : 'Failed'}</p>
                            <p><span>Launch Site:</span> {launch?.launch_site?.site_name}</p>
                            <p><span>Launch Year : </span>{launch?.launch_year}</p>
                            <p><span>Launch Time : </span>{new Date(launch!.launch_date_utc!).toLocaleDateString()}</p>
                            <a href={launch?.links?.wikipedia!}>Wikipedia</a>
                            <span>     </span>
                            <a href={launch?.links?.video_link!}>Video</a>
                            <span>     </span>
                        </div>
                    </div>
                </Grid>)
            )}
        </>
    )
}

export default Launches;
