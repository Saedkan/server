import request from 'supertest';
import { createApp } from '../app.js';
describe('GraphQL Integration', () => {
    it('register → login flow works', async () => {
        const app = await createApp();
        const res = await request(app)
            .post('/graphql')
            .send({
            query: `
          mutation {
            register(email: "int@mail.com", password: "123456", name: "Int") {
              token
              user { email }
            }
          }
        `,
        });
        expect(res.body.data.register.user.email).toBe('int@mail.com');
    });
});
//# sourceMappingURL=graphql.integration.test.js.map