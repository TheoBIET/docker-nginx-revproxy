import React, { memo } from 'react'

const App = ({ message }) => {
  return <div className='m-2'>{message}</div>
}

export default memo(App)