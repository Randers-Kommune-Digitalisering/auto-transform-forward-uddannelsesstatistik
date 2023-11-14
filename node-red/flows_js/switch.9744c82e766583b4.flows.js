const Node = {
  "id": "9744c82e766583b4",
  "type": "switch",
  "z": "bbeb8dfaa79c297c",
  "name": "",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nempty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 770,
  "y": 240,
  "wires": [
    [
      "58e1f1d4a6d3bc62"
    ],
    [
      "fe80bd44c3b78a70"
    ]
  ],
  "_order": 180
}

module.exports = Node;