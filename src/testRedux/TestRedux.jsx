import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_VALUE, getPokemon } from "../slice/testSlice";

function TestRedux() {
  const dispatch = useDispatch();
  const [dataShow, setDataShow] = useState([]);

  useEffect(() => {
    dispatch(getPokemon())
      .then((result) => {
        setDataShow(result.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOnclick = ()=>{
    dispatch(SET_VALUE(10000))
  }

  return (
    <div>
      <button onClick={()=>handleOnclick()}>button set value</button>
      <br/>
      {JSON.stringify(dataShow)}
    </div>
  );
}

export default TestRedux;
