import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignUp attempt with:", { name, email, password });
  
    navigate("/");
  };
  

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
          Create Your Account
        </h1>
        
        <form onSubmit={handleSubmit}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              required
            />
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              required
            />
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              required
            />
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              required
            />
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