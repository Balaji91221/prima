# Prisma TypeScript Project with PostgreSQL

This project demonstrates how to use Prisma with PostgreSQL to create, update, and manage user data. The project includes TypeScript scripts for inserting and updating users in the database.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a PostgreSQL database set up.
- You have created a `.env` file with your database connection URL.

## Setting Up the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Balaji91221/prisma.git
   cd  prisma
   ```

2. **Install the dependencies**
    ```bash
    npm install
    ```
3.**Set Up Prisma**

- Generate the Prisma client:

```bash
npx prisma generate
```
4.**Run Migrations**

- Apply the database migrations:

```bash
npx prisma migrate dev --name UserAndTodoAdded

```

5.**Transpile TypeScript**
- Compile the TypeScript files:
```bash
tsc -b
```

6.**Running the Project**

- To run the project, use the following command:
```bash
node dist/index.js
```

## Insert Action

The **insert action** involves adding new records to the database, such as creating a new user with details like `username`, `password`, and `name`, using Prisma's `create` method and providing feedback on successful creation.

## Update Action

The **update action** modifies existing records, such as changing a user's `name`, by identifying the user via a unique identifier like `username`, collecting new data, using Prisma's `update` method, and providing feedback on the successful update.

## Remove Action

The **remove action** deletes records from the database, such as removing a user, by identifying the user via a unique identifier like `username` or `id`, using Prisma's `delete` method, and providing feedback on successful deletion.

## Create Action

The **create action** encompasses inserting new records and possibly multiple related records, such as creating a user or to-do item with details like `username`, `password`, and `name` for users or `title`, `description`, and `userId` for to-do items, using Prisma's `create` method and providing feedback on successful creation.


## Database URL
If you are using NeonTech for your PostgreSQL database, follow these steps to get your database URL:

- Log in to your NeonTech account.

- Navigate to your project dashboard.

- Locate your PostgreSQL instance and find the connection details.

- Copy the provided database URL.

- Create a .env file in the root directory of your project and add the following line: