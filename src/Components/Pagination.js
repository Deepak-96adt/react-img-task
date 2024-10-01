import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { Items } from './Items';
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

function PaginatedItems({ itemsPerPage }) {

const [items, setItems] = useState([]);

const fetchData = async() =>{
  const URL = "https://fakestoreapi.com/products";
  try{
    const response = await axios.get(URL);
    const data = await response.data;
    setItems(data);
  }
  catch(error){
    console.error(error);
  }
}

useEffect(() => {
    fetchData();
}, []);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        activeClassName={'active'}
        containerClassName={"pagination"}
        onPageChange={handlePageClick}
        pageClassName={"page-item"}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
            <AiFillLeftCircle />
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
            <AiFillRightCircle />
          </IconContext.Provider>
        }
        renderOnZeroPageCount={null}
        />
      <Items currentItems={currentItems} />
    </>
  );
}

export default PaginatedItems;