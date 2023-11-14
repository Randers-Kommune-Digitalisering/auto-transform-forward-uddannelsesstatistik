const Node = {
  "id": "f90295ce23c8e93d",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 340,
  "y": 3160,
  "wires": [
    [
      "012143a59ad13307"
    ]
  ],
  "_order": 157
}

Node.template = `
DROP TABLE elevtrivsel_4til9klasse_metadata
`

module.exports = Node;