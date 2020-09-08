import gql from 'graphql-tag';

export const GET_ROCKETS = gql`
    query getRockets{
    rockets(limit:4) {
      rocket_id
      rocket_name
      description
      wikipedia
      flickr_images
    }
  }`