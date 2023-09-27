const Node = {
  "id": "2bb71781f4a802a0",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Headers",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\"Content-Type\":\"application/json\"}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 700,
  "y": 2180,
  "wires": [
    [
      "ea6592edc9bd5752"
    ]
  ],
  "_order": 94
}

module.exports = Node;