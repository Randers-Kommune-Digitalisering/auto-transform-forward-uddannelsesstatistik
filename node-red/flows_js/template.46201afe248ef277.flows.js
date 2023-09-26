const Node = {
  "id": "46201afe248ef277",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "Forespørgsel ↓\\n Slet metadata tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 450,
  "y": 2460,
  "wires": [
    [
      "2f8cad1aa6b026e3"
    ]
  ],
  "_order": 107
}

Node.template = `
DROP TABLE elevtrivsel_4til9klasse_metadata
`

module.exports = Node;