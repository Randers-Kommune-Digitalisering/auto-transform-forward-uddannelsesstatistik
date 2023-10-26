const Node = {
  "id": "6dab7261da83b67c",
  "type": "template",
  "z": "fc46f6d88e3fdc07",
  "name": "Forespørgsel ↓\\n Slet metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 660,
  "y": 300,
  "wires": [
    [
      "40637f0f8179a7ac"
    ]
  ],
  "_order": 144
}

Node.template = `
DROP TABLE {{flow.metadata_tablename}}
`

module.exports = Node;