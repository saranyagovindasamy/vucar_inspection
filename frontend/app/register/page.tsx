"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const [registerData, setRegisterData] = useState<object>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const handleRegister = async (e: any) => {
    e.preventDefault();
    const data = registerData;

    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      body: JSON.stringify({
        data,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    router.push("/");
  };

  return (
    <main className="flex min-h-screen  items-center justify-center p-24">
      <div className="font-mono text-md bg-blue-300 p-14">
        <div>
          <h1 className="font-bold p-3 text-center text-gray-950">Register</h1>
        </div>
        <form onSubmit={handleRegister}>
          <div className="p-3 text-black">
            {" "}
            <input
              className="p-3"
              type="text"
              name="username"
              placeholder="UserName ..."
              onChange={handleChange}
              required
            />
          </div>
          <div className="p-3 text-black">
            {" "}
            <input
              className="p-3"
              type="password"
              name="password"
              placeholder="Password ..."
              onChange={handleChange}
              required
            />
          </div>
          <div className="p-3 text-black">
            <input
              type="checkbox"
              name="role"
              value="1"
              onChange={handleChange}
            />
            <label> Engineer</label>
          </div>
          <div className=" mt-3 p-1 text-center ">
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  rounded shadow"
            >
              Register Here...
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
