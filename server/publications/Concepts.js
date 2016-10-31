// TODO: call this in entry file
export default function () {
  Meteor.publish('Concepts', function () {
    return Concepts.find();
  });
}
