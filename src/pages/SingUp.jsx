import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "../styles/Login.css"
import "../styles/SingUp.css"
import { useForm } from "react-hook-form"
import { setIsLoading } from "../store/slices/isLoadingSlice"
import { toast } from "sonner"

function SingUp() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submit = (data) => {
    dispatch(setIsLoading(true))

    axios
      .post("https://backend-api-ecommerce-7wn7.onrender.com/users", data)
      .then(() => {
        toast.success("Usuario creado correctamente")
        navigate("/login")
      })
      .catch((err) => {
        console.log(err)
        alert("Credenciales incorrectas")
      })
      .finally(() => dispatch(setIsLoading(false)))
  }

  return (
    <main className="login-main">
      <div className="login-container">
        <form onSubmit={handleSubmit(submit)} className="form">
          <p id="heading">Sing Up</p>

          <div className="field">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <input
              autoComplete="off"
              placeholder="First Name"
              className="input-field"
              type="text"
              {...register("firstName")}
            />
          </div>
          <div className="field">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <input
              placeholder="Last Name"
              className="input-field"
              type="text"
              {...register("lastName")}
            />
          </div>
          <div className="field">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <input
              placeholder="Email"
              className="input-field"
              type="email"
              {...register("email")}
            />
          </div>
          <div className="field">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <input
              placeholder="Password"
              className="input-field"
              type="password"
              {...register("password")}
            />
          </div>
          <div className="field">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <input
              placeholder="Phone"
              className="input-field"
              type="number"
              {...register("phone")}
            />
          </div>
          <div className="btn">
            <button type="submit" className="button2">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default SingUp