const Node = {
  "id": "0e9ff0b1b4443aba",
  "type": "template",
  "z": "bbeb8dfaa79c297c",
  "name": "Forespørgsel ↓\\n Hent fildata fra DB",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 310,
  "y": 240,
  "wires": [
    [
      "ec29a89ef0288c88"
    ]
  ],
  "_order": 176
}

Node.template = `
SELECT data FROM {{global.files_tablename}} WHERE filename = "{{filename}}";
`

module.exports = Node;