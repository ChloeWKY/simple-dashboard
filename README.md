# Next.js & Django Charts Dashboard

This project is a full-stack web application that displays various charts (Candlestick, Line, Bar, and Pie) using a **Next.js** frontend integrated with a **Django API** backend. The data for the charts is fetched from the backend’s API, which provides hardcoded JSON data for the purposes of this coding test.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Libraries and Tools Used](#libraries-and-tools-used)
- [Project Approach and Thought Process](#project-approach-and-thought-process)
- [Error Handling](#error-handling)
- [Code Quality and Best Practices](#code-quality-and-best-practices)

## Project Structure
```plaintext
backend/
  └── charts/
      ├── migrations/
      ├── __init__.py
      ├── admin.py
      ├── apps.py
      ├── models.py
      ├── urls.py
      ├── views.py
  ├── asgi.py
  ├── settings.py
  ├── urls.py
  └── manage.py
frontend/
  └── src/
      ├── app/
          ├── components/
              ├── BarChartComponent.tsx
              ├── CandlestickChartComponent.tsx
              ├── LineChartComponent.tsx
              ├── PieChartComponent.tsx
              └── Dashboard.tsx
          ├── page.tsx
          ├── layout.tsx
      ├── globals.css
  ├── next.config.js
  ├── package.json
  ├── tsconfig.json
  └── .eslintrc.json
  ```
### Backend
- **Django**: Handles API creation. 
    - API Endpoints:
        - /api/candlestick-data/
        - /api/line-chart-data/
        - /api/bar-chart-data/
        - /api/pie-chart-data/

### Frontend
- **Next.js**: Renders the charts and interacts with the Django API.
	- **Chart Components**: Contains reusable chart components (LineChartComponent.tsx, BarChartComponent.tsx, etc.).
	- **Dashboard Component**: Displays all the charts together on a single page.

## Setup Instructions

### Backend (Django)
1.	Navigate to the backend directory: 
```
cd backend
```
2.	Install the required Python dependencies: 
```
pip install -r requirements.txt
```
3.	Run the Django development server: 
```
python manage.py runserver
```

The Django API will be available at `http://127.0.0.1:8000/`.

### Frontend (Next.js)

1.	Navigate to the frontend directory: 
```
cd frontend
```
2.	Install Node.js dependencies:
```
npm install
```
3.	Run the Next.js development server: 
```
npm run dev
```

The frontend will be available at `http://localhost:3000/`.

### Running Both Servers

Make sure both the **backend** and **frontend** servers are running simultaneously. Use two terminal windows to run both commands:
- Backend: `python manage.py` runserver
- Frontend: `npm run dev`

## Libraries and Tools Used

### Backend:
- **Django**: A Python web framework used for building the backend.
- **Django REST framework**: To create API endpoints.

### Frontend:
- **Next.js**: A React framework with built-in server-side rendering and API routes.
- **Chart.js**: A powerful charting library used to render the charts.
- **Axios**: For making API requests to the Django backend.
- **Tailwind CSS**: For styling the application and ensuring a responsive design.
- **TypeScript**: Adds type safety and improves code readability and maintainability.

## Project Approach and Thought Process

The project is designed with **separation of concerns** in mind, splitting the backend and frontend into distinct services:
1.	**Frontend (Next.js)**:
    - The UI is built using reusable components for each chart type (BarChartComponent, LineChartComponent, etc.).
	- Axios is used to fetch data from the Django backend and render the data dynamically in the charts using **Chart.js**.
	- **Tailwind CSS** ensures the layout is responsive and consistent across different screen sizes.
	- TypeScript provides type safety, ensuring better code quality and fewer bugs during development.
2.	**Backend (Django)**:
	- Django is used to create the API endpoints for serving chart data. The data is currently hardcoded for the purpose of this coding test.
	- Each endpoint follows the RESTful API structure and returns data in JSON format, suitable for consumption by the Next.js frontend.

## Error Handling

### API Error Handling:
- **Frontend**: When an API call fails (e.g., network issues or server errors), a friendly error message is displayed on the dashboard in place of the chart.
Example:
```
if (error) {
  return <p>Error fetching chart data.</p>;
}
```
- **Backend**: Django provides built-in error responses for failed API calls. In case of a failure, the frontend will receive a status code and message, which can be handled accordingly.

## Code Quality and Best Practices
- **TypeScript** is used throughout the Next.js application to ensure type safety and catch errors during development.
- **ESLint** and **Black** are used for enforcing coding standards and formatting the code, respectively.
- **Tailwind CSS** is used to avoid cluttering the components with inline styles and ensures a consistent, responsive design.