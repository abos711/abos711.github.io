import React from 'react'
import Resume from './Resume'

const ResumeStyle = () => {
  const resumeStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'radial-gradient(circle, LightSkyBlue 50%, HotPink 90%)',
    color: 'White',
    width: '60vh'
  }
  return (
    <div style={resumeStyles}>
      <Resume />
    </div>
  )
}

export default ResumeStyle
