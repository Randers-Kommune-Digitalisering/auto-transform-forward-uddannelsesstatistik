const Node = {
  "id": "7382ebc8277715da",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "name": "Tjek om der køres \\n i udviklermiljø",
  "property": "DEV_ENVIROMENT",
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
  "x": 270,
  "y": 2200,
  "wires": [
    [
      "4ff56523274675ec"
    ]
  ],
  "_order": 120
}

module.exports = Node;