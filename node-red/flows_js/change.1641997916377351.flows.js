const Node = {
  "id": "1641997916377351",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "URL",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "UDDANNELSESSTATISTIK_WEBHOOK_URL",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 750,
  "y": 2240,
  "wires": [
    [
      "ed49a2da96d2781c",
      "f1974fcde39acd50"
    ]
  ],
  "_order": 93
}

module.exports = Node;