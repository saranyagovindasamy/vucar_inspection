"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function NewCar() {

const router = useRouter();
const[registerCar,setRegisterCar] = useState<object>({})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  setRegisterCar({...registerCar, [e.target.name]:e.target.value})
}
const handleRegister = async (e:any)=>{
  e.preventDefault()
  const data = registerCar
  const response = await fetch("http://localhost:8000/new-car",
  {method: 'POST',
  body: JSON.stringify({
    data,
  }),
  headers: {"Content-Type": "application/json"}
}).then((res)=>{console.log(res) }).catch((err)=>console.log(err))
  router.push("/dashboard")

}

  return (
    <main className="flex min-h-screen  items-center justify-center p-24">
      <div className="font-mono text-md bg-blue-300 p-14">
        <div>
          <h1 className="font-bold p-3 text-center text-gray-950">Register</h1>
        </div>
        <form onSubmit={handleRegister}>
          <div className="p-3 text-black">
            {" "}
            <input className="p-3" type="text" name="carName" placeholder="CarName ..." onChange={handleChange} required/>
          </div>
          <div className="p-3 text-black">
            {" "}
            <input className="p-3" type="text" name="carModal"  placeholder="carModal ..." onChange={handleChange} required/>
          </div>
          <div className=" mt-3 p-1 text-center">
            <button type="submit" className= "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  rounded shadow">Register New Car...</button>
            
          </div>
          <div className=" mt-3 p-1 text-center">
          <Link href={"/dashboard"}><button type="submit" className= "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow">Cancel</button></Link>
          </div>

          
        </form>
      </div>
    </main>
  );
}
