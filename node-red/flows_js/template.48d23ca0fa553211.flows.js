const Node = {
  "id": "48d23ca0fa553211",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "Forespørgsel \\n Hent metadata fra DB",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 260,
  "y": 360,
  "wires": [
    [
      "ce4d5cbbb98e3d54"
    ]
  ],
  "_order": 49
}

Node.template = `
SELECT * FROM {{flow.metadata_tablename}} ORDER BY created DESC;
`

module.exports = Node;