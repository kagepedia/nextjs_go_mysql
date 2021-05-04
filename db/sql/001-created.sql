DROP TABLE IF EXISTS `t_news`;

CREATE TABLE IF NOT EXISTS `t_news` (
    `pk` INT(11) AUTO_INCREMENT PRIMARY KEY,
    `TITLE` VARCHAR(255) NOT NULL DEFAULT '',
    `CATEGORY` TINYINT(4) NOT NULL DEFAULT 0,
    `CONTENTS` TEXT NOT NULL,
    `CREATED_AT` DATETIME DEFAULT NULL,
    `UPDATE_AT` DATETIME DEFAULT NULL
);

INSERT INTO t_news VALUES(1, "タイトル１", 3, "テストデータが入ります。", "2021-03-28", "2021-03-28");
INSERT INTO t_news VALUES(2, "タイトル２", 1, "テストデータが入ります2。", "2021-03-29", "2021-04-01");
INSERT INTO t_news VALUES(3, "タイトル３", 5, "テストデータが入ります3。", "2021-03-24", "2021-04-20");
INSERT INTO t_news VALUES(4, "タイトル４", 4, "テストデータが入ります4。", "2021-03-22", "2021-04-18");
INSERT INTO t_news VALUES(5, "タイトル５", 3, "テストデータが入ります5。", "2021-03-21", "2021-04-13");
INSERT INTO t_news VALUES(5, "タイトル６", 2, "テストデータが入ります6。", "2021-03-27", "2021-04-28");