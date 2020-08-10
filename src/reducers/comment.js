import { USER_COMMENT } from "../actions/actionTypes";

const comment = (state = [], action) => {
    // console.log(action.email,action.comment);
    switch (action.type) {
      case USER_COMMENT:
        return[...state,
            {email: action.email,
            comment: action.comment,
              
            } 
        ]
      default: 
        return state;
    }
    
  }

export default comment;