const Node = {
  "id": "35494505e54fccf8",
  "type": "change",
  "z": "e665b72561455937",
  "name": "Forbered API kald",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "api.url",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t    \"accept\": \"application/json\",\t    \"authorization\": \"Bearer \" & api.key,\t    \"cache-control\": \"max-age=0\",\t    \"content-type\": \"application/json\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 510,
  "y": 120,
  "wires": [
    [
      "0b6e04bcfae09cd2"
    ]
  ],
  "_order": 36
}

module.exports = Node;