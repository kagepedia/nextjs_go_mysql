package database

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

func Connect() *sql.DB {
	db, err := sql.Open("mysql", "root:password@tcp(nextjs_go_mysql_db_1:3306)/sample_db?charset=utf8&parseTime=true&loc=Asia%2FTokyo")
	if err != nil {
		log.Fatal(err)
	}

	return db
}
