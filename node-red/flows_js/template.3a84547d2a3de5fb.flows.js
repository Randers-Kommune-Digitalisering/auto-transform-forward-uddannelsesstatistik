const Node = {
  "id": "3a84547d2a3de5fb",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "drop table",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 460,
  "y": 180,
  "wires": [
    [
      "d9240748b366cf9d"
    ]
  ],
  "_order": 131
}

Node.template = `
DROP TABLE {{flow.metadata_tablename}}
`

module.exports = Node;