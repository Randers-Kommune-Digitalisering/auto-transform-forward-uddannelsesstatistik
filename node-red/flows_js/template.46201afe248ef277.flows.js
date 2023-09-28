const Node = {
  "id": "46201afe248ef277",
  "type": "template",
  "z": "971a7ae6df987a48",
  "g": "2ae5f3030a3d5111",
  "name": "Forespørgsel ↓\\n Slet metadata tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 590,
  "y": 2500,
  "wires": [
    [
      "2f8cad1aa6b026e3"
    ]
  ],
  "_order": 125
}

Node.template = `
DROP TABLE elevtrivsel_4til9klasse_metadata
`

module.exports = Node;