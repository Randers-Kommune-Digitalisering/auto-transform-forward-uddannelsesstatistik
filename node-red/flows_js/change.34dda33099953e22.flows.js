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
      "to": "payload.file & \".csv\"",
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
      "ca701ca45c5ccde1"
    ]
  ],
  "_order": 158
}

module.exports = Node;