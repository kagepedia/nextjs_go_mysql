package models

import "time"

type News struct {
	Pk         int       `json:"pk"`
	Title      string    `json:"title"`
	Category   int       `json:"category"`
	Contents   string    `json:"contents"`
	Created_at time.Time `json:"created_at"`
	Update_at  time.Time `json:"update_at"`
}

// 新規登録 Create エラーを返す
func Create(title string, category int, contents string) error {
	var err error
	return err
}

// 条件に当て嵌まる全てのデータを取り出す FindAll データの配列・エラーを返す
func FindAll() ([]News, error) {
	var err error
	var result []News
	return result, err
}

// 指定したpkのデータを取得 GetById 配列・エラーを返す
func GetByPk(pk int) (News, error) {
	var err error
	result := News{}
	return result, err
}

// 更新 Update エラーを返す
func Update(pk int, title string, category int, contents string) error {
	var err error
	// 更新する値が無ければスルーする
	return err
}

// 削除 Delete エラーを返す
func Delete(pk int) error {
	var err error
	return err
}
