import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useDispatch } from "react-redux";

import { GetPosts, PostVar, PostData } from "services/gql/todo";
import {
   pending_status,
   failed_status,
   success_status,
} from "../../store/app/";

const TodoGql: React.FC = () => {
   const dispatch = useDispatch();

   const [queryPost, { loading, error, data }] = useLazyQuery<
      PostData,
      PostVar
   >(GetPosts);

   const fetchGetExChange = () => {
      queryPost({ variables: { start: 0, end: 5, limit: 5 } });
      // queryPost({ variables: { options: {} as any } });
   };

   useEffect(() => {
      if (error) {
         //  dispatch(setLoading(false));
         dispatch(failed_status());
      }
      if (loading) {
         dispatch(pending_status());
         //  dispatch(setLoading(true));
      } else {
         dispatch(success_status());
         //  dispatch(setLoading(false));
      }
      // eslint-disable-next-line
   }, [loading, error]);

   return (
      <section className="section has-text-centered">
         <button
            data-test="btn-fetch-gql-exchange"
            className="button is-primary"
            onClick={fetchGetExChange}
         >
            Use LazyQuery !
         </button>

         <div className="container" style={{ textAlign: "left" }}>
            {data?.posts?.data.map(({ id, title, user }) => (
               <div key={id}>
                  <p>{title}</p>
                  <p>
                     {user.id} {user.name}
                  </p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default TodoGql;
