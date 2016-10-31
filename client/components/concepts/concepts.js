// TODO: call this in entry file
export default function (Template) {
  Template['concepts'].helpers({
  });

  Template['concepts'].events({
  });

  Template['concepts'].rendered = () => {
  	let simple_chart_config = {
	    chart: {
	        container: "#tree-simple"
	    },
	    
	    nodeStructure: {
	        text: { name: "Parent node" },
	        children: [
	            {
	                text: { name: "First child" }
	            },
	            {
	                text: { name: "Second child" }
	            }
	        ]
	    }
	};
  	let treant = new Treant(simple_chart_config, () => console.log('tree created'));
  }
}
