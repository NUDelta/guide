export default function (Template) {
  Template['conceptsNew'].helpers({
    concepts: () => Concepts.find()
  });

  Template['conceptsNew'].events({
  	'submit .new-concept': (event) => {
      event.preventDefault();
      const target = event.target;
      Concepts.insert({
        name: target.name.value
      }, (err) => {
        if (err)
          $('.alert-danger').show(0).delay(3000).hide(0);
        else
          $('.alert-success').show(0).delay(3000).hide(0);
      });
  	},
  	'submit .new-edge': (event) => {
      event.preventDefault();
      const target = event.target;
      Edges.insert({
        sourceID: target.source.value,
        targetID: target.target.value,
        weight: target.weight.value
      }, (err) => {
        if (err)
          $('.alert-danger').show(0).delay(3000).hide(0);
        else
          $('.alert-success').show(0).delay(3000).hide(0);
      });
  	}
  });
}