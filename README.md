## HomebaseTHA
This take-home assignment is designed to assess your skills in backend development, with a focus on technologies such as Node.js, Python, Express, and Django. It's a comprehensive task that will allow you to demonstrate your proficiency in building REST APIs and handling data management operations.

## Description
- This is a Rest API application implemented with Node.js and using Express framework.
- I use sqlite3 for SQLite database, there is one table name 'users'. I dont use any ORM library, just raw SQL query.
- The API is used for CRUD operation with **users** (id, name, age) table. 

## API endpoints
| Method     |   Endpoints      |
| ---        |---               |
|Get         | /api/Users       |
|GetUserByID | /api/Users/:id   |
|Post        | /api/Users       |
|Put         | /api/Users/:id   |
|Patch       | /api/Users/:id   |
|Delete      | /api/Users/:id   |

I have the predefined API in Postman, see `HomeBaseTHA.postman_collection.json`
We only need to import the above .json file to Postman to play with it.

## How to run code
1. Install Node.js from https://nodejs.org/en/download
2. Install express: npm install express
3. Install SQLite: npm install sqlite3
4. Run command: `npm start`


What happen when the code is run:
- Database: The script in file `database.js` will run and created a table name **users** and insert some test values into it. It will look like this:

|id| name   | age|
|--| ---    | --|
|1 | Tom    | 20 |
|2 | Jerry  | 15 |
|3 | Mickey | 34 |
|4 | Donald | 52 |

- API: Upon calling the API, it will enter the **Route** and subsequently navigate towards the corresponding **Controller**. The **Controller** will then execute its task and, if necessary, invoke the **Model** for database interaction.