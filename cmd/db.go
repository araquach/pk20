package main

import (
	"bufio"
	"encoding/csv"
	"io"
	"log"
	"os"
	"path/filepath"
	"strconv"
)

func loadTeamMembers() {
	var err error
	var teamMembers []TeamMember

	db := dbConn()
	db.LogMode(true)
	db.AutoMigrate(&TeamMember{})
	db.Close()

	var files []string

	root := "data/csv/team_members"
	err = filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
		if info.IsDir() {
			return nil
		}
		files = append(files, path)
		return nil
	})

	if err != nil {
		panic(err)
	}
	for _, file := range files {
		csvFile, _ := os.Open(file)

		reader := csv.NewReader(bufio.NewReader(csvFile))
		for {
			line, error := reader.Read()
			if error == io.EOF {
				break
			} else if error != nil {
				log.Fatal(error)
			}

			teamMembers = append(teamMembers, TeamMember{
				Salon: line[0],
				FirstName: line[1],
				LastName: line[2],
				Level: line[3],
				LevelName: line[4],
				Image: line[5],
				RemoteImage: line[6],
				Para1: line[7],
				Para2: line[8],
				Para3: line[9],
				FavStyle: line[10],
				Product: line[11],
				Price: line[12],
				Position: line[13],
				Slug: line[14],
			})
		}
	}

	for _, m := range teamMembers {
		db = dbConn()
		db.LogMode(true)
		db.Create(&m)
		if err != nil {
			log.Println(err)
		}
		db.Close()
	}
}

func loadMetaInfo() {
	var err error
	var metaInfos []MetaInfo

	db := dbConn()
	db.LogMode(true)
	db.AutoMigrate(&MetaInfo{})
	db.Close()

	var files []string

	root := "data/csv/meta_infos"
	err = filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
		if info.IsDir() {
			return nil
		}
		files = append(files, path)
		return nil
	})

	if err != nil {
		panic(err)
	}
	for _, file := range files {
		csvFile, _ := os.Open(file)

		reader := csv.NewReader(bufio.NewReader(csvFile))
		for {
			line, error := reader.Read()
			if error == io.EOF {
				break
			} else if error != nil {
				log.Fatal(error)
			}

			salon, _ := strconv.Atoi(line[4])
			metaInfos = append(metaInfos, MetaInfo{
				Salon: uint(salon),
				Page:  line[0],
				Title: line[1],
				Text:  line[2],
				Image: line[3],
			})
		}
	}

	for _, m := range metaInfos {
		db = dbConn()
		db.LogMode(true)
		db.Create(&m)
		if err != nil {
			log.Println(err)
		}
		db.Close()
	}
}
