# toduties

## Description
"toduties" is an end-to-end web application that allows users to manage a to-do list of duties. The application supports creating, reading, updating, and deleting duties. The frontend is developed in React with TypeScript and Ant Design components, while the backend is built with Node.js and TypeScript, using PostgreSQL for data storage. The entire application is dockerized for easy deployment.

## Getting Started
### Prerequisites
Ensure you have Docker installed on your system. Follow the instructions for your operating system below:

#### Installing Docker
#### Windows:

1. Download Docker Desktop from the [Docker Website](https://docs.docker.com/desktop/install/windows-install/)
2. Run the installer and follow the instructions
3. Once installed, start Docker Desktop

#### macOS:

1. Download Docker Desktop from the [Docker Website](https://docs.docker.com/desktop/install/mac-install/)
2. Open the .dmg file and drag Docker to the Applications folder
3. Start Docker Desktop from the Applications folder

#### Linux:

1. Install docker engine for the distribution you use from the official [Docker Website](https://docs.docker.com/engine/install/)
2. Restart your terminal

### Installation

1. Clone the repository:
~~~bash
git clone https://github.com/fv-apeiroo/toduties.git
cd toduties
~~~

2. Build and run the application using Docker Compose:
~~~bash
docker compose up --build
~~~

### Configuration
The application uses environment variables for configuration. For production environments, it is critical to keep the .env file out of version control to protect sensitive information. However, for this technical test, the .env file is included to provide all necessary configurations right away. You can set your own credentials as desired.

Ensure you have a .env file in the backend directory with the following content:
~~~bash
DB_HOST=db
DB_PORT=5432
POSTGRES_DB=toduties
POSTGRES_USER=todutiesuser
POSTGRES_PASSWORD=todutiespassword
PORT=5000
~~~

### Running the Application
After running docker-compose up --build, the services will be available at the following URLs:

- Frontend: http://localhost:8081
- Backend API: http://localhost:5000/api/duties

### Usage (screenshots)
![image](https://github.com/fv-apeiroo/toduties/assets/109788768/766f8a8b-4b3e-48b7-a250-799eef65c695)

![image](https://github.com/fv-apeiroo/toduties/assets/109788768/d29d49a2-0408-4301-90b8-8c710a1d5a9f)

#### Creating a Duty
- Navigate to the duties section
- Enter the name of the duty and click "Create"

![image](https://github.com/fv-apeiroo/toduties/assets/109788768/220784c9-62a1-45db-b718-291170f44a6e)

![image](https://github.com/fv-apeiroo/toduties/assets/109788768/360bbaa4-790f-4b80-862c-250039446980)

#### Updating a Duty
- Click on the "Update" button next to a duty
- Modify the name and confirm the update

![image](https://github.com/fv-apeiroo/toduties/assets/109788768/3eb890d7-0237-41c1-a2b0-11fca6d4ee6e)

![image](https://github.com/fv-apeiroo/toduties/assets/109788768/260d912c-55e0-40c1-a170-6122a47457a2)

![image](https://github.com/fv-apeiroo/toduties/assets/109788768/c8dba533-9f6c-4e2c-b4c1-b84049aedecf)

#### Deleting a Duty
- Click on the "Delete" button next to a duty
- Confirm the deletion in the modal

![image](https://github.com/fv-apeiroo/toduties/assets/109788768/459af816-6fa1-4645-9248-e277426c37b2)

![image](https://github.com/fv-apeiroo/toduties/assets/109788768/2b98269c-b562-435e-993d-3bf7835265ca)

![image](https://github.com/fv-apeiroo/toduties/assets/109788768/b848838d-1c0a-4dbc-9b7e-82994b8cc8b4)

### Testing
#### Backend
To run the backend tests, execute the following command:
~~~bash
docker compose exec backend npm test
~~~

![image](https://github.com/fv-apeiroo/toduties/assets/109788768/739e3ddc-2159-4d7e-85af-33d4c3368bea)

#### Frontend
To run the frontend tests, execute the following command:
~~~bash
docker compose --profile test run frontend-test
~~~

![image](https://github.com/fv-apeiroo/toduties/assets/109788768/b7a718cd-f314-45b0-a9d1-491a61d7e7bd)

## Built With
- React
- TypeScript
- Ant Design
- Node.js
- Express
- PostgreSQL
- Docker

## Architecture and Design Considerations
To ensure that the toduties application can grow and scale over time, the following architectural and design principles have been applied:
### Layered Architecture
The application follows a layered architecture, separating concerns across different layers to enhance maintainability and scalability.

#### Database Layer:
- PostgreSQL is used as the relational database management system (RDBMS) to store duties.
- Plain SQL queries are used instead of ORM to have full control over the database interactions.

#### Backend Layer:
- Built with Node.js and Express, and written in TypeScript to ensure type safety and better code maintainability.
- The backend is structured into controllers, services, and routes to separate different concerns:
  - Controllers handle HTTP requests and responses.
  - Services contain the business logic.
  - Routes define the endpoints and map them to controllers.

#### Frontend Layer:
- Developed using React with TypeScript in strict mode to catch errors early in the development process.
- Ant Design is used as the component library for a consistent and professional user interface.
- State management is handled using React's local state and context API to avoid complexity.
- Client-side routing is used to manage navigation within the application.

### Scalability
The use of Docker ensures that the application can be deployed consistently across different environments and scales efficiently.

### Docker Integration
Docker is utilized to containerize the application, ensuring consistent environments across different stages of development, testing, and production.

## Author
Francisco Veragua
