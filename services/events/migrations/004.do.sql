CREATE TABLE IF NOT EXISTS notifications (
  id SERIAL PRIMARY KEY,
  photographer_id INTEGER NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending', -- Values can be 'pending', 'sent', 'seen'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (photographer_id) REFERENCES photographers(id)
);
