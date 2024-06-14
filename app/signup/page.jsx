'use client';
import { useState,useEffect } from 'react';
//import { useCreateUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config';
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { createUserWithEmailAndPassword,sendEmailVerification  } from 'firebase/auth';
import { cn } from "@/app/utils/cn";
  import { ToastContainer, toast,Bounce  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'; // Import the useRouter hook from next/navigation
import { ref, set ,push} from 'firebase/database';
import {database} from '@/config'
const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verfiy,setVerify] = useState(false)
    const [showPassword, setShowPassword] = useState(false); // New state for password visibility

    const router = useRouter();
const writeDataToDatabase = () => {
   
    const userId = localStorage.getItem('uid')
  if (userId) {
    const userRef = ref(database, `users/${userId}`);
    const resultRef = push(userRef); // Create a new child reference under the user's UID
    set(resultRef, {  title: titlee,
      result: textt, }); // Set the result text as the value of the new child
  } else {
    console.log('User is not authenticated');
  }
};
 // const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
   const handleName = (e)=>{
     const name = e.target.value
     localStorage.setItem("name",name)
   }

  const handleSignUp = async (e) => {
  

    e.preventDefault();
     const signUpPromise = createUserWithEmailAndPassword(auth, email, password)
    .then(async (res) => {
      console.log({ res });
 

      const user = res.user;
      await sendEmailVerification(user);
      console.log('Verification email sent');
      setVerify(true)
       router.push('/signup/verify');
      return 'Signup successful'; // Return a value to resolve the promise
    })
    .catch((e) => {
      console.error(e);
      return Promise.reject(e); // Reject the promise with the error
    });
    toast.promise(
      signUpPromise,
      {
        pending: 'Signing up...',
        success: 'Verfiy your email',
        error: {
           render({ data }) {
         
          return data.message 
        },
        }
      },
      {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
  
  };
  
  return (
    <>
     
 <div className="absolute inset-0 -z-10 flex justify-center h-full w-full text-white items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to IntrvuAI
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Create your free account
        </p>
        <form className="my-8">
            <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name"  onChange={handleName} type="name"   placeholder='Vanka Siddhartha'/>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" value={email} onChange={handleEmailChange} type="email"  name="new-email" placeholder='siddharthavanka68@gmail.com'/>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" value={password} onChange={handlePasswordChange}      type={showPassword ? "text" : "password"}   name="new-password" placeholder='*********'/>
             <span className='text-black' onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                {showPassword ? "Hide Password" : "Show Password"}
              </span>
          </LabelInputContainer>
             
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            onClick={handleSignUp}
          >
            Sign Up &rarr;
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
       <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
    </div>
      {verfiy&&(
        <div>
          <h1>Verfiy your email</h1>
        </div>
      )}
   
    </>
  );
};

export default SignUp;