import { useContext, useState } from "react";
import { useAuth } from "../modules/auth/hooks/auth-provider";

const LoginPage = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   const auth = useAuth();
   

   const togglePasswordView = () => {
      setShowPassword(!showPassword);
   };

   const handleLogin = async (e) => {
      e.preventDefault()
      if (email && password) {
         console.log(auth);
         await auth.login(email, password);
         return;
      }
      alert("invalid input");
   }

   return (
      <div className="flex w-full h-full pt-20">
         <div className="w-full flex items-center justify-center">
            <form>
               <h1 className="text-5xl font-semibold">Welcome</h1>
               <p className="font-medium text-lg text-black mt-4">
                  Please enter your details
               </p>
               <div className="mt-8">
                  <div>
                     <label className="text-lg font-medium">Email</label>
                     <input
                        className="w-full border-2 gray-200 text-primary rounded-xl p-3 mt-1"
                        placeholder="Enter your email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                     />
                  </div>
                  <div>
                     <label htmlFor="password" className="text-lg font-medium">
                        Password
                     </label>
                     <div className="relative">
                        <input
                           className="w-full border-2 gray-200 text-primary rounded-xl p-3 mt-1"
                           placeholder="Enter your Password"
                           type={showPassword ? "text" : "password"}
                           onChange={(e) => setPassword(e.target.value)}
                           value={password}
                        />
                        <button
                           type="button"
                           className="absolute inset-y-0 right-0 pr-2 flex items-center"
                           onMouseDown={togglePasswordView}
                           onMouseUp={togglePasswordView}
                        >
                           {" "}
                           {showPassword ? (
                              <span className="text-primary icon-[mdi--eye-outline] font-bold"></span>
                           ) : (
                              <span className="text-primary icon-[charm--eye-slash] font-bold"></span>
                           )}{" "}
                        </button>
                     </div>
                  </div>
                  <div className="mt-8 flex justify-between items-center">
                     <div>
                        <input type="checkbox" id="rememberMe" />
                        <label
                           className="ml-2 font-medium text-base text-black"
                           htmlFor="rememberMe"
                        >
                           Remember for 30 days
                        </label>
                     </div>
                     <a href="/" className="text-base text-black font-bold px-2">
                        Forgot password
                     </a>
                  </div>
                  <div className="mt-8 flex flex-col gap-y-4">
                     <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-3 rounded-xl bg-gray-400 text-black text-lg font-bold"
                        onClick={(e) => handleLogin(e)}>
                        Sign in
                     </button>
                  </div>
               </div>

               <div className="mt-8 flex flex-col gap-y-4">
                  <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all flex py-3 rounded-xl border-2 border-blue-10 items-center justify-center gap-2 font-bold">
                     <svg width="24" height="24">
                        <path d="M2 7v2h4v2H4a2 2 0 00-2 2v4h6v-2H4v-2h2a2 2 0 002-2V9a2 2 0 00-2-2H2m7 0v10h2v-4h3v-2h-3V9h4V7H9m9 0a2 2 0 00-2 2v8h2v-3h2v3h2V9a2 2 0 00-2-2h-2m0 2h2v3h-2V9z" />
                     </svg>
                     Sign in Jala
                  </button>
               </div>
               <div className="mt-8 flex justify-center items-center">
                  <p className="text-base text-black font-bold">
                     Do not have an account ?
                  </p>
                  <button className="text-base text-black ml-2 font-bold">
                     Sign Up
                  </button>
               </div>
            </form>
         </div>
      </div>





   )
}

export default LoginPage;