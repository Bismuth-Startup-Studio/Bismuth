import React from 'react'

function Button({children , red, type, styles}) {
  return (
    <button type={type} className={`block ${red?"text-white":"text-secondary-red"} ${red?"bg-primary-red":"bg-white"} py-3 px-[20px] rounded-full m-auto mt-[30px] text-[24px] font-[700] ${styles}`}>{children}</button>
  )
}

export default Button