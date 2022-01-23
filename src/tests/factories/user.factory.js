import { random } from 'faker';
import { User } from 'data/models';

const buildUser = async () => {
  const resUser = {};

  resUser.username = random.word().slice(0, 80);
  resUser.firstName = random.word().slice(0, 80);
  resUser.lastName = random.word().slice(0, 80);

  return resUser;
};

const createUser = async (fakeUser) => {
  const user = await User.create(fakeUser);
  return user;
};

export { buildUser, createUser };
