const Node = {
  "id": "f32ff0b0accd1c5e",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "files",
      "pt": "global",
      "to": "$globalContext(\"files\") ~> $append([filename])",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 880,
  "y": 1980,
  "wires": [
    []
  ],
  "_order": 104
}

module.exports = Node;