import React from 'react'



const Status = ({isLoggedIn}) =>{
    return(
        <div>
            {isLoggedIn ?(
                <h2>Logged In</h2>
            ):(
                <h2>Logged out </h2>
            )}
        </div>
    )
}
const Statement = () => {
  return (
    <div>
      <Status isLoggedIn={true} />
    </div>
  )
}

export default Statement
