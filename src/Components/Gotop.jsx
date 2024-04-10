import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

const Gotop = () => {
    const goTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };
  return (
    <>
      <div className="gotop-container" onClick={goTop}>
        <div className="arrow"><FaArrowUp/></div>
      </div>
    </>
  )
}

export default Gotop
