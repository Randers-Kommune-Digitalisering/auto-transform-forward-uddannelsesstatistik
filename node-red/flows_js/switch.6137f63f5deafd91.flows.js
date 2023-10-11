const Node = {
  "id": "6137f63f5deafd91",
  "type": "switch",
  "z": "fc46f6d88e3fdc07",
  "name": "",
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
  "x": 790,
  "y": 200,
  "wires": [
    [
      "4dc5532f7e120280"
    ],
    [
      "6dab7261da83b67c"
    ]
  ],
  "_order": 150
}

module.exports = Node;