BEGIN ;
DROP TABLE IF EXISTS countries CASCADE;
DROP TABLE IF EXISTS teams CASCADE;

CREATE TABLE countries(
  id_countries SERIAL PRIMARY KEY ,
  country_name VARCHAR (255) NOT NULL,
  continent VARCHAR (255) NOT NULL
);
CREATE TABLE teams(
  id SERIAL PRIMARY KEY ,
  id_countries INT REFERENCES countries(id_countries),
  team_name TEXT,
  logo TEXT,
  description TEXT
);

INSERT INTO countries (country_name, continent) VALUES ('Spain','Europe');
INSERT INTO countries (country_name, continent) VALUES ('England','Europe');


INSERT INTO teams (team_name, logo,description) VALUES ('Atlético Madrid','public/assest/Atletico_Madrid.png','is a Spanish professional football club based in Madrid, that play in La Liga. The club play their home games at the Wanda Metropolitano, which has a capacity of 68,000.In terms of league titles won, most recently in 2014, Atlético Madrid are the third most successful club in Spanish football – behind Real Madrid and Barcelona. Atlético have won La Liga on 10 occasions, including a league and cup double in 1996; the Copa del Rey on 10 occasions; two Supercopas de España and one Copa Eva Duarte; in Europe, they won the European Cup Winners Cup in 1962, were runners-up in 1963 and 1986, were Champions League runners-up in 1974, 2014 and 2016,[5] won the Europa League in 2010, 2012 and 2018, and won the UEFA Super Cup in 2010, 2012 and 2018 as well as the 1974 Intercontinental Cup.');
INSERT INTO teams (team_name, logo,description) VALUES ('Barcelona','public/assest/FC_Barcelona.png',' is a Spanish professional football club based in Barcelona, Catalonia, Spain.
Founded in 1899 by a group of Swiss, Spanish, English, and Catalan footballers led by Joan Gamper, the club has become a symbol of Catalan culture and Catalanism, hence the motto "Més que un club" ("More than a club"). Unlike many other football clubs, the supporters own and operate Barcelona. It is the fourth-most valuable sports team in the world, worth $4.06 billion, and the worlds second-richest football club in terms of revenue, with an annual turnover of €690.4 million.The official Barcelona anthem is the "Cant del Barça", written by Jaume Picas and Josep Maria Espinàs.');
INSERT INTO teams (team_name, logo,description) VALUES ('Celta Vigo','public/assest/Celta_deVigo_logo.png','is a Spanish professional football club based in Vigo, Galicia, currently playing in La Liga. It was founded on 23 August 1923 following the merger of Real Vigo Sporting and Real Fortuna Football Club. Nicknamed Os Celestes (The Sky Blues), they play in sky blue shirts and socks along with white shorts. The clubs home stadium is the Abanca-Balaídos, which seats 29,000 spectators. Celta s name is derived from the Celts who were once present in the region. Its main rival is fellow Galician club Deportivo de La Coruña, with whom it contests the Galician derby.');
INSERT INTO teams (team_name, logo,description) VALUES ('Granada','public/assest/Granada.png','is a Spanish football club in Granada, in the autonomous community of Andalusia. Founded on 6 April 1931, it plays in the La Liga. The club plays its home matches at the Estadio Nuevo Los Cármenes.
Granada was the third Andalusian football team after Betis and Sevilla to compete in La Liga, in 1941–42. The team is located at position 24 of the historical points classification of the First Division, where it has participated in 20 seasons and finished in sixth place twice. Granada was Copa del Rey runner-up in 1959.');
INSERT INTO teams (team_name, logo,description) VALUES ('Real Betis','public/assest/Real_betis.png','is a Spanish football club based in Seville, in the autonomous community of Andalusia. Founded on 12 September 1907, it plays in La Liga, having won the Segunda División in the 2014–15 season. It holds home games at Estadio Benito Villamarín in the south of the city.
Real Betis won the league title in 1935 and the Copa del Rey in1977 and 2005. Given the clubs tumultuous history and many relegations, its motto is¡Viva el Betis aunque pierda!("Long live Betis even when they lose!"');
INSERT INTO teams (team_name, logo,description) VALUES ('Real Madrid','public/assest/Real_Madrid.png','is a Spanish professional football club based in Madrid.
Founded on 6 March 1902 as the Madrid Football Club, the club has traditionally worn a white home kit since inception. The word real is Spanish for "royal" and was bestowed to the club by King Alfonso XIII in 1920 together with the royal crown in the emblem. The team has played its home matches in the 81,044-capacity Santiago Bernabéu Stadium in downtown Madrid since 1947. Unlike most European sporting entities, Real Madrids members (socios) have owned and operated the club throughout its history.');
INSERT INTO teams (team_name, logo,description) VALUES ('Real Sociedad','public/assest/Real_Sociedad.png','is a Spanish football club based in the city of San Sebastián, Basque Country, founded on 7 September 1909. It plays its home matches at the Anoeta Stadium. Real Sociedad won the Liga title in 1980–81 and 1981–82, and last finished runners-up in 2002–03. The club has also won the Copa del Rey twice, in 1909 and 1987. It contests the Basque derby against rivals Athletic Bilbao. Real Sociedad were founder members of La Liga in 1929, and its longest spell in the top flight was for 40 seasons, from 1967 to 2007');



INSERT INTO teams (team_name, logo,description) VALUES ('Arsenal','public/assest/Arsenal_FC.png','is a professional football club based in Islington, London, England, that plays in the Premier League, the top flight of English football. The Club has won 13 League titles, a record 13 FA Cups, 2 League Cups, 15 FA Community Shields, 1 League Centenary Trophy, 1 UEFA Cup Winners Cup and 1 Inter-Cities Fairs Cup.
Arsenal was the first club from the South of England to join The Football League, in 1893, and they reached the First Divisionin 1904. Relegated only once, in 1913, they continue the longest streak in the top division,[4] and have won the second-most top-flight matches in English football history.[5] In the 1930s, Arsenal won five League Championships and two FA Cups, and another FA Cup and two Championships after the war. In 1970–71, they won their first League and FA Cup Double. Between 1989 and 2005, they won five League titles and five FA Cups, including two more Doubles. They completed the 20th century with the highest average league position.');

INSERT INTO teams (team_name, logo,description) VALUES ('Chelsea','public/assest/Chelsea.png','Is an English professional football club. Founded in 1905, they compete in the Premier League, the top division of English football. Chelsea are among Englands most successful clubs, having won over thirty competitive honours, including 6 top-flight titles, 8 FA Cups, 5 League Cups, 2 UEFA Europa Leagues, 2 UEFA Cup Winners Cups, 1 UEFA Champions League, and 1 UEFA Super Cup. Their home ground is Stamford Bridge in Fulham, London.');

INSERT INTO teams (team_name, logo,description) VALUES ('Liverpool','public/assest/Liverpool.png','is a professional football club in Liverpool, England, that competes in the Premier League, the top tier of English football. The club has won 6 European Cups, more than any other English club, 3 UEFA Cups, 3 UEFA Super Cups, 18 League titles, 7 FA Cups, a record 8 League Cups, 15 FA Community Shields and 1 Football League Super Cup.
Founded in 1892, the club joined the Football League the following year and has played at Anfield since its formation. Liverpool established itself as a major force in English and European football in the 1970s and 1980s when Bill Shankly, Bob Paisley, Joe Fagan and Kenny Dalglish led the club to a combined eleven League titles and four European Cups. Under the management of Rafael Benítez and captained by homegrown player Steven Gerrard, Liverpool became European champions for the fifth time in 2005 before adding a sixth crown under Jürgen Klopp in 2019.');

INSERT INTO teams (team_name, logo,description) VALUES ('Manchester City','public/assest/Manchester_City.png','is an English football club based in Manchester, that competes in the Premier League, the top flight of English football. Founded in 1880 as it became Ardwick Association Football Club in 1887 and Manchester City in 1894. The clubs home ground is the City of Manchester Stadium in east Manchester, to which it moved in 2003, having played at Maine Road since 1923.Manchester City entered the Football League in 1899, and won their first major honour with the FA Cup in 1904. It had its first major period of success in the late 1960s, winning the League, FA Cup and League Cup under the management of Joe Mercer and Malcolm Allison. After losing the 1981 FA Cup Final, the club went through a period of decline, which eventually saw them relegated as far down as third tier of English football by the end of the 1997–98 season. They since regained promotion to the top tier in 2001–02 and have remained a fixture in the Premier League since 2002–03. In 2008, Manchester City was purchased by Abu Dhabi United Group for £210 million and received considerable financial investment.' );

COMMIT;
