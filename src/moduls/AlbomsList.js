import React from 'react'


export default function AlbomsList(props) {
    const {alboms} = props
  return (
    <ul>{alboms.map((item,index)=>{
        return <li key={index}>{item.name}</li>
    })}</ul>
  )
}
