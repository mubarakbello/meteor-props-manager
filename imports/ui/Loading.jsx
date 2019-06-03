import React from 'react'

const Loading = (props) => {
  return (
    <div className="custom-loading text-center">
      <div>
        <p>Please wait. {props.message || 'Just getting this page ready'}...</p>
      </div>
    </div>
  )
}

export default Loading