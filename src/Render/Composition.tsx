import React, { type JSX } from 'react'
import { Compositions } from '../component/Compositions'

export const Composition = () => {
  return (
    <>

  <Cards header ={<Compositions text = {"stromg"}/>} content ={<div>test</div>} footer ={<>ttssssssssssssssstt</>}/>
    </>
  )
}


interface CardsProps {
  header : React.ReactNode;
  content : React.ReactNode;
  footer : React.ReactNode;
}


export const Cards = ({header ,content,footer } : CardsProps) => {
  return (
    <div style={{display : 'flex', flexDirection : 'column' ,border:  '1px solid #e8e8e8', padding : 10, margin : 5, width : 200}}>
      {header}
      {content}
      {footer}
    </div>
  )
}
