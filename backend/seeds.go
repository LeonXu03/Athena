package backend

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

const (
	username = "root"
	password = "xxxx" //this is the password set on MySQL installation
	hostname = "127.0.0.1:3306"
	dbname   = "athena"
)

// Create data source name for DB connection
func createDSN(dbName string) string {
	return fmt.Sprintf("%s:%s@tcp(%s)/%s", username, password, hostname, dbName)
}

// Create database with dbname
func createDB(conn *sql.DB) error {
	ctx, cancelfunc := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancelfunc()

	log.Printf("Dropping %s db if it exists", dbname)
	_, err := conn.ExecContext(ctx, "DROP DATABASE IF EXISTS "+dbname)
	if err != nil {
		log.Printf("Error %s when dropping DB %s\n", err, dbname)
		return err
	}

	log.Printf("Creating %s db", dbname)
	_, err = conn.ExecContext(ctx, "CREATE DATABASE IF NOT EXISTS "+dbname)
	if err != nil {
		log.Printf("Error %s when creating DB %s\n", err, dbname)
		return err
	}
	log.Printf("Successfully created %s database", dbname)

	return nil
}

// create seed tables for athena db
func createBasicTables(athenaDB *sql.DB) error {
	log.Print("Creating user table")

	query := `CREATE TABLE IF NOT EXISTS user(
		id VARCHAR(36) PRIMARY KEY,
		firstName VARCHAR(100) NOT NULL,
		lastName VARCHAR(100) NOT NULL,
		fullName VARCHAR(100) NOT NULL,
		username VARCHAR(100) NOT NULL,
		password VARCHAR(100) NOT NULL,
		createdAt datetime default CURRENT_TIMESTAMP, 
		updatedAt datetime default CURRENT_TIMESTAMP)`

	ctx, cancelfunc := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancelfunc()
	_, err := athenaDB.ExecContext(ctx, query)
	if err != nil {
		log.Printf("Error %s when creating user table", err)
		return err
	}
	log.Print("Created user table successfully")

	return nil
}

// get athena db connection
func getAthenaDB() (*sql.DB, error) {
	//connect to athena db
	athenaDB, err := sql.Open("mysql", createDSN(dbname))
	if err != nil {
		log.Printf("Error %s when opening athena DB", err)
		return nil, err
	}

	//ping to check connection to athena db
	ctx, cancelfunc := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancelfunc()
	err = athenaDB.PingContext(ctx)
	if err != nil {
		log.Printf("Errors %s pinging DB", err)
		return nil, err
	}
	log.Printf("Connected to DB %s successfully\n", dbname)

	return athenaDB, nil
}

func main() {
	fmt.Println("Start setting up Athena MySQL database")

	//open & return connection to MySQL
	conn, err := sql.Open("mysql", createDSN(""))
	if err != nil {
		log.Printf("Error %s when connecting to MySQL\n", err)
		return
	}
	defer conn.Close()

	//create athena db
	err = createDB(conn)
	if err != nil {
		log.Printf("Error creating db")
		return
	}
	conn.Close()

	//connect to athena db
	athenaDB, err := getAthenaDB()
	if err != nil {
		log.Printf("Error connecting to athena db")
		return
	}

	//generate basic tables
	err = createBasicTables(athenaDB)
	if err != nil {
		log.Printf("Failed creating basic tables with error %s", err)
		return
	}
}
