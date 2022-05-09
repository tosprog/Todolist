#TodoList


## Introduction


**A todo-list-app is a program that allows a user to keep track of a list of chores that must be completed. It can add, update, and delete information. It features a simple appearance and basic functions..**

## Prerequisites


* [Node.js (LTS)](https://nodejs.org/en/download/)
* [MySQL](https://www.mysql.com›downloads)
* [Code Editor of your Choice
* [Postman (For testing our api endpoints)](https://www.postman.com/downloads/)



**API endpoints:**

* **/api/tasks/create:** To create a task for a user ( method : POST)
* **/api/tasks/read :** To fetching all todos or tasks for a user (method : GET)
* **/api/tasks/:id :** To fetching a particular todo or task for a user (method : GET)
* **/api/tasks/update/id :** To updating a todo or task by task_id for a user ( method : PUT)
* **/api/tasks/delete/:id :** To deleting a todo or task for a user ( method: DELETE)

** Database Table**
CREATE TABLE tasks(
    id int NOT NULL AUTO_INCREMENT,
    task_name varchar(300) NOT NULL,
    task_description varchar(500) NOT NULL,
    task_priority varchar(500) NOT NULL,
    task_status varchar(20) NOT NULL,  
    PRIMARY KEY(id)     
) 


## Installation
    
```
    # Clone repository into local
    
    git clone https://github.com/tosprog/Todolist.git

    # Go to todo-list directory
    
    cd todo-list 

    # Install devDependencies
    
    npm i  or npm install 

    
    Database Configuration
    ============================================== 
    NAME = /* provide your database name */
    HOST = /* provide your host name */
    USER = /* provide your database user name */
    PASSWORD = /* provide your database password name */
    PORT = /* provide your port number to run express server */
    

    # Start the server
    
    npm run start


