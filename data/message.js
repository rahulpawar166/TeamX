
let { ObjectId } = require("mongodb");
const mongoCollections = require("../config/mongoCollections");
const messages = mongoCollections.messages;


let exportedMethods = {
  async createMessage(
    message,
    receivedBy,
    sendBy,
    date
  ) {
   
    const message_detail = {
      message: message,
      date: date,
      sendBy: sendBy,
      receivedBy: receivedBy,
    };
    try {
      const messageCollection = await messages();
      const inserted_user = await messageCollection.insertOne(message_detail);
      if (!inserted_user.acknowledged) {
        throw `insertion of post failed`;
      } else {
        return { message: "Message is sent successfully" };
      }
    } catch (error) {
      console.log("error", error);
    }
  },

  async getMessage(user) {
<<<<<<< Updated upstream
=======
    console.log(">>>here user",user)
    
    if(!user) throw "Type a user"
    if(typeof user !== "string") throw "user must be string"

>>>>>>> Stashed changes
    try {
      const messageCollection = await messages();
      const allMessage = await messageCollection.find({ $or: [
        { "sendBy": user },
        { "receivedBy": user}
      ]}).toArray();
<<<<<<< Updated upstream
      allMessage.map((item) => (item._id = item._id.toString()));
      allMessage.sort((a, b) => b.postDate - a.postDate);
      return allMessage;
=======

    
      allMessage.map((item) => (item._id = item._id.toString()));
      allMessage.sort((a, b) => b.postDate - a.postDate);

     let  x = allMessage.map(item => item.sendBy)
    .filter((value, index, self) => self.indexOf(value) === index)
    let y = allMessage.map(item => item.receivedBy)
    .filter((value, index, self) => self.indexOf(value) === index)
     let z = x.concat(y)
     let uniqueuser = [...new Set(z)];

     uniqueuser = uniqueuser.filter(e => e !== user);
    
     let uniqmessage = []
     let constainsMessgaeof = []
      allMessage = allMessage.reverse()
    for(let i = 0; i < uniqueuser.length; i++){
      if(!constainsMessgaeof.includes(uniqueuser[i])) {
        allMessage.map(each => {
            if(each.sendBy == uniqueuser[i] || each.receivedBy == uniqueuser[i] ){
              if(!constainsMessgaeof.includes(uniqueuser[i])){
              uniqmessage.push(each)
              constainsMessgaeof.push(uniqueuser[i])
              }
            }
        })
      }
     }

      return uniqmessage;
>>>>>>> Stashed changes
    } catch (error) {
      console.log("error", error);
    }
  },
  async getSpecificMessage(user) {
    var arr = user.split("-");
    let first = arr[0]
    let second = arr[1]
    try {
      const messageCollection = await messages();
      const allMessage = await messageCollection.find({
        $or:[
             {$and:[
        { "sendBy": first },
        { "receivedBy": second},
             ]},
             {$and:[
        { "sendBy": second },
        { "receivedBy": first}
         ]}
         ]}).toArray();
      allMessage.map((item) => (item._id = item._id.toString()));
      allMessage.sort((a, b) => b.postDate - a.postDate);
      return allMessage;
    } catch (error) {
      console.log("error", error);
    }
  },
};

module.exports = exportedMethods;
