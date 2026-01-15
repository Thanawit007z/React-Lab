import React from 'react'

interface objectBody {
  data : object[];
}

export const Card = (data  : objectBody) => {

  // const dataSet = React.useMemo(() => {
  //   const res = data
  //   return res
  // },[data])
  // console.log('Form Card : ' , dataSet.data.items)
  
  return (
    <>
    <div style={{display : 'flex', flexDirection :'row', flexWrap : 'wrap'}}>
  {data.data.items?.map(item => (<div style={{margin : 5, width : 200}}>
    <div style={{display : 'flex' , flexDirection : 'column' , border : '1px solid #e8e8e8', borderRadius : 10, padding : 5, justifyContent : 'center' , alignItems: 'center',}}>
    <div>Name : {item.name}</div>
    <img src={item.image} alt="" width={150} height={200} />
    <div>Power : {item.maxKi}</div>
  </div>
  </div>))}
  </div>
    </>
  )
}
