const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require(
    "../middleware/authMiddleware"
  );

const adminMiddleware =
  require(
    "../middleware/adminMiddleware"
  );

const {
  getAllUsers,
  deleteUser,
  updateRole
} = require(
  "../controllers/adminController"
);

/*
  Get Users
*/
router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  getAllUsers
);

/*
  Delete User
*/
router.delete(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  deleteUser
);

/*
  Update Role
*/
router.put(
  "/users/:id/role",
  authMiddleware,
  adminMiddleware,
  updateRole
);

module.exports =
  router;