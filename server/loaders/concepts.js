const conceptsFixtures = [
  {
    name: 'Javascript'
  },
  {
    name: 'Autocomplete'
  },
  {
    name: 'API'
  },
  {
    name: 'REST'
  },
  {
    name: 'Video Player'
  }
];

const edgesFixtures = [
  {
    source: 'Javascript',
    target: 'Autocomplete',
    weight: 1
  },
  {
    source: 'Autocomplete',
    target: 'API',
    weight: 1
  },
  {
    source: 'Autocomplete',
    target: 'REST',
    weight: 1
  },
  {
    source: 'Javascript',
    target: 'Video Player',
    weight: 1
  }
];

export default function () {
  conceptsFixtures.forEach(c => {
    if (typeof Concepts.findOne({ name : c.name }) !== 'object') {
      Concepts.insert(c);
    }
  });

  edgesFixtures.forEach(e => {
    let sourceID = Concepts.findOne({name: e.source})._id;
    let targetID = Concepts.findOne({name: e.target})._id;
    let edge = {
      sourceID,
      targetID,
      weight: e.weight
    };

    if (typeof Edges.findOne({ sourceID : edge.sourceID, targetID: edge.targetID }) !== 'object') {
      Edges.insert(edge);
    }
  });
}
