CREATE TABLE tasks(
    id int NOT NULL AUTO_INCREMENT,
    task_name varchar(300) NOT NULL,
    task_description varchar(500) NOT NULL,
    task_priority varchar(500) NOT NULL,
    task_status varchar(20) NOT NULL,  
    PRIMARY KEY(id)     
)