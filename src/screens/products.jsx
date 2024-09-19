import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      await axios("https://fakestoreapi.com/products")
        .then((res) => {
          console.log(res.data);
          setData([...res.data]);
        })
        .catch((err) => console.log(err));
    }
    getData();
  }, []);

  function singleProduct(id) {
    navigate(`/singleproduct/${id}`);
  }

  return (
    <>
      <div className="m-10">
        <form>
          <div className="mt-4">
            <input
              // ref={search}
              id="search"
              type="text"
              placeholder="Enter city name"
              className="w-full p-4 border border-gray-300 rounded-lg"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
        </form>
        <h1 className=" mt-5 text-center text-black text-4xl font-semibold">
          Products
        </h1>

        <div className="mt-5 flex justify-center items-center flex-wrap gap-5">
          {data ? (
            data.map((items, index) => {
              console.log(items);
              return (
                <>
                  <div
                    className="card card-compact bg-base-100 w-96 h-[27rem] shadow-xl"
                    key={index}
                  >
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{items.title}</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                      <div className="card-actions justify-end my-3">
                        <button className="btn btn-sm btn-primary">
                          Buy Now
                        </button>
                        <button
                          onClick={() => singleProduct(items.id)}
                          className="btn btn-sm btn-primary"
                        >
                          Show More
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <h1 className="text-black text-2xl font-bold">loading..</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
