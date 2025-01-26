import React from 'react'

const Wrapper = ({children, className, style}: {children: React.ReactNode, className?: string, style?: React.CSSProperties}) => {
  return (
    <div className={`lg:px-20 md:px-8 overflow-x-hidden px-4 py-4 ${className}`} style={style} >
      {children}
    </div>
  )
}

export default Wrapper
