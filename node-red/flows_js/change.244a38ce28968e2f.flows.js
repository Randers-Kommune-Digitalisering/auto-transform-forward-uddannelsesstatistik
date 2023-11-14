const Node = {
  "id": "244a38ce28968e2f",
  "type": "change",
  "z": "bbeb8dfaa79c297c",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{ \"Content-Type\": \"application/force-download\" }",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1125,
  "y": 240,
  "wires": [
    [
      "0d345d6d9f17869b"
    ]
  ],
  "l": false,
  "_order": 172
}

module.exports = Node;