package main

import (
	"github.com/jinzhu/gorm"
	"time"
)

type ContactMessage struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

type JoinusApplicant struct {
	gorm.Model
	Salon    uint   `json:"salon"`
	Name     string `json:"name"`
	Mobile   string `json:"mobile"`
	Position string `json:"position"`
	WhyUs    string `json:"why_us"`
	Info     string `gorm:"-" json:"info"`
}

type ModelApplicant struct {
	gorm.Model
	Name   string `json:"name"`
	Mobile string `json:"mobile"`
	Info   string `json:"info"`
}

type TeamMember struct {
	ID        uint   `json:"id" gorm:"primary_key"`
	Salon     uint   `json:"salon"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Level     string `json:"level"`
	Image     string `json:"image"`
	Para1     string `json:"para_1"`
	Para2     string `json:"para_2"`
	Para3     string `json:"para_3"`
	FavStyle  string `json:"fav_style"`
	Product   string `json:"product"`
	Price     string `json:"price"`
	Position  uint   `json:"position"`
	Slug      string `json:"slug"`
}

type Review struct {
	ID     uint      `json:"id" gorm:"primary_key"`
	Date   time.Time `json:"date"`
	Salon  uint      `json:"salon"`
	Review string    `json:"review"`
	Client string    `json:"client"`
	Staff  string    `json:"staff"`
}

type MetaInfo struct {
	ID    uint   `json:"id" gorm: "primary_key"`
	Salon uint   `json:"salon"`
	Page  string `json:"page"`
	Title string `json:"title"`
	Text  string `json:"text"`
	Image string `json:"image"`
}

type Booking struct {
	ID        uint   `json:"id" gorm: "primary_key"`
	Salon     uint   `json:"salon"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Mobile    string `json:"mobile"`
	Stylist   string `json:"stylist"`
}

type Blog struct {
	Slug   string `json:"slug"`
	Date   string `json:"date"`
	Title  string `json:"title"`
	Image  string `json:"image"`
	Intro  string `json:"intro"`
	Body   string `json:"body"`
	Author string `json:"author"`
}
