package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/kagepedia/nextjs_go_mysql/server/controllers"
)

func handler(w http.ResponseWriter, r *http.Request) {
	text := "Kage."
	fmt.Fprint(w, "Hi there, I'm ", text)
}

func main() {
	http.HandleFunc("/", handler)
	http.HandleFunc("/news", controllers.GetNews)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
