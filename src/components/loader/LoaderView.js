import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

export const LoaderView = () => {
  return (
    <div className='w-screen h-screen bg-black flex flex-row justify-center items-center'>
        <ClipLoader color={"#fff"} loading={true}  size={150} />
    </div>
  )
}
