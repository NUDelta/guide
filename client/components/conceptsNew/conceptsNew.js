// TODO: call this in entry file
export default function (Template) {
  Template['conceptNew'].helpers({
  });

  Template['conceptNew'].events({
  	'submit .new-task': (event) => {
      event.preventDefault();
      const target = event.target;
      return;
  	}
  });
}