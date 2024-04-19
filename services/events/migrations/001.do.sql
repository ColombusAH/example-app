CREATE TABLE IF NOT EXISTS clients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  contact_info TEXT
);


CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  date TIMESTAMP NOT NULL,
  location TEXT,
  client_id INTEGER,
  invited_count INTEGER DEFAULT 0,
  FOREIGN KEY (client_id) REFERENCES clients(id)
);
