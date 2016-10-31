Concepts = new Mongo.Collection('Concepts');

Concepts.attachSchema(
    new SimpleSchema({
    name: {
      type: String,
      unique: true
    },
    description: {
      type: String,
      optional: true
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
  Concepts.allow({
    insert : () => false,
    update : () => false,
    remove : () => false
  });
}

export default Concepts;
