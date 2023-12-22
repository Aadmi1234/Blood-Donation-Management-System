create database blood_donation_management_system;
use blood_donation_management_system;

create table USERS (
    user_id int primary key auto_increment,
    fname varchar(15),
    lname varchar(15),
    address varchar(100),
    dob varchar(10),
    blood_grp varchar(3),
    sex char,
    phone varchar(10),
    email varchar(30)
);

create table CENTERS(
    center_id int primary key auto_increment,
    center_name varchar(30),
    city varchar(30),
    state varchar(30),
    address varchar(100)
);

create table APPOINTMENTS (
    app_id int primary key auto_increment,
    center_id int,
    user_id int,
    foreign key(center_id) references centers(center_id) on delete set null,
    foreign key(user_id) references users(user_id) on delete cascade,
    app_date varchar(10),
    app_time varchar(10)
);


-- describe users;
-- describe appointments;
-- describe centers;


insert into centers(center_name,city,state,address) values
("Borivali Blood Bank","Mumbai","Maharashtra","CTS 21/B, 1St Floor BMC market village, Mandapeshwar, Dahisar West, Mumbai, Maharashtra 400068"),
("Jeevaraksha Blood Bank","Bangalore","Karnataka","29-31, Cunningham Rd, Vasanth Nagar, Bengaluru, Karnataka 560051"),
("Sarthak Charitable Blood Bank","Lucknow","Uttar Pradesh","Narayan Plaza, CP-65, 1st Floor, Sector-B Engineering , Jankipuram, Lucknow, Uttar Pradesh 226021"),
("Plasma blood bank","Chennai","Tamil Nadu","70, 42/T1&T2 3rd Floor, Sindhoor 5th Street, 2nd St, X Block, Anna Nagar, Chennai, Tamil Nadu 600040"),
("M. R. Bangur Blood Bank","Kolkata","West Bengal","204/1B, Linton St, Entally, Kolkata, West Bengal 700014");



select * from centers;
select * from users;
select * from appointments;
select * from trigger_test;

create table trigger_test(
    message varchar(50)
);

create trigger trigger1
    after insert
    on users for each row
    begin
        insert into trigger_test values('user inserted!');
    end;

