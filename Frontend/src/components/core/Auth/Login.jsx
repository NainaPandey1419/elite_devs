import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {useForm}  from 'react-hook-form'
import {signIn}  from '../../../operations/auth';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
 
  const onSubmit = async (data) => {
    return await signIn(navigate,dispatch,data);
  }


  return (
    <div style={{ 
      backgroundColor: "#121212", 
      minHeight: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{ 
        backgroundColor: "#1E1E1E", 
        borderRadius: "8px", 
        padding: "40px", 
        width: "400px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)"
      }}>
        <h1 style={{ 
          color: "#1E88E5", 
          textAlign: "center", 
          marginBottom: "30px",
          fontSize: "24px"
        }}>
          Login to Your Account
        </h1>
        
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              color: "#E0E0E0", 
              marginBottom: "8px",
              fontSize: "14px"
            }}>
              Email Address
            </label>
            <input 
              type="email" 
              name='email'
              style={{ 
                width: "100%", 
                padding: "12px", 
                backgroundColor: "#2D2D2D", 
                border: "1px solid #444",
                borderRadius: "4px", 
                color: "#FFFFFF",
                outline: "none",
                boxSizing: "border-box"
              }}
              placeholder="Enter your email"
              {...register("email", {
                required:{value: true,message:'Email is required'}, 
               minLength: { value: 12, message: "Email length should be greater 12 word" },
             })}
           />
           {/* -------Error handling ------- */}
           {errors.email && (
             <p role="alert" className='text-[.81rem] text-red-500'>{errors?.email?.message}</p>
           )}
          </div>
          
          <div style={{ marginBottom: "25px" }}>
            <label style={{ 
              display: "block", 
              color: "#E0E0E0", 
              marginBottom: "8px",
              fontSize: "14px"
            }}>
              Password
            </label>
            <input 
              type="password" 
             name="password"
              style={{ 
                width: "100%", 
                padding: "12px", 
                backgroundColor: "#2D2D2D", 
                border: "1px solid #444",
                borderRadius: "4px", 
                color: "#FFFFFF",
                outline: "none",
                boxSizing: "border-box"
              }}
              placeholder="Enter your password"
              {...register("password", {
                required:{value: true,message:'Password is required'}, 
               minLength: { value: 8, message: "Password length should be greater than 8 word" },
             })}
           />
           {/* -------Error handling ------- */}
           {errors.password &&  (
             <p role="alert" className='text-[.81rem] text-red-500'>{errors?.password?.message}</p>
           )}
          </div>
          
          <button type="submit" style={{ 
            width: "100%", 
            padding: "12px", 
            backgroundColor: "#1976D2", 
            color: "white", 
            border: "none", 
            borderRadius: "4px", 
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "background-color 0.3s"
          }}>
            Log In
          </button>
        </form>
        
        <div style={{ 
          marginTop: "20px", 
          textAlign: "center" 
        }}>
          <a href="#forgot-password" style={{ 
            color: "#64B5F6", 
            textDecoration: "none", 
            fontSize: "14px"
          }}>
            Forgot Password?
          </a>
        </div>
        <NavLink to="/signup">
        <div style={{ 
          marginTop: "20px", 
          textAlign: "center", 
          color: "#AAAAAA",
          fontSize: "14px"
        }}>
          Don't have an account?{" "}
          <a href="#signup" style={{ 
            color: "#64B5F6", 
            textDecoration: "none"
          }}>
            Sign Up
          </a>
        </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;