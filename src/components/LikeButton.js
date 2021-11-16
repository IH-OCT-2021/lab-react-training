import React from "react";
const LikeButton = () => {

let colorArr = ['purple','blue','green','yellow','orange','red', 'pink']
const [likes, setLikes] = React.useState(0)
let s = likes=== 1 ? '' : 's'
    
return(
        <button style={{width: '200px', height: '200px', backgroundColor: colorArr[likes%colorArr.length]}}
         onClick={()=> setLikes(likes+1)}>
         {likes} Like{s}
         </button>
    )
}

export default LikeButton