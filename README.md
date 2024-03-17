# Dashboard Project README

## Overview

This dashboard project is designed to provide users with a comprehensive view of data fetched from multiple APIs. The dashboard consists of three tabs, each containing four dropdown menus. Upon selecting data from these dropdowns, additional API calls are made to retrieve relevant information, which is then displayed on tiles within the dashboard.

![dashboard_project_screenshot](https://github.com/tripti7033/dashboard___project/assets/139527960/fe735459-a20e-4203-911d-1312cc569941)

## Features

- **Tab Navigation**: Users can navigate between three tabs, each representing a different aspect of the data.
- **Dropdown Selection**: Within each tab, there are four dropdown menus allowing users to select specific parameters.
- **API Integration**: The dashboard fetches data from various APIs based on user selections.
- **Tile Display**: Selected data is visualized on tiles within the dashboard, providing users with a clear representation of the information.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, React.js, material-ui
- **Backend**: Node.js, express-js, Typeorm
- **Database**: postgreSQL
  
## Installation

1. Clone the repository:
   
   ```bash
   https://github.com/tripti7033/Resume-Builder
   ```
   
2. Install dependencies for frontend:

   ```bash
    cd Resume-Builder/clientt
    npm install
  ```

3. Install dependencies for backend:

   ```bash
   cd ../server
   npm install
   ```

4. Set up the database:
   
   ```bash
   Install Postgres Database if not already installed.
   Create a new database named 'resumeBuilder'.
   ```

5. Start the backend server:

   ```bash
    npm run dev
    ```

6. Start the frontend development server:
   
   ```bash
    cd ../clientt
    npm start
   ```
   
7. Access the application in your web browser at `http://localhost:3000`.

## Usage

1. **Select Tab**: Choose one of the three tabs to view different sets of data.
2. **Dropdown Selection**: Within each tab, use the dropdown menus to select specific parameters.
3. **View Data**: The dashboard will display the relevant data on tiles based on your selections.
