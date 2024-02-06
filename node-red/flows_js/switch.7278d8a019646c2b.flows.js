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
  "x": 170,
  "y": 80,
  "wires": [
    [
      "67b9c93505d6c47e"
    ]
  ],
  "_order": 115
}

module.exports = Node;