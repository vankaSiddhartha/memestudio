"use client"
import React from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '@/config'
  import { ToastContainer, toast,Bounce  } from 'react-toastify';
import { useRouter } from 'next/navigation'; // Import the useRouter hook from next/navigation

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
const Verfiy = () => {
        const router = useRouter();

  const handleEmail=()=>{
  


    onAuthStateChanged(auth, (user) => {
  if (user) {
    
     user.reload().then(() => {
    // You can now check if the email is verified
    if (user.emailVerified) {
        const uid = user.uid;
        localStorage.setItem("uid",uid)
        localStorage.setItem("auth-meme","yes")
                  console.log(uid)


      console.log("The user's email is verified.");
     toast.success('Email is verified', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
router.push('/meme')
    } else {
      console.log("The user's email is not verified.");
      // Handle unverified users
           toast.warn('Email is not verified', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});

    }
    })
  } else {
       toast.warn('Email is not verified', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  }
});
  }
  return (
     <div className="absolute inset-0 -z-10 flex justify-center h-full w-full text-white items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        
              <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 space-y-5 md:p-8 shadow-input bg-white dark:bg-black">

                 <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Verify your account
        </h2>
         <button
            className=" p-2 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            onClick={handleEmail}
          >
             I verfied my email&rarr;
            <BottomGradient />
          </button>

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

  )
}

export default Verfiy
