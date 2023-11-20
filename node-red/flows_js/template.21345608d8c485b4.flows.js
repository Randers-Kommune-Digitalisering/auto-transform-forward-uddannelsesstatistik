const Node = {
  "id": "21345608d8c485b4",
  "type": "template",
  "z": "971a7ae6df987a48",
  "g": "547b60b86161002f",
  "name": "Forespørgsel ↓\\n Opret fildata tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 310,
  "y": 2280,
  "wires": [
    [
      "145b7a17051dfbef"
    ]
  ],
  "_order": 139
}

Node.template = `
CREATE TABLE if not exists {{flow.files_tablename}} (
	filename VARCHAR(255) NOT NULL,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	data BLOB,
	UNIQUE (filename)
	);
`

module.exports = Node;