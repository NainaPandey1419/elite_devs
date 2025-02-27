import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          borderBottom: "1px solid #333",
        }}
      >
        <div>
          <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>AnuPort</h1>
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            "@media (max-width: 768px)": {
              display: "none",
            },
          }}
        >
          <a
            href="#features"
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Features
          </a>
          <a
            href="#testimonials"
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Testimonials
          </a>
          <a
            href="#pricing"
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Pricing
          </a>
          <a
            href="#about"
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            About
          </a>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
        <NavLink to="/login">
          <button
            style={{
              backgroundColor: "#333",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Log In
          </button>
          </NavLink>
        <NavLink to="/signup">

          <button
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Sign Up
          </button>
          </NavLink>

        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 24px",
          display: "grid",
          gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "1fr 1fr",
          gap: "32px",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Manage Student Reports with Ease
          </h1>
          <p style={{ fontSize: "18px", color: "#aaa", marginBottom: "32px" }}>
            Track performance, generate comprehensive reports, and gain valuable
            insights into student progress all in one place.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
        <NavLink to="/dashboard">
            <button
              style={{
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Go to Dashboard
            </button>
            </NavLink>
            <button
              style={{
                backgroundColor: "#333",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Watch Demo
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#1e1e1e",
            padding: "24px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              border: "1px solid #333",
              borderRadius: "6px",
              padding: "16px",
              backgroundColor: "#252525",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <h3 style={{ fontWeight: "600" }}>
                Student Performance Overview
              </h3>
              <div
                style={{
                  backgroundColor: "#333",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
              >
                Fall 2024
              </div>
            </div>
            <div>
              <div
                style={{
                  height: "8px",
                  backgroundColor: "#333",
                  borderRadius: "999px",
                  width: "100%",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    backgroundColor: "#3b82f6",
                    borderRadius: "999px",
                    width: "75%",
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: "8px",
                  backgroundColor: "#333",
                  borderRadius: "999px",
                  width: "100%",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    backgroundColor: "#10b981",
                    borderRadius: "999px",
                    width: "88%",
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: "8px",
                  backgroundColor: "#333",
                  borderRadius: "999px",
                  width: "100%",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    backgroundColor: "#eab308",
                    borderRadius: "999px",
                    width: "62%",
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: "8px",
                  backgroundColor: "#333",
                  borderRadius: "999px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    backgroundColor: "#a855f7",
                    borderRadius: "999px",
                    width: "54%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        style={{
          padding: "64px 24px",
          backgroundColor: "#1a1a1a",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Powerful Features
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                window.innerWidth < 768 ? "1fr" : "repeat(3, 1fr)",
              gap: "32px",
            }}
          >
            <div
              style={{
                backgroundColor: "#252525",
                padding: "24px",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                Advanced Analytics
              </h3>
              <p style={{ color: "#aaa" }}>
                Gain insights into student performance with comprehensive
                analytics and visualizations.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#252525",
                padding: "24px",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#10b981",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                Custom Reports
              </h3>
              <p style={{ color: "#aaa" }}>
                Generate and export custom reports tailored to your specific
                requirements.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#252525",
                padding: "24px",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#a855f7",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                Real-time Updates
              </h3>
              <p style={{ color: "#aaa" }}>
                Get instant notifications and updates on student progress and
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          Ready to Transform Student Reporting?
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#aaa",
            marginBottom: "32px",
          }}
        >
          Join thousands of educational institutions already using our platform.
        </p>
        <button
          style={{
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            padding: "12px 32px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "16px",
          }}
        >
          Get Started Today
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #333",
          padding: "32px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              window.innerWidth < 768 ? "1fr" : "repeat(4, 1fr)",
            gap: "32px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              AnuPort
            </h2>
            <p style={{ color: "#888" }}>
              Empowering educational institutions with powerful reporting and
              analytics tools.
            </p>
          </div>
          <div>
            <h3
              style={{
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Product
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <a href="#" style={{ color: "#888", textDecoration: "none" }}>
                Features
              </a>
              <a href="#" style={{ color: "#888", textDecoration: "none" }}>
                Pricing
              </a>
              <a href="#" style={{ color: "#888", textDecoration: "none" }}>
                Case Studies
              </a>
              <a href="#" style={{ color: "#888", textDecoration: "none" }}>
                Documentation
              </a>
            </div>
          </div>
          <div>
            <h3
              style={{
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Company
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <a href="#" style={{ color: "#888", textDecoration: "none" }}>
                About
              </a>
              <a href="#" style={{ color: "#888", textDecoration: "none" }}>
                Blog
              </a>
              <a href="#" style={{ color: "#888", textDecoration: "none" }}>
                Careers
              </a>
              <a href="#" style={{ color: "#888", textDecoration: "none" }}>
                Contact
              </a>
            </div>
          </div>
          <div>
            <h3
              style={{
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Legal
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <a href="#" style={{ color: "#888", textDecoration: "none" }}>
                Privacy Policy
              </a>
              <a href="#" style={{ color: "#888", textDecoration: "none" }}>
                Terms of Service
              </a>
              <a href="#" style={{ color: "#888", textDecoration: "none" }}>
                GDPR
              </a>
              <a href="#" style={{ color: "#888", textDecoration: "none" }}>
                Security
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #333",
            marginTop: "32px",
            paddingTop: "24px",
            textAlign: "center",
            color: "#888",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <p>© 2025 AnuPort. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
