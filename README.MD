# Hospital Management System Frontend Project

This is the **frontend** of the **Hospital Management System**, built using **HTML**, **CSS (Bootstrap 5)**, and **JavaScript**.  
It is designed to provide an interactive and responsive interface for **patients** and **staff** to manage appointments, profiles, and other hospital services. 

---

## Features

### User Authentication
- Login / Register (Patients & Staff)

### Appointment Management
- Book, edit, or cancel appointments
- View appointment history (for both patients & staff)

### Patient & Staff Dashboards
- View and update profiles
- Manage wards and schedules *(Staff only)*
- Access to medical records *(Patients)*

### Responsive UI
- Built using **Bootstrap 5**
- Mobile-first design with responsive layouts

---

## API Integration

This frontend communicates with **backend microservices** via REST APIs:
- Built using **Node.js**, **Express**, and **MongoDB**
- Docker-based microservices with dedicated ports

> Make sure your backend containers are running before starting the frontend.


## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Shoaiibahmed/hms-frontend.git
cd HMS-Frontend
```
### 2. Build & Run the Frontend Using Docker

Make sure Docker is installed and running.

```bash
docker build -t hms-frontend .
docker run -d -p 8080:80 hms-frontend
```
After running the Docker container, open your browser and navigate to:
http://localhost:8080
You will see the Hospital Management System frontend interface served on port 8080.
Additionally, you can verify the running container and exposed ports through your Docker Desktop dashboard, where each service and its corresponding port are listed



