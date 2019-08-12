export const createUserTable = {text : `CREATE TABLE users (
    token varchar(255),
    userid serial primary key ,
    email varchar(50) null unique,
    firstname varchar(50) not null,
    lastname varchar(50) not null,
    password varchar(255) not null,
    isadmin boolean not null default false
)`};

export const signupQuery = values => ({
text : 'insert into users (token, email, firstname, lastname, password, isadmin) values ($1, $2, $3, $4, $5, $6) returning *',
values,
});

