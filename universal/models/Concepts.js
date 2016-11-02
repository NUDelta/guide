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

Concepts.allow({
  insert : () => true,
  update : () => true,
  remove : () => true
});

export default Concepts;
