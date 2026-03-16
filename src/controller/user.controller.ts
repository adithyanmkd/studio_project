import type { Request, Response } from "express";
import userService from "../service/user.service.ts";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.fetchAllUsers();
    res.status(200).json({
      success: true,
      message: "Successfully fetched users",
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const userController = {
  getAllUsers,
};

export default userController;
