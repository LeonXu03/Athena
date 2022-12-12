## `Project Folder Structure`

We should have files under group folders

1. server
   Athena API lives here. This is where routes and handlers live. Dependencies to packages like: net/http should live here.

2. model
   This is where Athena objects live. Structs defining objects like tickets and sprints should be defined here. This is a reference folder for other files.

3. repo
   This is where code to interact with the database lives.

4. service
   This is where web app logic lives. This is where data is manipulated and returned. For example, logic for endpoints should be implemented here.

5. seeds
   This is where SQL scripts & other files live. These files represent the base setup of Athena when the application is run from scratch. For example, we can have a file in seeds that creates an admin user in the database whenever it is ran (the files in seeds should ALWAYS be ran on startup).

## `Database`

Database: MySQL
