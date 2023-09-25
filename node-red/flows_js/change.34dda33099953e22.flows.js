const Node = {
  "id": "34dda33099953e22",
  "type": "change",
  "z": "bbeb8dfaa79c297c",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "filename",
      "pt": "msg",
      "to": "payload.file & \".xlsx\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 450,
  "y": 100,
  "wires": [
    [
      "928ae17d0078e2f1",
      "9b76c31e7766b0c7",
      "76c7cecd3fa1b237"
    ]
  ],
  "_order": 102
}

module.exports = Node;