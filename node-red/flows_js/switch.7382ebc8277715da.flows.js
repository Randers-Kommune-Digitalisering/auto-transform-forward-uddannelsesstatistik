const Node = {
  "id": "7382ebc8277715da",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "d": true,
  "g": "c81f2ef6235412e6",
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
  "x": 270,
  "y": 2140,
  "wires": [
    [
      "4ff56523274675ec"
    ]
  ],
  "_order": 121
}

module.exports = Node;