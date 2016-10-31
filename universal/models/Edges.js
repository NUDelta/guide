Edges = new Mongo.Collection('Edges');

Edges.attachSchema(
    new SimpleSchema({
    title: {
      type: String,
      optional: true
    },
    sourceID: {
      type: String
    },
    targetID: {
      type: String
    },
    weight: {
      type: Number
    },
    createdAt: {
      type: Date,
      denyUpdate: true,
      autoValue: function() {
        if (this.isInsert) {
          return new Date;
        } else if (this.isUpsert) {
          return {$setOnInsert: new Date};
        } else {
          this.unset();
        }
      }
    }
  })
);

// Collection2 already does schema checking
if (Meteor.isServer) {
  Edges.allow({
    insert : () => false,
    update : () => false,
    remove : () => false
  });
}

export default Edges;
