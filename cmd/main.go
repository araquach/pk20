package main

import (
	"flag"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/joho/godotenv"
	"html/template"
	"log"
	"net/http"
	"os"
)

var (
	tpl *template.Template
)

func dbConn() (db *gorm.DB) {
	db, err := gorm.Open("postgres", os.Getenv("DATABASE_URL"))
	if err != nil {
		panic(err)
	}
	return db
}

func init() {
	// loads values from .env into the system
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

func main() {
	var err error
	var dir string

	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("$PORT must be set")
	}

	db := dbConn()
	db.LogMode(true)
	db.AutoMigrate(&TeamMember{}, &JoinusApplicant{}, &ModelApplicant{}, &Review{}, &Booking{})
	db.Close()

	loadMetaData()

	tpl = template.Must(template.ParseFiles(
		"views/index.gohtml"))
	if err != nil {
		panic(err)
	}


	flag.StringVar(&dir, "dir", "dist", "the directory to serve files from")
	flag.Parse()
	r := mux.NewRouter()

	r.PathPrefix("/dist/").Handler(http.StripPrefix("/dist/", http.FileServer(http.Dir(dir))))
	r.HandleFunc("/api/team", apiTeam)
	r.HandleFunc("/api/team/{slug}", apiTeamMember)
	r.HandleFunc("/api/sendMessage", apiSendMessage)
	r.HandleFunc("/api/joinus", apiJoinus)
	r.HandleFunc("/api/models", apiModel)
	r.HandleFunc("/api/reviews/{tm}", apiReviews)
	r.HandleFunc("/api/bookings", apiBookings)
	r.HandleFunc("/api/blog-post/{slug}", apiBlogPost).Methods("GET")
	r.HandleFunc("/api/blog-posts", apiBlogPosts).Methods("GET")
	r.HandleFunc("/api/news-items", apiNewsItems).Methods("GET")
	r.HandleFunc("/{category}/{name}", home)
	r.HandleFunc("/{name}", home)
	r.HandleFunc("/", home)

	log.Printf("Starting server on %s", port)

	http.ListenAndServe(":" + port, forceSsl(r))
}
