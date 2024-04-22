import React from 'react'
import PropTypes from 'prop-types'

function Button({name , onClick, className}) {
  return (
    <>
      <button className={`button bg-[#ff4d30] px-3 py-1 text-xl ${className}`}>
        {name}
      </button>
    </>
  )
}

export default Button
