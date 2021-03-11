import { gql } from "@apollo/client";

interface PostInventory {
   id: string;
   title: string;
   user: {
      id: string;
      name: string;
   };
}

export interface PostData {
   posts: {
      data: PostInventory[];
   };
}

export interface PostVar {
   start: number;
   end: number;
   limit: number;
}

export const GetPosts = gql`
   query GetPosts($start: Int!, $end: Int!, $limit: Int!) {
      posts(options: { slice: { start: $start, end: $end, limit: $limit } }) {
         data {
            id
            title
            user {
               id
               name
            }
         }
      }
   }
`;
