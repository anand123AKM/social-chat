import React from 'react'

const Msg = ({onclick}) => {
  return (
    <>
    <div className='msg12' >
     <center className='msg'> <h1>There is no Post !!</h1>
      <button
      onClick={onclick}
      type="button" className="btn btn-primary get11">See others Posts</button>
     </center>
    </div>
    </>
  )
}

export default Msg
