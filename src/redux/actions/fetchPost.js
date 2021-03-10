import axios from "axios";
import jsonPlaceholder from "../../apis/jsonPlaceholder";

export const FETCH_POST='FETCH_POST';

export const fetchPost = (str) =>async dispatch=> {

    const url='https://jsonplaceholder.typicode.com/'+str;

   // const response =await axios(url);

    const response=await jsonPlaceholder('/'+str);

  


    //console.log(response);
   dispatch({
       type:FETCH_POST,
       payload:response.data
   })
};

