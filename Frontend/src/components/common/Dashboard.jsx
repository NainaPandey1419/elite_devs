import React, { useState } from 'react';
import InputModal from './InputFormModal';
import { useDispatch } from 'react-redux';
import { getInternShipData } from '../../operations/getData';

const Dashboard = () => {
  const [userRole, setUserRole] = useState('student'); 
  const [currUploadFormId ,setCurrUploadFormId ] = useState('');
  const [currUploadFormLabel ,setCurrUploadFormLabel ] = useState('');
  const departments = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Electrical'];
  const years = ['2022', '2023', '2024', '2025'];
  const categories = ['Academic', 'Research Papers', 'Internship', 'GATE', 'CAT', 'Faculty Progress'];
  const dispatch =useDispatch();

  
  const roleAccess = {
    student: {
      uploadMidSem: false,
      uploadAchievements: false,
      uploadPractical: false,
      uploadProficiency: false,
      uploadInternship: false,
      uploadResearchPaper: false,
      uploadNPTEL: false,
      uploadGATE: false,
      uploadCAT: false,
      uploadPlacement: false
    },
    faculty: {
      uploadMidSem: true,
      uploadAchievements: true,
      uploadPractical: true,
      uploadProficiency: true,
      uploadInternship: false,
      uploadResearchPaper: false,
      uploadNPTEL: false,
      uploadGATE: false,
      uploadCAT: false,
      uploadPlacement: false
    },
    admin: {
      uploadMidSem: false,
      uploadAchievements: false,
      uploadPractical: false,
      uploadProficiency: false,
      uploadInternship: true,
      uploadResearchPaper: true,
      uploadNPTEL: true,
      uploadGATE: true,
      uploadCAT: true,
      uploadPlacement: true
    }
  };

  const handleGetData = ()=>{
    return getInternShipData(dispatch);
  }

  const changeRole = (role) => {
    setUserRole(role);
  };

  const commonNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'viewReport', label: 'View Report' },
    { id: 'contactUs', label: 'Contact Us' }
  ];

  const uploadActions = {
    faculty: [
      { id: 'uploadMidSem', label: 'Upload Mid Sem Data' },
      { id: 'uploadAchievements', label: 'Upload Achievements Data' },
      { id: 'uploadPractical', label: 'Upload Practical Exams Data' },
      { id: 'uploadProficiency', label: 'Upload Proficiency Data' }
    ],
    admin: [
      { id: 'uploadInternship', label: 'Upload Internship Data' },
      { id: 'uploadResearchPaper', label: 'Upload Research Paper Data' },
      { id: 'uploadNPTEL', label: 'Upload NPTEL Data' },
      { id: 'uploadGATE', label: 'Upload GATE Exam Data' },
      { id: 'uploadCAT', label: 'Upload CAT Exam Data' },
      { id: 'uploadPlacement', label: 'Upload Placement Data' }
    ]
  };

  const handleUpload = (actionObj) => {
    console.log(`${actionObj.label} action triggered`);
    setCurrUploadFormId(()=>actionObj.id);
    setCurrUploadFormLabel(()=>actionObj.label)
    return document.getElementById('my_modal_1').showModal();
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#121212',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif' 
    }}>
      <div style={{ 
        backgroundColor: '#1E1E1E', 
        padding: '16px'
      }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold',
            margin: 0
          }}>Academic Dashboard</h1>
          <div style={{ 
            display: 'flex', 
            gap: '16px'
          }}>
            <button 
              onClick={() => changeRole('student')} 
              style={{ 
                padding: '8px 12px', 
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: userRole === 'student' ? '#ffffff' : '#2a2a2a',
                color: userRole === 'student' ? '#121212' : '#ffffff'
              }}
            >
              Student View
            </button>
            <button 
              onClick={() => changeRole('faculty')} 
              style={{ 
                padding: '8px 12px', 
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: userRole === 'faculty' ? '#ffffff' : '#2a2a2a',
                color: userRole === 'faculty' ? '#121212' : '#ffffff'
              }}
            >
              Faculty View
            </button>
            <button 
              onClick={() => changeRole('admin')} 
              style={{ 
                padding: '8px 12px', 
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: userRole === 'admin' ? '#ffffff' : '#2a2a2a',
                color: userRole === 'admin' ? '#121212' : '#ffffff'
              }}
            >
              Admin View
            </button>
          </div>
        </div>
      </div>

      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '16px'
      }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px'
        }}>
          <div style={{ 
            gridColumn: 'span 3',
            backgroundColor: '#1E1E1E',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ 
              fontSize: '14px',
              color: '#cccccc',
              marginBottom: '8px'
            }}>
              Logged in as: <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{userRole}</span>
            </div>
           
            <nav>
              <ul style={{ 
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {commonNavItems.map((item) => (
                  <li key={item.id} style={{ marginBottom: '8px' }}>
                  <button
                  onClick={handleGetData} 
                    // href={item.id === "home" ? "/" : `#${item.id}`} 
                    style={{ 
                      display: 'block',
                      padding: '8px',
                      borderRadius: '4px',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'background-color 0.2s',
                      backgroundColor: '#1E1E1E'
                    }}
                 
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#2a2a2a'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#1E1E1E'}
                  >
                    {item.label}
                  </button>
                    
                    {item.id === 'categoryWise' && (
                      <ul style={{ 
                        listStyle: 'none',
                        marginLeft: '16px',
                        marginTop: '4px',
                        padding: 0
                      }}>
                        {categories.map((category) => (
                          <li key={category} style={{ marginBottom: '4px' }}>
                            <a 
                              href={`#${category.toLowerCase().replace(' ', '-')}`} 
                              style={{ 
                                display: 'block',
                                padding: '4px 8px',
                                fontSize: '14px',
                                borderRadius: '4px',
                                color: '#cccccc',
                                textDecoration: 'none',
                                transition: 'background-color 0.2s',
                                hover: {
                                  backgroundColor: '#2a2a2a'
                                }
                              }}
                            >
                              {category}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                {(userRole === 'faculty' || userRole === 'admin') && (
                  <li style={{ 
                    borderTop: '1px solid #333333',
                    margin: '8px 0',
                    paddingTop: '8px'
                  }}>
                    <div style={{ 
                      fontSize: '14px',
                      fontWeight: 'medium',
                      color: '#cccccc',
                      marginBottom: '4px'
                    }}>Upload Actions</div>
                  </li>
                )}
                {userRole === 'faculty' && uploadActions.faculty.map((action) => (
                  <li key={action.id} style={{ marginBottom: '8px' }}>
                    <button 
                      onClick={() => handleUpload(action.id)} 
                      style={{ 
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px',
                        backgroundColor: '#1E1E1E',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                        hover: {
                          backgroundColor: '#2a2a2a'
                        }
                      }}
                    >
                      {action.label}
                    </button>
                  </li>
                ))}

                {uploadActions.admin.map((action) => (
                  <li key={action.id} style={{ marginBottom: '8px' }}>
                    <button 
                      onClick={() => handleUpload(action.id)} 
                      disabled={!roleAccess[userRole][action.id]}
                      style={{ 
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px',
                        backgroundColor: '#1E1E1E',
                        color: roleAccess[userRole][action.id] ? '#ffffff' : '#666666',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: roleAccess[userRole][action.id] ? 'pointer' : 'not-allowed',
                        transition: 'background-color 0.2s',
                        hover: {
                          backgroundColor: roleAccess[userRole][action.id] ? '#2a2a2a' : '#1E1E1E'
                        }
                      }}
                    >
                      {action.label}
                      {!roleAccess[userRole][action.id] && " (Disabled)"}
                    </button>
                  </li>
                ))}
                 
                {userRole === 'admin' && uploadActions.faculty.map((action) => (
                  <li key={action.id} style={{ marginBottom: '8px' }}>
                    <button 
                      disabled={true}
                      style={{ 
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px',
                        backgroundColor: '#1E1E1E',
                        color: '#666666',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'not-allowed'
                      }}
                    >
                      {action.label} (Disabled)
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div style={{ 
            gridColumn: 'span 9',
            backgroundColor: '#1E1E1E',
            borderRadius: '8px',
            padding: '24px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{ 
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '24px'
            }}>Dashboard Overview</h2>
            
            <div style={{ 
              marginBottom: '24px',
              padding: '16px',
              border: '1px solid #333333',
              borderRadius: '8px',
              backgroundColor: '#252525'
            }}>
              <h3 style={{ 
                fontWeight: 'medium',
                marginBottom: '12px'
              }}>Filters</h3>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px'
              }}>
                <div>
                  <label style={{ 
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'medium',
                    color: '#cccccc',
                    marginBottom: '4px'
                  }}>Year</label>
                  <select style={{ 
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #333333',
                    borderRadius: '4px',
                    backgroundColor: '#121212',
                    color: '#ffffff'
                  }}>
                    <option value="">Select Year</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ 
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'medium',
                    color: '#cccccc',
                    marginBottom: '4px'
                  }}>Branch/Department</label>
                  <select style={{ 
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #333333',
                    borderRadius: '4px',
                    backgroundColor: '#121212',
                    color: '#ffffff'
                  }}>
                    <option value="">Select Department</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ 
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'medium',
                    color: '#cccccc',
                    marginBottom: '4px'
                  }}>Category</label>
                  <select style={{ 
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #333333',
                    borderRadius: '4px',
                    backgroundColor: '#121212',
                    color: '#ffffff'
                  }}>
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button style={{ 
                marginTop: '16px',
                backgroundColor: '#2c5282',
                color: 'white',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                hover: {
                  backgroundColor: '#3182ce'
                }
              }}>
                Apply Filters
              </button>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ 
                fontWeight: 'bold',
                fontSize: '18px',
                marginBottom: '12px',
                textTransform: 'capitalize'
              }}>{userRole} Dashboard</h3>
              
              {userRole === 'student' && (
                <div style={{ 
                  padding: '16px',
                  backgroundColor: '#1a365d',
                  borderRadius: '8px'
                }}>
                  <p style={{ marginBottom: '8px' }}>Welcome to the Student Dashboard! Here you can:</p>
                  <ul style={{ 
                    listStyleType: 'disc',
                    marginLeft: '20px',
                    lineHeight: '1.5'
                  }}>
                    <li>View academic reports and performance metrics</li>
                    <li>Track your progress across different categories</li>
                    <li>Access internship and placement opportunities</li>
                    <li>View GATE and CAT preparation resources</li>
                  </ul>
                </div>
              )}

              {userRole === 'faculty' && (
                <div style={{ 
                  padding: '16px',
                  backgroundColor: '#1c4532',
                  borderRadius: '8px'
                }}>
                  <p style={{ marginBottom: '8px' }}>Welcome to the Faculty Dashboard! Here you can:</p>
                  <ul style={{ 
                    listStyleType: 'disc',
                    marginLeft: '20px',
                    lineHeight: '1.5'
                  }}>
                    <li>Upload and manage mid-semester examination data</li>
                    <li>Record student achievements and recognitions</li>
                    <li>Manage practical examination schedules and results</li>
                    <li>Update student proficiency assessments</li>
                  </ul>
                </div>
              )}

              {userRole === 'admin' && (
                <div style={{ 
                  padding: '16px',
                  backgroundColor: '#322659',
                  borderRadius: '8px'
                }}>
                  <p style={{ marginBottom: '8px' }}>Welcome to the Admin Dashboard! Here you can:</p>
                  <ul style={{ 
                    listStyleType: 'disc',
                    marginLeft: '20px',
                    lineHeight: '1.5'
                  }}>
                    <li>Manage institution-wide internship data</li>
                    <li>Track and update research paper publications</li>
                    <li>Monitor NPTEL course completion and certifications</li>
                    <li>Record GATE and CAT examination results</li>
                    <li>Update placement statistics and reports</li>
                  </ul>
                </div>
              )}
            </div>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              marginBottom: '24px'
            }}>
              <div style={{ 
                backgroundColor: '#1a365d',
                padding: '16px',
                borderRadius: '8px'
              }}>
                <h4 style={{ 
                  fontWeight: 'medium',
                  marginBottom: '4px'
                }}>Total Reports</h4>
                <p style={{ 
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>243</p>
              </div>
              <div style={{ 
                backgroundColor: '#1c4532',
                padding: '16px',
                borderRadius: '8px'
              }}>
                <h4 style={{ 
                  fontWeight: 'medium',
                  marginBottom: '4px'
                }}>Categories</h4>
                <p style={{ 
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>{categories.length}</p>
              </div>
              <div style={{ 
                backgroundColor: '#744210',
                padding: '16px',
                borderRadius: '8px'
              }}>
                <h4 style={{ 
                  fontWeight: 'medium',
                  marginBottom: '4px'
                }}>Departments</h4>
                <p style={{ 
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>{departments.length}</p>
              </div>
            </div>

            {(userRole === 'faculty' || userRole === 'admin') && (
              <div style={{ 
                border: '1px solid #333333',
                borderRadius: '8px',
                padding: '16px'
              }}>
                <h3 style={{ 
                  fontWeight: 'bold',
                  fontSize: '18px',
                  marginBottom: '12px'
                }}>Quick Upload</h3>
                <p style={{ 
                  color: '#aaaaaa',
                  marginBottom: '16px'
                }}>
                  Use this section to quickly upload data for your authorized categories.
                </p>
                
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '16px'
                }}>
                  {userRole === 'faculty' && (
                    <>
                      {uploadActions.faculty.map((action) => (
                        <button
                          key={action.id}
                          onClick={() => handleUpload(action)}
                          style={{ 
                            backgroundColor: '#2c5282',
                            color: 'white',
                            padding: '12px',
                            borderRadius: '4px',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.2s',
                            hover: {
                              backgroundColor: '#3182ce'
                            }
                          }}
                        >
                          {action.label}
                        </button>
                      ))}
                    </>
                  )}
                  
                  {userRole === 'admin' && (
                    <>
                      {uploadActions.admin.map((action) => (
                        <button
                          key={action.id}
                          onClick={() => handleUpload(action)}
                          style={{ 
                            backgroundColor: '#553c9a',
                            color: 'white',
                            padding: '12px',
                            borderRadius: '4px',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.2s',
                            hover: {
                              backgroundColor: '#6b46c1'
                            }
                          }}
                        >
                          {action.label}
                        </button>
                      ))}
                    </>
                  )}
                </div>
              </div>
            )}
            <InputModal actionId={currUploadFormId} action={currUploadFormLabel}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;