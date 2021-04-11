import { Api, IPropsResp } from "../../../core/app/axios";

// const END_POINT = {
//    todo: "/todos",
// };

// interface IPropsFilter {
//    limit: number;
// }

export const setAuthorization = async () => {
   let response = {} as IPropsResp;
   try {
      Api.addHeader({
         Authorization: "KKK",
      });
      // response = await client.get(`${END_POINT.todo}/${limit}`);
   } catch (err) {
      console.log("err :>> ", err);
   }

   return response;
};
