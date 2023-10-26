const Node = {
  "id": "44cd41a60354b55a",
  "type": "template",
  "z": "fc46f6d88e3fdc07",
  "name": "Forespørgsel ↓\\n Findes metadata?",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 510,
  "y": 200,
  "wires": [
    [
      "2b1c520e7b738cfd"
    ]
  ],
  "_order": 146
}

Node.template = `
SHOW TABLES LIKE '{{flow.metadata_tablename}}';
`

module.exports = Node;