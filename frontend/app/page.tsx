"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import axios from "axios";
export default function Login() {
  const router = useRouter();
const[loginData,setLoginData] = useState<object>({})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  setLoginData({...loginData, [e.target.name]:e.target.value})
}
const handleLoginForm =async (e:any)=>{
  e.preventDefault()
  const data = loginData;
  const response = await fetch("http://localhost:8000/login",
  {method: 'POST',
  body: JSON.stringify({
    data,
  }),
  headers: {"Content-Type": "application/json"}
})
const json = await response.json();
console.log(json.success)
if(json.success === false){
  alert("Please check again")
}else{
  router.push("/dashboard")

}


}

  return (
    <main className="flex min-h-screen  items-center justify-center p-24">
      <div className="font-mono text-md bg-blue-300 p-14">
        <div>
          <h1 className="font-bold p-3 text-center text-gray-950">Login</h1>
        </div>
        <form onSubmit={handleLoginForm}>
          <div className="p-3 text-black">
            {" "}
            <input className="p-3" type="text" name="username" placeholder="UserName ..." onChange={handleChange} required/>
          </div>
          <div className="p-3 text-black">
            {" "}
            <input className="p-3" type="password" name="password"  placeholder="Password ..." onChange={handleChange} required/>
          </div>
          <div className="p-3 text-center">
            <button type="submit" className= "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Submit</button>
          </div>
        </form>
        <div className="flex text-center">
        <h5>Not Yet Registered?</h5>
        <Link href="/register">Register</Link>
        </div>
      </div>
    </main>
  );
}
