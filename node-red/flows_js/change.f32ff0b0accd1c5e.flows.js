const Node = {
  "id": "f32ff0b0accd1c5e",
  "type": "change",
  "z": "971a7ae6df987a48",
  "d": true,
  "g": "7d56a32338a2cffc",
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
  "x": 1140,
  "y": 1900,
  "wires": [
    []
  ],
  "_order": 108
}

module.exports = Node;