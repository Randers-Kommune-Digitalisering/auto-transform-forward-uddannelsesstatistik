const Node = {
  "id": "9a2c568c4c02e020",
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
  "x": 530,
  "y": 1660,
  "wires": [
    [
      "71b4ce67acf25218"
    ],
    [
      "f13064df4203d26c",
      "6a97d788b523bb24"
    ]
  ],
  "_order": 117
}

module.exports = Node;