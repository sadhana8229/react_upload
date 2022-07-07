import React from "react";
import './style.css';
import { useForm } from "react-hook-form";

const Signin = () =>{

    const {
        register, 
        formState: {errors}, 
        handleSubmit} = useForm({
            mode: "all",
        });

    console.log("errors", errors);

    return(
        <div className="wrapper">
            <form className="form-wrap"
            onSubmit={handleSubmit((data) => console.log(data))}
            >
                <h2 className="heading">SignUp Form</h2>
                <div className="input-wrap">
                    <input type="text" placeholder="Enter User Name" name="username"
                    {...register("username", {
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message: "Username must be atleast 3 character log"
                        },
                        maxLength: {
                            value: 33,
                            message: "Username must be atmost 30 character log"
                        },
                    })} 
                    />
                    <p className="error">{errors.username?.message}</p>
                </div>
                <div className="input-wrap">
                    <input type="email" placeholder="Enter Email" name="email" 
                    {...register("email", {
                        required: "Email is required", 
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Email is Invalid"
                        }
                    })}
                    />
                    <p className="error">{errors.email?.message}</p>
                </div>
                <div className="input-wrap">
                    <input type="password" placeholder="Enter Password" name="password" 
                    {...register("password", {
                        required: "Password is required", 
                        pattern: {
                            value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                            message: "Password must contain atleast 6 character, One uppercase, one lowercase, one number and one special character"
                        }
                    })}
                    />
                    <p className="error">{errors.password?.message}</p>
                </div>
                <div className="input-wrap">
                    <input type="number" placeholder="Enter Mobile Number" name="mobnumber" 
                    {...register("mobnumber", {
                        required: "Mobile Number is required",
                        maxLength: {
                            value: 10,
                            message: "Username must be atleast 10 digit"
                        },
                    })}
                    />
                    <p className="error">{errors.mobnumber?.message}</p>
                </div>
                <button type="submit" className="login-btn">Signin</button>
            </form>
        </div>
    )
}
export default Signin;