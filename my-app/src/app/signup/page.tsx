"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import DarkModeToggle from "react-dark-mode-toggle"
import { useState } from "react"

interface IFormInput {
  userName: string,
  email: string,
  password: string
}


export default function SignUpForm() {
   const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    const [darkMode, etDarkMode] = useState(true);
    return (
      
      <div className="FormForLogIn">
      <form onSubmit={handleSubmit(onSubmit)}>
      
      
        <input className="justAFlexDiv" placeholder="Enter your email"{...register("userName", { required: true, maxLength: 20 })} type ="email" />
        <input className="justAFlexDiv" placeholder="Enter Your username"{...register("email", { pattern: /^[A-Za-z]+$/i })} />
        <input className="justAFlexDiv" placeholder="Enter Your password"{...register("email", { pattern: /^[A-Za-z]+$/i })}  type="password"/>
  
        <input type="submit" />
      </form>
  
      </div>
    )
}

