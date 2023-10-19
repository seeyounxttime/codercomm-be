const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reactionSchema = Schema(
  {
    author: { type: Schema.ObjectId, required: true, ref: "User" },
    targetType: { type: String, required: true, enum: ["Post", "Comment"] },
    targetId: {
      type: Schema.ObjectId,
      required: true,
      refPath: "targetType",
    },
    emoji: {
      type: String,
      required: true,
      enum: ["like", "dislike"],
    },
  },
  { timestamps: true }
);

// reactionSchema.statics.calculateReaction = async function (
//   targetId,
//   targetType
// ) {
//   const stats = await this.aggregate([
//     {
//       $match: { targetId },
//     },
//     {
//       $group: {
//         _id: "$targetId",
//         like: {
//           $sum: {
//             $cond: [{ $eq: ["$emoji", "like"] }, 1, 0],
//           },
//         },
//         dislike: {
//           $sum: {
//             $cond: [{ $eq: ["$emoji", "dislike"] }, 1, 0],
//           },
//         },
//       },
//     },
//   ]);
//   await mongoose.model(targetType).findByIdAndUpdate(targetId, {
//     reactions: {
//       like: (stats[0] && stats[0].like) || 0,
//       dislike: (stats[0] && stats[0].dislike) || 0,
//     },
//   });
// };

// reactionSchema.post("save", async function (doc) {
//   await doc.constructor.calculateReaction(doc.targetId, doc.targetType);
// });

// reactionSchema.post(/^findOneAnd/, async function (doc) {
//   await doc.constructor.calculateReaction(doc.targetId, doc.targetType);
// });

const Reaction = mongoose.model("Reaction", reactionSchema);
module.exports = Reaction;
