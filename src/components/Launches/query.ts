import gql from 'graphql-tag';

export const GET_LAUNCHES = gql`
query getLaunches($order:Order!, $limit:Int!) {
    launches(order:$order, limit:$limit, offset:0,sort: "launch_date_local") {
      launch_year
      launch_success
      mission_name
      launch_site{
        site_name
      }
      launch_date_utc
      links{
        video_link
        wikipedia
        flickr_images
      }
    }
   }
`;
