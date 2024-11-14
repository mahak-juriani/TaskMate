// const request = require('supertest');
// const app = require('../app');
// const User = require('../models/User'); // Import your User model
// const Task = require('../models/Task'); // Import your Task model

// beforeEach(async () => {
//     await User.deleteMany({}); // Clears all users before each test
//     await Task.deleteMany({}); // Clears all tasks before each test
// });

// describe('Task API', () => {
//     let token;

//     beforeAll(async () => {
//         const res = await request(app).post('/auth/login').send({
//             email: 'test@example.com',
//             password: 'password123',
//         });
//         token = res.body.token; // Save the JWT token for authenticated requests
//     });

//     it('should create a task', async () => {
//         const res = await request(app)
//             .post('/tasks')
//             .set('Authorization', `Bearer ${token}`)
//             .send({
//                 title: 'Test Task',
//                 description: 'Description for test task',
//                 priority: 'high',
//                 dueDate: '2024-12-01',
//             });
//         expect(res.statusCode).toEqual(201);
//         expect(res.body).toHaveProperty('_id');
//     });

//     it.only('should fetch tasks', async () => {
//         const res = await request(app)
//             .get('/tasks')
//             .set('Authorization', `Bearer ${token}`);
//         expect(res.statusCode).toEqual(200);
//         expect(Array.isArray(res.body)).toBe(true);
//     });
// });
