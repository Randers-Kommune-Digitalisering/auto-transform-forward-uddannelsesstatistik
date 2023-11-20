const Node = {
  "id": "9ceee9fc89f9e3ec",
  "type": "template",
  "z": "971a7ae6df987a48",
  "g": "547b60b86161002f",
  "name": "Forespørgsel ↓\\n Slet fildata for datasæt hvis det \\n eksisterer i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 310,
  "y": 2420,
  "wires": [
    [
      "d9cbf539e61aada4"
    ]
  ],
  "_order": 150
}

Node.template = `
DELETE FROM {{flow.files_tablename}} WHERE filename = "{{filename}}";
`

module.exports = Node;