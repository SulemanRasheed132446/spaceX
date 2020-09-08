import gql from 'graphql-tag';


export const GET_MISSIONS = gql`
query GetMission($id:String!){
    mission(id:$id) {
      mission_id
      mission_name
      description
      website
      wikipedia
    }
  }
`