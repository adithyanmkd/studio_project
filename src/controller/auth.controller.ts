import type { Request, Response } from "express";
import authService from "../service/auth.service.ts";

const register = async (req: Request, res: Response) => {
  try {
    const payload = {
      username: req.body.username,
      password: req.body.password,
    };

    await authService.register(payload);
    res.status(200).json({
      success: true,
      message: "Successfully created user",
    });
  } catch (error) {
    console.log("Register controller error", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const payload = {
      username: req.body.username,
      password: req.body.password,
    };

    const result = await authService.login(payload);
    if (!result) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({
      success: true,
      message: "Succefully logged",
    });
  } catch (error) {
    console.log("Login failed", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const authController = {
  register,
  login,
};

export default authController;
