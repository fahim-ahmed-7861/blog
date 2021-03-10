import { FETCH_POST } from "../actions/fetchPost";



export default (state=[],action)=>
{
   
    switch(action.type)
    {
        
        case FETCH_POST:

                return action.payload;

         
       default : return state;

    }
}

