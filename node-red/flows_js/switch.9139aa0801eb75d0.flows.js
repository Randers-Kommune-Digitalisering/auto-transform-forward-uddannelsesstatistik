const Node = {
  "id": "9139aa0801eb75d0",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "name": "Findes data?",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "empty"
    },
    {
      "t": "nempty"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1010,
  "y": 1100,
  "wires": [
    [
      "30cfd97d03ea04ac"
    ],
    [
      "d6c2525168cae205"
    ]
  ],
  "_order": 114
}

module.exports = Node;