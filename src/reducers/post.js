import { USER_POST } from "../actions/actionTypes";

const post = (state = [], action) => {
    // console.log(action.email,action.post,action.caption);
    switch (action.type) {
      case USER_POST:
        return[...state,
            {email: action.email,
            post:action.post,
            caption:action.caption
              
            } 
        ]
      default: 
        return state;
    }
    
  }

export default post;