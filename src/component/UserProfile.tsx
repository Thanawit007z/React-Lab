import React from 'react'

export const UserProfile = () => {

    const InputUserRef = React.useRef<HTMLInputElement>(null);
    const InputPasswordRef = React.useRef<HTMLInputElement>(null);
    const InputPermissionRef = React.useRef<HTMLSelectElement>(null);

    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        
        const fetchResponse = await fetch('http://localhost:8000/createUser' , {
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username : InputUserRef.current?.value ,
                password : InputPasswordRef.current?.value ,
                permission : InputPermissionRef.current?.value ,
            })
        });

        const res = await fetchResponse.json();
        console.log(res);
    }

    
    

  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">username</label>
            <input ref={InputUserRef} type="text" />
        </div>
        <div>
            <label htmlFor="">password</label>
            <input ref={InputPasswordRef} type="text" />
        </div>
        <div>
            <label htmlFor="">permission</label>
            <select ref={InputPermissionRef} name="" id="">
                <option value="admin">admin</option>
                <option value="user">user</option>
            </select>
        </div>
        <button type="submit">Submit</button>
        
    </form>
    
    </>
  )
}
