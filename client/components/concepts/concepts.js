export default function (Template) {
  Template['concepts'].helpers({
  });

  Template['concepts'].events({
    'click .node': (event) => {
      $('.node.selected').removeClass('selected');
      let node = $(event.target).hasClass('node') ? $(event.target) : $(event.target).parent();
      node.addClass('selected');
    }
  });

  Template['concepts'].rendered = () => FlowRouter.subsReady('Edges', buildTree);
}

function buildTree() {
  let edges = Edges.find();
  let rootID = findRoot(edges);
  let nodeStructure = buildSubtree(rootID);

  let chartConfig = {
    chart: { 
      container: "#tree",
      connectors: {
        type: 'step'
      },
      node: {
        collapsable: false
      }
    },
    nodeStructure
  }
  let treant = new Treant(chartConfig, () => console.log('tree created'));
}

function findRoot(edges) {
  let sources = new Set();
  let targets = new Set();
  edges.forEach(e => {
    sources.add(e.sourceID);
    targets.add(e.targetID);
  });

  let root = null;
  for (let id of sources) {
    if (!targets.has(id))
      root = id;
  }

  return root;
}

function buildSubtree(id) {
  let currentEdges = Edges.find({ sourceID: id });
  if (currentEdges.fetch().length === 0)
    return {
      text: { name: Concepts.findOne(id).name },
      children: []
    }

  return {
    text: { name: Concepts.findOne(id).name },
    children: currentEdges.map(e => buildSubtree(e.targetID))
  }
}
