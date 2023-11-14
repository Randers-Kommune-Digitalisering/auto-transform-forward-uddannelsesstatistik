const Node = {
  "id": "659c883a70e3086a",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "98d04e4a55a8736c",
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
  "x": 710,
  "y": 1280,
  "wires": [
    [
      "0bd434a92c70c8be"
    ]
  ],
  "_order": 103
}

module.exports = Node;