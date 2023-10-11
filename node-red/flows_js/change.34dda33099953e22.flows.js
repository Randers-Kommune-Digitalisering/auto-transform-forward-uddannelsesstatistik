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
      "9b76c31e7766b0c7",
      "ca701ca45c5ccde1",
      "778e492529d71c57"
    ]
  ],
  "_order": 129
}

module.exports = Node;