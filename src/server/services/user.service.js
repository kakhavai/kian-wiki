import { UserRepository } from 'data/repositories';

class UserService {
  static create(username, firstName, lastName) {
    return UserRepository.create(username, firstName, lastName);
  }

  static get(id) {
    return UserRepository.get(id);
  }

  static getAll(args) {
    return UserRepository.getAll(args);
  }

  static update(id, username, firstName, lastName) {
    return UserRepository.update(id, username, firstName, lastName);
  }

  static partialUpdate(id, username, firstName, lastName) {
    return UserRepository.partialUpdate({ id, username, firstName, lastName });
  }

  static destroy(id) {
    return UserRepository.destroy(id);
  }
}

export { UserService };
