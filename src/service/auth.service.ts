import User from "../model/user.model.ts";

interface RegisterBody {
  username: string;
  password: string;
}

const authService = {
  register: async (data: RegisterBody) => {
    try {
      const createdUser = await User.create(data);
      return createdUser;
    } catch (error) {
      const err = error as Error;
      throw new Error(err.message);
    }
  },

  login: async (data: RegisterBody) => {
    try {
      const user = await User.findOne({ username: data.username });
      if (!user) {
        throw new Error("User not found");
      }

      const isValidPassword = user.password === data.password;
      // console.log(user.password, data.password, "compare these two");
      if (!isValidPassword) {
        throw new Error("Invalid credentials");
      }

      return true;
    } catch (error) {
      const err = error as Error;
      throw new Error(err.message);
    }
  },
};

export default authService;
