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
#### Creating a Duty
- Navigate to the duties section
- Enter the name of the duty and click "Create"

#### Updating a Duty
- Click on the "Update" button next to a duty
- Modify the name and confirm the update

#### Deleting a Duty
- Click on the "Delete" button next to a duty
- Confirm the deletion in the modal

### Testing
#### Backend
To run the backend tests, execute the following command:
~~~bash
docker compose exec backend npm test
~~~

#### Frontend
To run the frontend tests, execute the following command:
~~~bash
docker compose --profile test run frontend-test
~~~

## Built With
- React
- TypeScript
- Ant Design
- Node.js
- Express
- PostgreSQL
- Docker

## Author
Francisco Veragua