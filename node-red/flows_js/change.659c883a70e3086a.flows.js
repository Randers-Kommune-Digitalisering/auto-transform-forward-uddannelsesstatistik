const Node = {
  "id": "659c883a70e3086a",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "flow",
      "to": "$flowContext(\"data\") ~> $append( payload )",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 610,
  "y": 1020,
  "wires": [
    [
      "0bd434a92c70c8be"
    ]
  ],
  "_order": 82
}

module.exports = Node;