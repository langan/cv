// Postgres SQL
CREATE TABLE IF NOT EXISTS cv_skill_types(id SERIAL PRIMARY KEY, name TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS cv_skills(id SERIAL PRIMARY KEY, name TEXT NOT NULL, type_id INT NOT NULL, FOREIGN KEY(type_id) REFERENCES cv_skill_types(id));

INSERT INTO cv_skill_types(name) VALUES('Skills');
INSERT INTO cv_skill_types(name) VALUES('Frameworks');
INSERT INTO cv_skill_types(name) VALUES('Knowledge');
INSERT INTO cv_skill_types(name) VALUES('Cloud');

INSERT INTO cv_skills(name, type_id) VALUES('Node.js', 1);
INSERT INTO cv_skills(name, type_id) VALUES('React', 1);
INSERT INTO cv_skills(name, type_id) VALUES('TypeScript', 1);
INSERT INTO cv_skills(name, type_id) VALUES('JavaScript', 1);
INSERT INTO cv_skills(name, type_id) VALUES('HTML', 1);
INSERT INTO cv_skills(name, type_id) VALUES('CSS', 1);

INSERT INTO cv_skills(name, type_id) VALUES('NestJS', 2);
INSERT INTO cv_skills(name, type_id) VALUES('Nx', 2);
INSERT INTO cv_skills(name, type_id) VALUES('Next.js', 2);
INSERT INTO cv_skills(name, type_id) VALUES('Jest', 2);
INSERT INTO cv_skills(name, type_id) VALUES('Express', 2);
INSERT INTO cv_skills(name, type_id) VALUES('SQL', 2);
INSERT INTO cv_skills(name, type_id) VALUES('NoSQL', 2);
INSERT INTO cv_skills(name, type_id) VALUES('Kubernetes', 2);
INSERT INTO cv_skills(name, type_id) VALUES('Docker', 2);
INSERT INTO cv_skills(name, type_id) VALUES('Helm', 2);


INSERT INTO cv_skills(name, type_id) VALUES('Agile', 3);
INSERT INTO cv_skills(name, type_id) VALUES('TDD', 3);
INSERT INTO cv_skills(name, type_id) VALUES('CI/CD', 3);
INSERT INTO cv_skills(name, type_id) VALUES('Git', 3);
INSERT INTO cv_skills(name, type_id) VALUES('Scrum', 3);
INSERT INTO cv_skills(name, type_id) VALUES('Jira', 3);
INSERT INTO cv_skills(name, type_id) VALUES('SOLID', 3);
INSERT INTO cv_skills(name, type_id) VALUES('API Design', 3);
INSERT INTO cv_skills(name, type_id) VALUES('Microservices', 3);

INSERT INTO cv_skills(name, type_id) VALUES('AWS', 4);
INSERT INTO cv_skills(name, type_id) VALUES('Azure', 4);
INSERT INTO cv_skills(name, type_id) VALUES('GCP', 4);
INSERT INTO cv_skills(name, type_id) VALUES('Firebase', 4);

SELECT * FROM cv_skill_types;