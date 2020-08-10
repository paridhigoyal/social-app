import {USER_POST, USER_COMMENT} from './actionTypes';
export const userPost = (email,caption,post) => ({
    type: USER_POST,
    email: email,
    caption:caption,
    post:post
  });
  
  export const userComment = (email,comment) => ({
    type: USER_COMMENT,
    email: email,
    comment: comment
  });

//   export const likePost=(count) =>({
  
//             type: INCREMENT,
//             count:count

   
//   })