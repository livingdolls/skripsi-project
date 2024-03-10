CREATE TABLE tb_user (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(255),
    password varchar(255),
    role_master int(11)
);

CREATE TABLE tb_jurnal (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    pengarang VARCHAR(255),
    tahun_terbit DATETIME,
    abstrak TEXT,
    kd_jurnal VARCHAR(255)
);

CREATE TABLE jurnal_casefolding (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    jurnal_id INT(11),
    title TEXT,
    token TEXT,
    kd_jurnal VARCHAR(255)
);

CREATE TABLE jurnal_tokenizing(
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    jurnal_id INT(11),
    token TEXT,
    kd_jurnal VARCHAR(255)
);

CREATE TABLE jurnal_filtering (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    jurnal_id INT(11),
    token TEXT,
    kd_jurnal VARCHAR(255)
);

CREATE TABLE jurnal_stemming (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    jurnal_id INT(11),
    token TEXT,
    kd_jurnal VARCHAR(255)
);

CREATE TABLE query (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    term TEXT
);

CREATE TABLE query_casefolding (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    term TEXT
);

CREATE TABLE query_tokenizing (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    token TEXT
);

CREATE TABLE query_filtering (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    token TEXT
);

CREATE TABLE query_stemming (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    token TEXT
);

CREATE TABLE jurnal_index (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    jurnal_id int(11),
    token TEXT,
    jumlah int(11),
    bobot FLOAT
);

CREATE TABLE query_index (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    term TEXT,
    jumlah int(11),
    bobot FLOAT
);

CREATE TABLE dot_product (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    jurnal_id INT(11),
    token TEXT,
    result_dot_product FLOAT
);

CREATE TABLE sum_dot_product (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    jurnal_id INT(11),
    dot_product FLOAT
);

CREATE TABLE query_cross_product (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    token text,
    result_query_cross_product FLOAT
);

CREATE TABLE query_sum_cross_product (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    result float
);

CREATE TABLE cross_product (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    jurnal_id int(11),
    result_cross_product FLOAT
);

CREATE TABLE sum_cross_product (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    jurnal_id INT(11),
    sum_cross_product FLOAT
);

CREATE TABLE akar_cross_product (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    jurnal_id INT(11),
    result_cross_product FLOAT,
    akar_result FLOAT
);

CREATE TABLE result_cosine_similarity (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    jurnal_id INT(11),
    cosine_similarity FLOAT
);