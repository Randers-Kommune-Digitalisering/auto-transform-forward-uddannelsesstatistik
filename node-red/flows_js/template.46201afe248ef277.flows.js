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
DROP TABLE {{flow.metadata_tablename}}
`

module.exports = Node;