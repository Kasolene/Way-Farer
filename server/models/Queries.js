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

export const signinQuery = values => ({
        text: 'select * from users where email = $1',
        values,
    });


export const createTripTable = {text : `CREATE TABLE trips (
    tripid serial primary key,
    buslicensenumber varchar(50) not null,
    seatingcapacity int not null,
    origin varchar(50) not null,
    destination varchar(50) not null,
    tripdate date not null,
    fare float(4) not null,
    status varchar(20) not null
)`};

export const tripQuery = values => ({
    text : 'insert into trips (buslicensenumber, seatingcapacity, origin, destination, tripdate, fare, status) values ($1, $2, $3, $4, $5, $6, $7) returning *',
    values,
    });


