export default function (Template) {
  Template['conceptsDelete'].helpers({
  	concepts: () => Concepts.find(),
  	edges: () => Edges.find(),
  	conceptName: id =>  Concepts.findOne(id).name
  });

  Template['conceptsDelete'].events({
		'submit .delete-concept': (event) => {
			event.preventDefault();
			const target = event.target;
			const conceptID = target.id.value;
			Concepts.remove(conceptID);
		},
		'submit .delete-edge': (event) => {
			event.preventDefault();
			const target = event.target;
			const edgeID = target.id.value;
			Edges.remove(edgeID);
		}
  });
}
