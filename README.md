









### Installation

- Clone the repository
- npm install
- Run the db/schema.sql file to generate the database for sequelize to setup.
- Create .env file and place your configuration in that new file. 
- Default config is a local db and node_env set to develop


### Configuration

The .env file is looking for 4-5 supplied arguments. 

- DB_NAME: The name of the local database to connect to
- DB_USER: The user of the local database to connect as
- DB_PASSWORD: The password for the above.
- JAWSDB_URL: The live production database
- NODE_ENV: The enviroment the application is running in:
	- 'develop': run with full logs
	- 'production': only show errors

- Note: If JAWSDB_URL is supplied, it will take precedence over the supplied local database.
