const Node = {
  "id": "779a2ca35eaa36d5",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "Forespørgsel \\n Opdater metadata for datasæt",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 590,
  "y": 1180,
  "wires": [
    [
      "1e46524eaf1bd1c4",
      "98f491936a7e996d"
    ]
  ],
  "_order": 76
}

Node.template = `
INSERT INTO {{flow.metadata_tablename}} ({{{meta_columns}}}) 
VALUES ({{{meta_values}}})
`

module.exports = Node;