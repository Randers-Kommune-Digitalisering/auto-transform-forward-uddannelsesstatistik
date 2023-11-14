const Node = {
  "id": "7382ebc8277715da",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "g": "c81f2ef6235412e6",
  "name": "Tjek om der køres \\n i udviklermiljø",
  "property": "DEV_ENV",
  "propertyType": "env",
  "rules": [
    {
      "t": "eq",
      "v": "true",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 450,
  "y": 2900,
  "wires": [
    [
      "2fe32dfadf70ba55"
    ],
    [
      "2fe32dfadf70ba55",
      "5e34426a181a6ec4"
    ]
  ],
  "_order": 131
}

module.exports = Node;