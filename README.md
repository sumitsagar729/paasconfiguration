# PaaS Configuration

A Node.js Express application for managing PaaS (Platform as a Service) configuration.

## Features

- Express.js web framework
- MongoDB database integration
- Configurable database connection
- Client management workflow

## Configuration

### Database Connection

The application supports configurable MongoDB connection through environment variables:

- `MONGODB_CONNECTION_STRING`: MongoDB connection URL (default: `mongodb://localhost:27017/`)
- `MONGODB_DATABASE`: Database name (default: `paasconfiguration`)

### Usage

Set environment variables before starting the application:

```bash
export MONGODB_CONNECTION_STRING="mongodb://your-mongodb-host:27017/"
export MONGODB_DATABASE="your-database-name"
npm start
```

Or use inline environment variables:

```bash
MONGODB_CONNECTION_STRING="mongodb://your-mongodb-host:27017/" MONGODB_DATABASE="your-database-name" npm start
```

## Installation

```bash
npm install
npm start
```

The application will start on port 3000.

## Error Handling

The application includes proper error handling for database connection issues. If MongoDB is unavailable, the application will:

- Display a meaningful error message instead of crashing
- Continue serving other static content
- Log connection errors to the console