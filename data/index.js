// const users = require("./users");
// module.exports = { userData: users };
const usersData = require("./users");
const postsRoomData = require("./postsRoom");
const postsRoomateData = require("./postsRoomate");
const searchData = require("./findPost");
const makeComments = require("./makeComments");
const findIndividualPost = require("./findIndividualPost");
const message = require("./message");
// const albumsData = require("./albums");

let exportedMethods = {
  users: usersData,
  postsRoom: postsRoomData,
  postsRoomate: postsRoomateData,
  search: searchData,
  makeComments: makeComments,
  findIndividualPost: findIndividualPost,
  message: message
};

module.exports = exportedMethods;
