import React, { useState } from 'react'

const ArrayUseState = () => {
    const bioData =[
        {
            id:0,
            name:"mudassir",
            age:25
        },
        {
            id:1,
            name:"mudassir Mehdi",
            age:25
        },
        {
            id:3,
            name:"mudassir mehdi",
            age:25
        }
    ]

    const [myArray, SetmyArray]=useState(bioData)

    const clearArray=()=>{
        SetmyArray([]);
    }
  return (
    <>
      {
    myArray.map((curElm)=>{
        return(
        <div key={curElm.id}>
        <p>ID:{curElm.id}</p>
        <p>Name:{curElm.name}</p>
        <p>Name:{curElm.age}</p>
</div>)
    })
      }
      <button onClick={clearArray}>Clear</button>
   </>
  )
}

export default ArrayUseState;
// import React from 'react';

// const ShortCircuitExample = () => {
//   const isLoggedIn = true;
//   const username = 'John Doe';

//   return (
//     <div>
//       {isLoggedIn && <p>Welcome, {username}!</p>}
      
//       {isLoggedIn || <p>Please log in to continue.</p>}
      
//       {!isLoggedIn && <p>Please log in to continue.</p>}
      
//       {isLoggedIn && (
//         <button onClick={() => console.log('Logout')}>Logout</button>
//       )}
//     </div>
//   );
// };

// export default ShortCircuitExample;
