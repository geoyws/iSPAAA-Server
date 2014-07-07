var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConversationSchema = new Schema({
  name: String, // a given name to the conversation, required at creation
  participants: [String], // an array of user _id(s)
  joinHistory: [  // history of participants who join and leave
    {
      participantID: String, // user _id
      participantName: String, // user's full name
      joined: [Date], // user might have left and rejoined several times
      left: [Date]
    }
  ],
  created: Date,
  createdBy: String, // user _id
  status: String, // ongoing, ended
  flagged: Boolean, // flagged for inappropriateness, DBKL officers will hunt these down
  flagHistory: [
    {
      flagTimestamp: Date,
      flaggedBy: String, // user _id
      flagRemarks: String
    }
  ],
  messages: [
    {
      msgTimestamp: Date,
      sender: String, // user _id
      location: { type: [Number], index: '2dsphere'}, // 
      content: Mixed, // this could store text, location, images, videos and voiceclips
    }
  ]
  
});
