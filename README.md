# MERN Project Setup

This guide will help you set up and install the MERN (MongoDB, Express.js, React, Node.js) project.

## Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Project Structure
```
mern-project/
│── backend/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│── frontend/
│   ├── src/
│   ├── public/
│   ├── sample/
│   │   ├── internship_data.csv
│   │   ├── placement_data.csv
│   │   ├── nptel_data.xlsx
│   ├── package.json
│── .gitignore
│── .env.sample
│── README.md
```

## Installation

### 1. Clone the Repository
```sh
git clone <repository_url>
cd elite_devs
```

### 2. Install Backend Dependencies
```sh
cd backend
npm install
```

### 3. Configure Environment Variables
Copy the `.env.sample` file and rename it to `.env`:
```sh
cp backend/.env.sample backend/.env
```
Then, update the `.env` file with your actual values.

### 4. Start the Backend Server
```sh
npm run dev
```

### 5. Install Frontend Dependencies
```sh
cd ../frontend
npm install
```

### 6. Start the Frontend Server
```sh
npm run dev
```

## Running the Full Stack Application

1. Open two terminals:
   - One for the backend (`cd backend && npm run dev`)
   - One for the frontend (`cd frontend && npm run dev`)
2. The backend runs on `http://localhost:5000`
3. The frontend runs on `http://localhost:3000`

## Additional Notes

- Ensure the `.env` file is correctly configured before running the project.
- A `sample` folder inside the `frontend` directory contains files for internship, placement, and NPTEL data. These files need to be uploaded in the **Admin Section** in a specific order to ensure correct data entry into the database.
- Recommended upload order:
  1. `internship_data.csv`
  2. `placement_data.csv`
  3. `nptel_data.xlsx`
- Incorrect upload order may result in data inconsistencies or failures.

## License

This project is licensed under the MIT License.
