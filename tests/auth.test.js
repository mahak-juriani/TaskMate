// const request = require('supertest');
// const app = require('../app'); // Import app for testing
// const User = require('../models/User');

// beforeAll(async () => {
//     // Clear users and register the test user
//     await User.deleteMany({});
//     await request(app).post('/auth/register').send({
//         name: 'Test User',
//         email: 'test@example.com',
//         password: 'password123',
//     });
// });

// describe('Auth API', () => {
//     it('should register a new user with a unique email', async () => {
//         const res = await request(app).post('/auth/register').send({
//             name: 'New User',
//             email: 'unique_email@example.com', // Unique email
//             password: 'password123',
//         });
//         expect(res.statusCode).toEqual(201);
//         expect(res.body).toHaveProperty('message');
//     });

//     it('should log in an existing user', async () => {
//         const res = await request(app).post('/auth/login').send({
//             email: 'test@example.com',
//             password: 'password123',
//         });
//         expect(res.statusCode).toEqual(200);
//         expect(res.body).toHaveProperty('token');
//     });
// });
