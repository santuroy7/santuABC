import React from "react";
import { useDispatch } from "react-redux";
import { addAreaLabel } from "../store/areaSlice";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const TextArea = () => {
  const dispatch = useDispatch();
  const [areaValue, setAreaValue] = useState();
  const handleClick = (areaValue) => {
    const unique_id = uuid();
    // Get first 8 characters using slice
    const small_id = unique_id.slice(0, 8);
    console.log(areaValue);
    dispatch(addAreaLabel({ id: small_id, label: areaValue }));
  };
  return (
    <div className="mx-10">
      <div>
        <h6 className="text-sm font-normal tracking-widest text-slate-500 text-center p-2 m-3 border-b-2">
          ADDING AREAINPUT
        </h6>
        <input
          className="shadow appearance-none border rounded w-5/12 py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Label"
          onChange={(e) => setAreaValue(e.target.value)}
        />
        <button
          className="bg-cyan-500 hover:bg-cyan-800 text-white font-bold py-2 px-4 border border-cyan-500 rounded"
          onClick={() => handleClick(areaValue)}
        >
          Add To Form
        </button>
        {/* <button>Remove</button> */}
      </div>
    </div>
  );
};

export default TextArea;
