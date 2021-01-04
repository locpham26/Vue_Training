import UserRepo from "./UserRepository";

const repositories = {
  users: UserRepo,
};

export const RepoFactory = {
  get(name) {
    return repositories[name];
  },
};
