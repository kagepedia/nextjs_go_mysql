package controllers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/kagepedia/nextjs_go_mysql/server/models"
	"github.com/kagepedia/nextjs_go_mysql/server/utils/database"
)

// 取得
func GetNews(w http.ResponseWriter, r *http.Request) {

	db := database.Connect()
	defer db.Close()

	// models.FindAll()

	rows, err := db.Query("SELECT * FROM t_news")
	if err != nil {
		log.Fatal(err)
	}

	var newsResult []*models.News
	for rows.Next() {
		news := models.News{}
		if err := rows.Scan(&news.Pk, &news.Title, &news.Category, &news.Contents, &news.Created_at, &news.Update_at); err != nil {
			log.Fatal(err)
		}
		newsResult = append(newsResult, &news)
		// フロント用に加工する処理を入れる
	}

	newsResultCopy := newsResult

	// interface
	// var result map[string]interface{}
	for i, v := range newsResultCopy {
		fmt.Println(i, v)
	}

	json.NewEncoder(w).Encode(newsResultCopy)
}

// list 一覧
// form 新規/編集入力フォーム
// comfirm 確認画面
// complete 完了（リダイレクト）
// show 詳細
// destroy 削除（リダイレクト）詳細→削除の流れ
