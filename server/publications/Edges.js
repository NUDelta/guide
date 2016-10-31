// TODO: call this in entry file
export default function () {
  Meteor.publish('Edges', function () {
    return Edges.find();
  });
}
