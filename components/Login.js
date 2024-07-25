import { useForm } from "react-hook-form";

import Image from "next/image";
import loginimage from "../public/images/loginimage.jpg";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  function submitHandler({ email, password }) {}

  return (
    <form className=" flex w-2/4 w-full h-screen bg-slate-200	" 
    onSubmit={handleSubmit(submitHandler)}>

      <div className="flex  w-full justify-center		  m-auto	">
        <div className="w-7/12 	">
          <p className="text-6xl 	">Login form</p>
          <p className="text-slate-700 py-3.5	">
            {" "}
            Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
            adipisicing.
          </p>
          <p className="text-xl	my-3.5">Username</p>
          <input
          {...register('email', {required:true})}
          type="email"
            placeholder="your-email@gmail.com"
            className=" w-full	py-3 mt-1 border-2   p-4 focus:border-transparent focus:outline-none	rounded	 pl-2 "
          /> {errors.email && (<div className="text-red-500	">Please enter email</div>)}
          <p className="text-xl my-3.5">Password</p>
          <input
          {...register('password', {required:true,
            minLength:{
              value:7,message:'password must be at least 7 characters'
               
            }
          })}
          type="password"
            placeholder="Password"
            className="w-full	py-3 mt-1 border-2   p-4 focus:border-transparent focus:outline-none		rounded pl-2		"
          ></input>
          {errors.password && (<div className="text-red-500">{errors.password.message}</div>)}
          <div className=" flex justify-between		">
            <div className="my-3.5">
              <input
                type="checkbox"
                className=" bg-custom-green"
                id="exampleCheck2"
              />
              <label
                className=" form-checkbox accent-slate-900	 py-3.5 pl-1.5	"
                for="exampleCheck2"
              >
                Remember me
              </label>
            </div>
            <span className="my-3.5">
              <a href="#" className="underline">
                {" "}
                Forgot Password{" "}
              </a>
            </span>
          </div>
          <button
            className="inline-block w-full rounded bg-orange-500	 px-7 pb-2 pt-3  text-sm font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out  hover:bg-orange-400	dark:shadow-black/30 dark:hover:shadow-dark-strong  "
          >
            Login
          </button>
        </div>
      </div>
      <div className="flex w-full  bg-teal-300	 	">
        <Image src={loginimage} alt="flower" width={800} height={900} />
      </div>
    </form>
  );
}

export default Login;
