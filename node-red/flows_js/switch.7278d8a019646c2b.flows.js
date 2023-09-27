const Node = {
  "id": "7278d8a019646c2b",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "name": "Tjek om der køres \\n i udviklermiljø",
  "property": "DEV_ENV",
  "propertyType": "env",
  "rules": [
    {
      "t": "neq",
      "v": "true",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 190,
  "y": 80,
  "wires": [
    [
      "f8f955378d43b663"
    ]
  ],
  "_order": 119
}

module.exports = Node;