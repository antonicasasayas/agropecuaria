import React from 'react'

const Section = ({breadcrumb, title }) => {
  return (
      <div className='text-black mt-24 '>
          <span className='text-gray-400  text-xl tracking-wide  font-roboto-bold'>{breadcrumb.number} · {breadcrumb.title}</span>
          <div className='mt-4'>
              <h2 className='text-4xl font-germalt-bold-it'>{title}</h2>
          </div>
    </div>
  )
}

export default Section