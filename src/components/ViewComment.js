import React from 'react';


function ViewComment ({ comment}) {
 let count=comment.length
    return(
  
    <ul>
       No. of comments: {count}
        {comment.map(item=>
<li> {item.email}commented{item.comment}

</li>

            
            )

        }
    </ul>
       
  
   );
  };
export default ViewComment
