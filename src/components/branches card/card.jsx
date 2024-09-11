import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className=" bg-yellow-300 text-black w-96 h-52 rounded-lg px-8 py-7">
  <div className=" flex justify-center flex-col items-center gap-3">
    <h2 className="text-xl font-semibold">{props.title}</h2>
    <p className='text-md' ><span className='font-semibold'>Address:</span> {props.address}</p>
  </div>
  <div className="flex justify-end items-end">
      <button className="btn btn-sm">Navigate..</button>

    </div>
</div>
    </>
  )
}

export default Card