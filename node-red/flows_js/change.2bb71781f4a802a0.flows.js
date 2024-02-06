const Node = {
  "id": "2bb71781f4a802a0",
  "type": "change",
  "z": "971a7ae6df987a48",
  "d": true,
  "g": "c81f2ef6235412e6",
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
  "x": 240,
  "y": 2260,
  "wires": [
    [
      "1641997916377351"
    ]
  ],
  "_order": 118
}

module.exports = Node;