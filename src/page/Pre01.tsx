import React from 'react'
import { userProfile } from '../App';

interface userDetailType {
  username : string ;
  role : string ;
}

interface objectType {
  id : number ;
  name : string ;
}
const Pre01 = () => {
  const userDetail = React.useContext<userDetailType>(userProfile);
  const [num , setNum] = React.useState<number>(0);
  const [object , setOpject] = React.useState<objectType[]>([
    {id : 1 , name : 'nay'},
    {id : 2 , name : 'fah'},
    {id : 3 , name : 'sah'},
  ])
  const [data , setData] = React.useState<string>("")
  const [bool , setBool] = React.useState<Boolean>(false)
  // console.log(data)/

  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    const fetchingData = async () => {
      try{
        const body = await fetch("https://dragonball-api.com/api/characters?page=2&limit=5")
        const res = await body.json();
        console.log(res)
      }catch(err) {
        console.log(err)
      }
    }
    fetchingData();
    
  },[])

  const postData = async () =>  {
    try{
      const post = await fetch('https://dragonball-api.com/api/characters?page=2&limit=5' , {
        method : 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({username : 'thanawit' , age : 23})
      })
      const data = await post.json();
      console.log(data)
    }catch(err){
      console.log(err)
    }
  }

  const handelSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    console.log(inputRef.current?.value)
    // localStorage.setItem('token' ,inputRef.current?.value)
  }


  return (
    <>
    <div style={{display : 'flex'}}>{JSON.stringify(userDetail)}</div>
    <button onClick={() => setNum(num+1)}>add number</button><br />
    <button onClick={() => setNum(num-1)}>delete number</button><br />
    {num}

    <select name="" id="" onChange={(e) => setData(e.target?.value)}>
      {object.map(item => (<option key={item.id}>{item.name}</option>))}
    </select><br /><br />

    <button onClick={() => setBool(prev => !prev)}>change state</button>
    {bool ? <>true!!</> : <>false!!</>}

    <form action="" onSubmit={handelSubmit}>
      <input ref={inputRef} type="text" />
      <button type='submit'>submit</button>
    </form>

    
    </>
  )
}

export default Pre01