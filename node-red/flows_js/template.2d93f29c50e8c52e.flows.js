const Node = {
  "id": "2d93f29c50e8c52e",
  "type": "template",
  "z": "971a7ae6df987a48",
  "g": "16e22b5e86fbc004",
  "name": "Forespørgsel ↓\\n Opret metadata tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 320,
  "y": 360,
  "wires": [
    [
      "16abbee64e6bd34f"
    ]
  ],
  "_order": 81
}

Node.template = `
CREATE TABLE if not exists {{flow.metadata_tablename}} (
	schoolYear VARCHAR(255) NOT NULL,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	dataset_elementCount INT UNSIGNED,
	UNIQUE (schoolYear)
	);
`

module.exports = Node;