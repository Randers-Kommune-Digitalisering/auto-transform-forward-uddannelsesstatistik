const Node = {
  "id": "48d23ca0fa553211",
  "type": "template",
  "z": "971a7ae6df987a48",
  "g": "16e22b5e86fbc004",
  "name": "Forespørgsel ↓\\n Hent metadata fra DB",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 280,
  "y": 460,
  "wires": [
    [
      "ce4d5cbbb98e3d54"
    ]
  ],
  "_order": 66
}

Node.template = `
SELECT * FROM {{flow.metadata_tablename}} ORDER BY created DESC;
`

module.exports = Node;