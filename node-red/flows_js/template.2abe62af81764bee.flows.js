const Node = {
  "id": "2abe62af81764bee",
  "type": "template",
  "z": "971a7ae6df987a48",
  "g": "547b60b86161002f",
  "name": "Forespørgsel ↓\\n Indsæt fildata til DB",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 2520,
  "wires": [
    [
      "07d4464436dc9cec"
    ]
  ],
  "_order": 144
}

Node.template = `
INSERT INTO {{flow.files_tablename}} ({{{file_columns}}}) 
VALUES ({{{file_values}}})
`

module.exports = Node;