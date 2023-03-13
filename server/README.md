# DOCKER
Once in the docker cli to access the database write this comand:

    psql --host=database --username=postgres --dbname=agenda

If you want to list all the databases

    \l

To connect to a database:
    
    \c agenda

To see details of a specific table:

    \d [table name]


### Reference material:

[Stackoverflow: Using docker-compose to create tables in postgresql database](https://stackoverflow.com/questions/33309121/using-docker-compose-to-create-tables-in-postgresql-database)


### Dababase Information

Enums for finance type are:

        finance_id 1 --> food
        finance_id 2 --> bills
        finance_id 3 --> entertainment,
        finance_id 4 --> misc

We should reference these id when we add a grocery or when we make a user/finace relation
