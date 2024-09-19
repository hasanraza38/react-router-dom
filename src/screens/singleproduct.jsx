import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";


const SingleProduct = () => {
  const {id} = useParams();
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getData() {
      await axios(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
    getData();
  }, []);

  return (
<>
<h1>single product {id}</h1>
<h1>{data ? data.title : "loading.."}</h1>


</>
)
}

export default SingleProduct