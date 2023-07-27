const Node = {
  "id": "43904e060b9b2911",
  "type": "change",
  "z": "e665b72561455937",
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
  "x": 510,
  "y": 160,
  "wires": [
    []
  ],
  "_order": 25
}

module.exports = Node;