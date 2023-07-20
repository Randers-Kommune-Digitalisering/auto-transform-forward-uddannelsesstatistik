const Node = {
  "id": "43904e060b9b2911",
  "type": "change",
  "z": "971a7ae6df987a48",
  "d": true,
  "name": "Forbered API kald",
  "rules": [
    {
      "t": "set",
      "p": "cookies",
      "pt": "msg",
      "to": "{\t    \"API_Key\": api.key\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 450,
  "y": 300,
  "wires": [
    []
  ],
  "_order": 7
}

module.exports = Node;