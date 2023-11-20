const Node = {
  "id": "bfb9f9b4e818270a",
  "type": "template",
  "z": "971a7ae6df987a48",
  "g": "b76e7a98281fad0a",
  "name": "Forespørgsel ↓\\n Slet fildata for datasæt hvis det \\n eksisterer i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 350,
  "y": 3460,
  "wires": [
    [
      "012143a59ad13307"
    ]
  ],
  "_order": 152
}

Node.template = `
DELETE FROM {{files_tablename}} WHERE filename = {{filename}};
`

module.exports = Node;