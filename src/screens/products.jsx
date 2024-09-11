import React, { useEffect, useState } from 'react'
// import Card from '../components/product card/card'
import axios from 'axios'

const Products = () => {
const [data, setData]=useState([])
  useEffect(()=>{
   async function getData() {
     await axios('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
      console.log(res.data);
      setData([...res.data])
    })
    .catch(err => console.log(err))
    }
    getData()
    

    
  },[])


  return (
<>

<div className='m-10'>
<form >
        <div className ="mt-4">
    <input
    // ref={search}
      id ="search"
      type ="text"
      placeholder ="Enter city name"
      className="w-full p-4 border border-gray-300 rounded-lg"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-lg"
    />
       </div>
      </form>
  <h1 className=' mt-5 text-center text-black text-4xl font-semibold'>Products</h1>

  <div className='mt-5 flex justify-center items-center flex-wrap gap-5'>

{
data ? data.map((items)=>{
  return(
    <>
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{items.title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </>
  )
}): console.log("loading")}




</div>



</div>
</>
)
}

export default Products