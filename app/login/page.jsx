"use client"
import React from 'react'
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { signInWithEmailAndPassword,sendEmailVerification  } from 'firebase/auth';
import { useState } from 'react';
import { cn } from "@/app/utils/cn";
import 'react-toastify/dist/ReactToastify.css';
  import { ToastContainer, toast,Bounce  } from 'react-toastify';
import { auth } from '@/config';
import { useRouter } from 'next/navigation'; // Import the useRouter hook from next/navigation

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
}
const SignIn = () => {
  const router = useRouter()
  
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
      const [showPassword, setShowPassword] = useState(false); // New state for password visibility

    const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

const handleSignUp = async (e) => {
  e.preventDefault();
//  setLoading(true);

  const signInPromise = signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      // Check if the user's email is verified
      if (user.emailVerified) {
        console.log('Email is verified');
          const uid = user.uid;
          console.log(uid)
        localStorage.setItem("uid",uid)
        localStorage.setItem("auth","yes")

        // Proceed with the sign-in flow
        router.push('/meme'); // Navigate to the dashboard page
        return 'Login successful';
      } else {
        console.log('Email is not verified');
        // Send verification email
        await sendEmailVerification(user);
        console.log('Verification email sent');

        // Reject the promise with a custom error message
        throw new Error('Email is not verified,Verification email sent, Please verify your email before signing in');
      }
    })
    .catch((error) => {
      console.error('Sign in error:', error);
      return Promise.reject(error); // Reject the promise with the error
    });

   toast.promise(
      signInPromise,
      {
        pending: 'loging...',
        success: 'welcome back',
        error: {
           render({ data }) {
          // Handle custom error messages
          if (data.message === 'Email is not verified,Verification email sent, Please verify your email before signing inEmail is not verified,Verification email sent, Please verify your email before signing in') {
            return data.message;
          }
          // Handle other errors
          return data.message || 'Error signing in 😫';
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

  //setLoading(false);
};
  return (
   
    <>
      <div className="absolute inset-0 -z-10 flex justify-center h-full w-full text-white items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome back to MemlloAI
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Sign in to a free account
        </p>
        <form className="my-8">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" value={email} onChange={handleEmailChange} type="email"  name="new-email" placeholder='siddharthavanka68@gmail.com'/>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" value={password} onChange={handlePasswordChange} type={showPassword ? "text" : "password"}    name="new-password" placeholder='*********'/>
           <span className='text-black' onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                {showPassword ? "Hide Password" : "Show Password"}
              </span>
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            onClick={handleSignUp}
          >
            Sign In &rarr;
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
   
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
     </>
   

  )

}

export default SignIn
