import React from 'react'
import Resume from './Resume'

const ResumeStyle = () => {
  const resumeStyles = {
    display: 'flex',
    text: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'White',
    color: 'gray',
    width: 'auto',
    height: 'auto'
  }
  return (
    <div style={resumeStyles}>
      <Resume />
    </div>
  )
}

export default ResumeStyle
