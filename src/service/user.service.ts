import User from "../model/user.model.ts";

const userService = {
  fetchAllUsers: async () => {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      const err = error as Error;
      throw new Error(err.message);
    }
  },
};

export default userService;
