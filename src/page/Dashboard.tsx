import React from 'react'


interface DataBodyType {
    productName : string ;
    price : number ;
}
const Dashboard = () => {
    const [data , setData] = React.useState<DataBodyType[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:8000/getAllData');
            const data = await res.json();
            setData(data);
            console.log(data);  
        }
        fetchData();
    },[]);

  return (


    <>
        <div style={{
            display:'flex' ,
            width : 300 , 
            height : 500 , 
            border : '1px solid #e8e8e8' ,
            borderRadius : 5 ,
            padding : 10
            }}>
                <div>{data?.map((item , index : number )  => (<div key={index}>{item.productName}</div>))}</div>
                
        </div>

    </>
  )
}

export default Dashboard