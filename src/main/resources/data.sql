-----BOOKS
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary) VALUES (0, -1, 'Cristianismo Puro e Simples', 'C. S. Lewis', 'Thomas Nelson Brasil', 2017, 'Tradução de: Mere Christianity');
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary) VALUES (0, -2, 'Cartas a Malcolm','C. S. Lewis','Thomas Nelson Brasil', 2019,'Tradução de: The Screwtape Letters');
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary) VALUES (0, -3, 'Cartas de um Diabo a seu Aprendiz','C. S. Lewis','Thomas Nelson Brasil', 2017,'Tradução de: Letters to Malcolm, chiefly on paper');
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary) VALUES (0, -4, 'O Arqueiro','Bernard Cornwell','Record', 2015,'A busca do graal; 1');
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary) VALUES (0, -5, 'O Andarilho','Bernard Cornwell','Record', 2015,'A busca do graal; 2');
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary) VALUES (0, -6, 'O Herege','Bernard Cornwell','Record', 2015,'A busca do graal; 3');
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary) VALUES (0, -7, 'O Rei do Inverno','Bernard Cornwell','Record', 2015,'As crônicas de Artur; v.1');
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary) VALUES (0, -8, 'O Inimigo de Deus','Bernard Cornwell','Record', 2015,'As crônicas de Artur; v.2');
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary) VALUES (0, -9, 'Excalibur','Bernard Cornwell','Record', 2015,'As crônicas de Artur; v.3');
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary) VALUES (0, -10, 'A Batalha do Apocalipse','Eduardo Spohr','Verus', 2014,'Tetralogia Angélica; v.1');
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary) VALUES (0, -11, 'Anjos da Morte','Eduardo Spohr','Verus', 2014,'Tetralogia Angélica; v.2');
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary) VALUES (0, -12, 'Paraíso Perdido','Eduardo Spohr','Verus', 2015,'Tetralogia Angélica; v.3');
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary) VALUES (0, -13, 'Herdeiros de Atlântida','Eduardo Spohr','Verus', 2015,'Tetralogia Angélica; v.4');
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary) VALUES (0, -14, 'Políticas Educacionais: conceitos e debates','Ângelo Ricardo de Souza; Andréa Barbosa Gouveia; Taís Moura Tavares','Appris', 2016,'Políticas Educacionais: conceitos e debates');
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary) VALUES (0, -15, 'Santo guerreiro: Roma Invicta','Eduardo Spohr','Verus', 2020,'Santo Guerreiro; 1');

-----EBOOKS
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary, format) VALUES (1, -16, 'O Conto da Aia', 'Margaret Atwood','Rocco', 2017,'Tradução de: The Handmaids Tale', 0);
INSERT INTO book (DTYPE, ID, name, authors, publisher, publish_year, summary, format) VALUES (1, -17, 'O Pequeno Príncipe', 'Antoine de Saint-Exupéry','Agir', 2009,'Tradução de: Le petit prince', 1);

-----INVENTORIES
INSERT INTO inventory (ID, quantity, BOOK_ID) VALUES (-1, 3, -15);  --Santo Guerreiro - Quantity:3
INSERT INTO inventory (ID, quantity, BOOK_ID) VALUES (-2, 2, -8);   --O Inimigo de Deus - Quantity:2