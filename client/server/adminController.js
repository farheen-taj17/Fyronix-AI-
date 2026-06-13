const User =
  require("../models/User");

/*
  Get All Users
*/
const getAllUsers =
  async (req, res) => {

    try {

      const users =
        await User.find()
          .select("-password");

      res.json({
        success: true,
        count: users.length,
        users
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message
      });
    }
};

/*
  Delete User
*/
const deleteUser =
  async (req, res) => {

    try {

      const user =
        await User.findById(
          req.params.id
        );

      if (!user) {

        return res.status(404).json({
          success: false,
          message:
            "User not found"
        });
      }

      await User.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,
        message:
          "User deleted successfully"
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message
      });
    }
};

/*
  Update Role
*/
const updateRole =
  async (req, res) => {

    try {

      const user =
        await User.findById(
          req.params.id
        );

      if (!user) {

        return res.status(404).json({
          success: false,
          message:
            "User not found"
        });
      }

      user.role =
        req.body.role;

      await user.save();

      res.json({
        success: true,
        message:
          "Role updated successfully",
        user
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message
      });
    }
};

module.exports = {
  getAllUsers,
  deleteUser,
  updateRole
};