import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import {useForm}  from 'react-hook-form'
import { signUp } from '../../../operations/auth';
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
 
  const onSubmit = async (data) => {
    return await signUp(navigate,dispatch,data);
  }

  

  return (
    <div style={{ 
      backgroundColor: "#121212", 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
    }}>
      <div style={{ 
        backgroundColor: "#1E1E1E", 
        borderRadius: "8px", 
        padding: "10px 40px", 
        width: "500px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)"
      }}>
        <h1 style={{ 
          color: "#1E88E5", 
          textAlign: "center", 
          marginBottom: "30px",
          fontSize: "24px"
        }}>
          Create Your Account
        </h1>
        
        <form 
        onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              color: "#E0E0E0", 
              marginBottom: "8px",
              fontSize: "14px"
            }}>
              Full Name
            </label>
            <input 
              type="text" 
              name='fullName'
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
              placeholder="Enter your full name"

             // --------validation--------
             {...register("fullName", {
               required:{value: true,message:'Full Name is required'}, 
              minLength: { value: 10, message: "full Name length should be greater 20 word" },
            })}
          />
          {/* -------Error handling ------- */}
          {errors.fullName && (
            <p role="alert" className='text-[.81rem] text-red-500'>{errors?.fullName?.message}</p>
          )}
          </div>

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
          
          <div style={{ marginBottom: "20px" }}>
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
              name='password'
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
              placeholder="Create a password"
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

          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              color: "#E0E0E0", 
              marginBottom: "8px",
              fontSize: "14px"
            }}>
              Confirm Password
            </label>
            <input 
              type="password" 
              name='confirmPassword'
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
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required:{value: true, message:'confirmPassword is required'}, 
               minLength: { value: 8, message: "confirmPassword length should be greater than 8 word" },

             })}
           />
           {/* -------Error handling ------- */}
           {errors.confirmPassword && (
             <p role="alert" className='text-[.81rem] text-red-500'>{errors?.confirmPassword?.message}</p>
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
            Sign Up
          </button>
        </form>
        
        <div style={{ 
          marginTop: "20px", 
          textAlign: "center", 
          color: "#AAAAAA",
          fontSize: "14px"
        }}>
          By signing up, you agree to our{" "}
          <a href="#terms" style={{ 
            color: "#64B5F6", 
            textDecoration: "none"
          }}>
            Terms of Service
          </a>
          {" "}and{" "}
          <a href="#privacy" style={{ 
            color: "#64B5F6", 
            textDecoration: "none"
          }}>
            Privacy Policy
          </a>
        </div>
        <NavLink to="/login">
          <div style={{ 
            marginTop: "20px", 
            textAlign: "center", 
            color: "#AAAAAA",
            fontSize: "14px"
          }}>
            Already have an account?{" "}
            <span style={{ 
              color: "#64B5F6", 
              textDecoration: "none"
            }}>
              Log In
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SignUp;