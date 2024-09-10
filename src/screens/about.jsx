import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
<>
<h1 className='text-center text-2xl'>about</h1>
<div className="flex justify-center ">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="">Person 1</Link></li>
      <li><Link to="person2">Person 2</Link></li>
      <li><Link to="person3">Person 3</Link></li>
    </ul>
  </div>

</>
)
}

export default About

