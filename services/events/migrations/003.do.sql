CREATE TABLE IF NOT EXISTS assignments (
  id SERIAL PRIMARY KEY,
  event_id INTEGER NOT NULL,
  photographer_id INTEGER NOT NULL,
  assigned_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'assigned', -- Values can be 'assigned', 'completed', 'cancelled'
  FOREIGN KEY (event_id) REFERENCES events(id),
  FOREIGN KEY (photographer_id) REFERENCES photographers(id)
);
