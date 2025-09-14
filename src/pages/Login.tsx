// // src/pages/Login.tsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// // Type the backend response
// interface LoginResponse {
//   token: string;
//   user: {
//     id: string;
//     email: string;
//   };
// }

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     try {
//       // Call backend API with typed response
//       const res = await axios.post<LoginResponse>(
//         "/api/auth/login",
//         { email, password }
//       );

//       // Save token & user in localStorage
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       // Navigate to dashboard after login
//       navigate("/dashboard");
//     } catch (err: any) {
//       if (err.response?.data?.message) {
//         setError(err.response.data.message);
//       } else {
//         setError("Something went wrong. Try again later.");
//       }
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left side */}
//       <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-purple-700 via-purple-600 to-purple-900 text-white p-10">
//         <div className="max-w-md">
//           <h1 className="text-4xl font-bold mb-4">Hello Nxoplacify! 👋</h1>
//           <p className="text-lg opacity-90">
//             Empower your productivity with smart tools and automation.  
//             Get highly efficient and save tons of time!
//           </p>
//         </div>
//       </div>

//       {/* Right side */}
//       <div className="flex w-full md:w-1/2 items-center justify-center bg-white p-8">
//         <div className="w-full max-w-md">
//           <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
//           <p className="text-sm text-gray-600 mb-6">
//             Don’t have an account?{" "}
//             <a href="/signup" className="text-purple-600 font-medium hover:underline">
//               Create a new account now
//             </a>
//           </p>

//           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
//             >
//               Login Now
//             </button>
//           </form>

//           <button
//             type="button"
//             className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50"
//           >
//             <img
//               src="https://www.svgrepo.com/show/475656/google-color.svg"
//               alt="Google"
//               className="w-5 h-5"
//             />
//             Login with Google
//           </button>

//           <p className="text-sm text-gray-500 mt-4 text-center">
//             Forget password?{" "}
//             <a href="/forgot-password" className="text-purple-600 hover:underline">
//               Click here
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;