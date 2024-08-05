\c manifestations_dev

INSERT INTO services (name, description, price, duration_minutes, category, is_popular) 
VALUES
('Classic Manicure', 'Basic nail shaping, cuticle care, and polish application', 35.00, 30, 'Manicure', true),
('Gel Manicure', 'Long-lasting gel polish application with nail prep', 55.00, 45, 'Manicure', true),
('Spa Pedicure', 'Relaxing foot soak, scrub, massage, and polish', 65.00, 60, 'Pedicure', true),
('Gel Pedicure', 'Pedicure with long-lasting gel polish', 85.00, 75, 'Pedicure', true),
('Acrylic Full Set', 'Full set of acrylic nails', 85.00, 75, 'Extensions', true),
('Acrylic Fill', 'Maintenance fill for existing acrylic nails', 55.00, 50, 'Extensions', true),
('Gel Extensions', 'Nail extensions using gel for added length', 95.00, 90, 'Extensions', true),
('Gel Fill', 'Maintenance fill for existing gel extensions', 65.00, 60, 'Extensions', true),
('French Tips', 'Classic white-tipped manicure or addition to any service', 15.00, 15, 'Design', true),
('Nail Art (Per Nail)', 'Custom design on individual nails', 10.00, 15, 'Design', true),
('Full Set Nail Art', 'Custom designs on all nails', 75.00, 60, 'Design', true),
('Gel Removal', 'Safe removal of gel polish or extensions', 25.00, 30, 'Removal', false),
('Acrylic Removal', 'Safe removal of acrylic nails', 35.00, 45, 'Removal', false),
('Nail Repair (Per Nail)', 'Fix for broken or damaged nails', 10.00, 10, 'Repair', false),
('Luxury Mani-Pedi Combo', 'Gel manicure and spa pedicure with extended massage', 130.00, 120, 'Combo', true),
('Dip Powder Full Set', 'Long-lasting, durable alternative to gel or acrylic', 70.00, 60, 'Extensions', true),
('Dip Powder Fill', 'Maintenance fill for existing dip powder nails', 50.00, 45, 'Extensions', true),
('Paraffin Treatment', 'Moisturizing wax treatment for hands or feet', 20.00, 20, 'Add-on', false),
('Shellac Manicure', 'Chip-resistant, long-lasting polish application', 60.00, 45, 'Manicure', true),
('Express Pedicure', 'Quick foot care and polish for those on the go', 40.00, 30, 'Pedicure', false);