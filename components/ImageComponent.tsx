/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { Blurhash } from "react-blurhash";
interface ImageComponentProps {
    src: string;
    width?: number;
    height?: number

  }
  
  const ImageComponent = ({ src ,width,height}: ImageComponentProps): JSX.Element => {
    const[imageLoaded,setImageLoaded] = useState(false)
    useEffect(()=>{
        const img = new Image()
        img.onload= ()=>{
            setImageLoaded(true)
        }
        img.src = src
    } ,[src])
  return (
    <><div style={{display: imageLoaded ? 'none' : "inline"}}>
        <Blurhash
  hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
  width={width}
  height={height}
  resolutionX={32}
  resolutionY={32}
  punch={1}
/>
        </div>
        <img
        src={src}
        alt=""
        style={{display : !imageLoaded ? "none" : "inline"}}
        width={width}
        height={height}
        />
  
    </>
  )
}

export default ImageComponent