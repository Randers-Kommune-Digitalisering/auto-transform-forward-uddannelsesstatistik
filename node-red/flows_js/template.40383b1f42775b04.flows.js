const Node = {
  "id": "40383b1f42775b04",
  "type": "template",
  "z": "971a7ae6df987a48",
  "g": "b76e7a98281fad0a",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 350,
  "y": 3260,
  "wires": [
    [
      "405a912b2c3eab12"
    ]
  ],
  "_order": 146
}

Node.template = `
SELECT * FROM {{flow.files_tablename}}
`

module.exports = Node;