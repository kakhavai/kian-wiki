import { User } from 'server/data/models';
import { NotFound } from 'server/src/utils/errors';

class UserRepository {
  static async create(username, firstName, lastName) {
    const createdUser = await User.create({
      username,
      firstName,
      lastName,
    });

    return createdUser;
  }

  static get(id) {
    return User.findByPk(id, { include: ['createdProjects'] });
  }

  static getAll(filters) {
    return User.findAll({
      where: filters,
      include: ['createdProjects'],
    });
  }

  static async update(id, username, firstName, lastName) {
    return this.partialUpdate({
      id,
      username,
      firstName,
      lastName,
    });
  }

  static async partialUpdate({ id, username, firstName, lastName }) {
    const foundUser = await User.findByPk(id);
    if (!foundUser) throw new NotFound(`User with primary key ${id} not found`);
    if (username !== undefined) foundUser.username = username;
    if (firstName !== undefined) foundUser.firstName = firstName;
    if (lastName !== undefined) foundUser.lastName = lastName;
    await foundUser.save();
    return foundUser.reload();
  }

  static async destroy(id) {
    const foundUser = await User.findByPk(id);
    if (!foundUser) throw new NotFound(`User with primary key ${id} not found`);
    await foundUser.destroy();
    return foundUser;
  }
}

export { UserRepository };
