import { userResolver } from '../graphql/resolvers/user.resolver.js';
import { User } from '../models/User.js';

describe('User Resolver', () => {
  it('registers new user', async () => {
    const res = await userResolver.Mutation.register(
      {},
      { email: 'test@mail.com', password: '123456', name: 'Test' }
    );

    expect(res.token).toBeDefined();
    expect(res.user.email).toBe('test@mail.com');
  });

  it('prevents duplicate email', async () => {
    await User.create({
      email: 'dup@mail.com',
      passwordHash: 'hash',
      name: 'User',
    });

    await expect(
      userResolver.Mutation.register(
        {},
        { email: 'dup@mail.com', password: '123456', name: 'User' }
      )
    ).rejects.toThrow();
  });

  it('login fails with wrong password', async () => {
    await userResolver.Mutation.register(
      {},
      { email: 'login@mail.com', password: '123456', name: 'User' }
    );

    await expect(
      userResolver.Mutation.login(
        {},
        { email: 'login@mail.com', password: 'wrong' }
      )
    ).rejects.toThrow();
  });

  it('login works with correct credentials', async () => {
    await userResolver.Mutation.register(
      {},
      { email: 'ok@mail.com', password: '123456', name: 'User' }
    );

    const res = await userResolver.Mutation.login(
      {},
      { email: 'ok@mail.com', password: '123456' }
    );

    expect(res.token).toBeDefined();
  });
});
