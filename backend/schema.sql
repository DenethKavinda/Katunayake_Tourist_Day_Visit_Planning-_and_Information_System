CREATE DATABASE IF NOT EXISTS katunayake_db;
USE katunayake_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user') DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS places (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  category VARCHAR(100) NOT NULL,
  distanceKm DECIMAL(5,2) NOT NULL,
  description TEXT NOT NULL,
  hours VARCHAR(100) NOT NULL,
  fee VARCHAR(100) NOT NULL,
  duration VARCHAR(100) NOT NULL,
  tips TEXT,
  lat DECIMAL(10,8) NOT NULL,
  lng DECIMAL(11,8) NOT NULL,
  image VARCHAR(500) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS settings (
  setting_key VARCHAR(100) PRIMARY KEY,
  setting_value TEXT NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO settings (setting_key, setting_value) VALUES
('brand_title', 'Katunayake Tourist'),
('brand_subtitle', 'Day-Visit Explorer'),
('footer_title', 'Katunayake Tourist Information System'),
('footer_description', 'Consolidated & verified local tourism data within a 25 km radius of CMB Airport.'),
('footer_copyright', '© 2026 Katunayake Tourism Board. All rights reserved.')
ON DUPLICATE KEY UPDATE setting_key = VALUES(setting_key);

-- Seed initial 10 verified locations around Katunayake CMB Airport
INSERT INTO places (name, category, distanceKm, description, hours, fee, duration, tips, lat, lng, image) VALUES
('Muthurajawela Marsh & Boat Safari', 'Nature & Wildlife', 8.5, 'Sri Lanka’s largest saline coastal peat bog, offering scenic boat rides to observe waterbirds, monkeys, and crocodiles in pristine wetlands.', '06:00 AM - 06:00 PM', 'LKR 3,500 / Boat', '2 - 3 Hours', 'Early morning or late afternoon boat tours offer the best wildlife sightings and pleasant weather.', 7.0500, 79.8600, 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80'),
('Negombo Beach & Coastal Stretch', 'Beach & Coastal', 11.2, 'A bustling golden sand coast renowned for sunset views, water activities, seafood restaurants, and fresh oceanic breeze.', 'Open 24/7', 'Free Entry', '1 - 2 Hours', 'Best visited during late afternoon around 5:00 PM for scenic tropical sunsets.', 7.2083, 79.8358, 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80'),
('Hamilton Canal Waterway', 'History & Architecture', 7.8, 'Historical 18th-century Dutch-constructed waterway linking Negombo Lagoon to Colombo, ideal for quiet walking trails and photography.', 'Open 24/7', 'Free Entry', '1 Hour', 'Rent a bicycle or take an afternoon stroll along the paved canal paths.', 7.1500, 79.8700, 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'),
('Angurukaramulla Temple', 'Culture & Heritage', 12.0, 'Historical Buddhist temple boasting a massive 6-meter dragon entrance, giant Buddha statue, and centuries-old mural paintings.', '07:00 AM - 07:00 PM', 'Free (Donations Welcome)', '1 Hour', 'Remember to cover shoulders and knees as a sign of respect when entering temple grounds.', 7.2100, 79.8500, 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80'),
('Negombo Fish Market (Lellama)', 'Culture & Heritage', 11.5, 'Vibrant coastal open-air fish auction market showcasing traditional wooden catamarans and fresh ocean catches daily.', '05:00 AM - 01:00 PM', 'Free Entry', '1 Hour', 'Visit before 8:00 AM to experience the bustling fish auction and vibrant local trade in action.', 7.2000, 79.8300, 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80'),
('St. Mary’s Church Negombo', 'History & Architecture', 11.0, 'Majestic grand church built in neoclassical style featuring intricate ceiling frescoes painted by local artist N.S. Godamanne.', '06:00 AM - 08:00 PM', 'Free Entry', '45 Mins', 'Admire the ceiling artwork; maintain quietness during religious worship sessions.', 7.2120, 79.8380, 'https://images.unsplash.com/photo-1548625361-185d263a4365?auto=format&fit=crop&w=800&q=80'),
('Katunayake Coastal Lagoon', 'Nature & Wildlife', 3.2, 'Serene body of water situated right next to the airport, popular for relaxing views, birdwatching, and local mangrove ecosystems.', 'Open 24/7', 'Free Entry', '1 Hour', 'An ideal short stop right after landing or before departing CMB Airport.', 7.1700, 79.8800, 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80'),
('Dutch Fort Ruins Negombo', 'History & Architecture', 11.8, 'Remnants of a 17th-century fortification constructed by the Portuguese and Dutch, now situated near the Negombo lagoon mouth.', '08:00 AM - 05:00 PM', 'Free Entry', '45 Mins', 'Combine with a visit to the nearby Lellama fish market for a complete morning walk.', 7.2050, 79.8320, 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80'),
('Guruge Nature Park', 'Nature & Wildlife', 14.5, 'Family theme park featuring replica ancient Sinhalese villages, dinosaur exhibits, water rides, and lush botanical gardens.', '09:00 AM - 06:00 PM', 'LKR 1,000 / Person', '2 - 3 Hours', 'Great for families with young children seeking recreational activities.', 7.0800, 79.9100, 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'),
('Beddagana Wetland Park', 'Nature & Wildlife', 24.5, 'Protected wetland sanctuary featuring elevated wooden boardwalks across swamps, butterfly gardens, and birdwatching towers.', '06:00 AM - 06:00 PM', 'LKR 500 / Person', '2 Hours', 'Quiet walk environment; bring binoculars for spotting indigenous birds.', 6.8900, 79.9100, 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80');
