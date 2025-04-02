# Analog Magic Backend

This is the backend for the Analog Magic project, built with NestJS, GraphQL, and MongoDB.

## Quick Start with Docker

The easiest way to run this project is using Docker. This approach ensures that the application and database run in an isolated environment with the correct configuration.

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop/) installed on your machine
- [Docker Compose](https://docs.docker.com/compose/install/) (usually comes with Docker Desktop)

### Running the Application

1. Start the application and database with Docker Compose:

   ```bash
   docker-compose up -d
   ```

2. Seed the database with initial data:

   ```bash
   docker exec -it analog-app npm run seed
   ```

3. Access the GraphQL playground:
   - Open your browser and navigate to [http://localhost:3000/graphql](http://localhost:3000/graphql)
   - Try running queries like

### Stopping the Application

```bash
docker-compose down
```

## Development Setup

### Running the Application Locally

If you prefer to run the application directly on your machine:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Make sure MongoDB is running. You can use Docker for the database only:

   ```bash
   docker-compose up -d mongo
   ```

3. Update your `.env` file to connect to MongoDB:

   ```
   MONGODB_URI=mongodb://root:example@localhost:27017/analog_db?authSource=admin
   ```

4. Start the application in development mode:

   ```bash
   npm run start:dev
   ```

5. Seed the database:
   ```bash
   npm run seed
   ```

### Docker Configuration

The project includes:

- `Dockerfile` - Production build
- `Dockerfile.dev` - Development build with hot-reload
- `docker-compose.yml` - Configuration for running the full stack

#### Docker Compose Services:

- `app` - NestJS application
- `mongo` - MongoDB database

## GraphQL API

The API is implemented using GraphQL with NestJS. Key queries include:

- `courses`: Returns all courses
- `course(id)`: Returns a single course by ID

## Development Tools

### Available npm Scripts

- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with hot-reload
- `npm run build` - Build the application
- `npm run seed` - Seed the database with initial data
- `npm run test` - Run tests

## Troubleshooting

### Common Issues

1. **Connection Issues with MongoDB**:

   - If running the app locally, make sure to use `localhost` instead of `mongo` in your connection string
   - Verify the MongoDB container is running with `docker ps`

2. **Empty Data Responses**:

   - Make sure you've run the seed script: `docker exec -it analog-app npm run seed`

3. **Docker Build Failures**:
   - Try rebuilding the images: `docker-compose build --no-cache`

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
