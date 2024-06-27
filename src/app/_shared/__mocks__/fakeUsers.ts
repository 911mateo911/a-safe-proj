import { faker } from '@faker-js/faker';

export interface FakeUser {
  name: string;
  email: string;
  phone: string;
  address: string;
  spent: string;
  id: string;
}

export const getFakeUsers = () => {
  return new Promise<FakeUser[]>((resolve) => {
    setTimeout(() => {
      const users = [];

      for (let i = 0; i <= 1000; i++) {
        users.push({
          name: faker.person.fullName(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
          address: faker.location.country(),
          spent: faker.finance.amount({ min: 0, max: 5_000 }),
          id: faker.string.uuid()
        })
      };

      return resolve(users);
    }, 1_000);
  })
};
