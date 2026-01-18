import React, { useEffect, useState } from 'react'
import { colors } from './colorData'

const Color = () => {
    const[colorList,setColorList] = useState([])

    const[colorIndex,setColorIndex] = useState(0)
    useEffect(()=>{

        setColorList(colors)
    },[])

    const handleColorChange = ()=>{
        
        setColorIndex(colorIndex+1) 
        console.log("color changer clicked", colorList[colorIndex])
        if(colorIndex>=colorList.length-1){
            // alert("Limit reached")
            setColorIndex(0)
        }
    }
  return (
    <>
    <div className='flex items-center flex-col gap-4 justify-center'>

        <div className={`h-[200px] w-[200px]
        ${colorList[colorIndex]} rounded-sm border-2 border-red-500
        transition-colors ease-in-out `}>

        </div>

            
        <button
        onClick={()=>handleColorChange()} className='bg-indigo-300 rounded-md p-2'>
            Click to change color
        </button>
    </div>
    <div className=' flex flex-row items-center justify-center my-4 gap-4'>
    {
                colorList.map((color,index)=>(
                    
                    <div key={index} className={`rounded-full ${colorIndex===index ? colorList[colorIndex]
                        : "bg-gray-500"
                    }   h-4 w-4`}>

                        </div>
                    
                ))
            }
            </div>
            </>
  )
}

export default Color