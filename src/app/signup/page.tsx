"use client"
import { useForm, SubmitHandler } from "react-hook-form"


interface IFormInput {
  userName: string,
  email: string,
  password: string
}


export default function SignUpForm() {
   const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
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

