import mongoose from "mongoose";

// # -------------------- LOGIN TABLE --------------------
// class Login(models.Model):
//     user_name = models.CharField(max_length=100)
//     password = models.CharField(max_length=100)
//     usertype = models.CharField(max_length=50)   # admin / user

//     def _str_(self):
//         return self.user_name

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "admin",
  },
});

const User = mongoose.model("User", userSchema);
export default User;
