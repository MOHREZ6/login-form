
import Image from "next/image";
import login  from '../public/images/login.jpg'

function Login  () {
  return (
   <section className=" flex  w-2/4 bg-pink-600 w-full	  h-screen		">
      <div className="flex bg-indigo-500 w-full justify-center		  m-auto	" >
        <div className="w-6/12   bg-indigo-800	">
          <p className="text-6xl	">login form</p>
          <p className="text-slate-700"> Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
          <p>Username</p>
          <input placeholder="Username"></input>
          <p>Password</p>
          <input placeholder="Password"></input>
          <div>
            <input  type="checkbox"></input><span>Remember me</span>
            <span><a href="#"> Forgot Password  vvvvvvvvvv</a></span>
          </div> 
        </div>
      </div>
    <div className="flex w-full	 ">
       <Image src={login} alt='flower'></Image>
    </div>
   </section>
  );
}

export default Login;
