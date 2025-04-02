db = db.getSiblingDB('analog_magic');

// Create a collection and insert sample data
db.createCollection('courses');
db.courses.insertMany([
  {
    title: 'Introduction to Photography',
    description: 'Learn the basics of analog photography',
    instructor: 'Jane Doe',
    duration: 4,
    level: 'Beginner',
    createdAt: new Date(),
  },
  {
    title: 'Film Development Techniques',
    description: 'Master the art of developing your own film',
    instructor: 'John Smith',
    duration: 6,
    level: 'Intermediate',
    createdAt: new Date(),
  },
]);

// Create users collection if needed
db.createCollection('users');

// Print confirmation
print('Database initialized with sample data!');
