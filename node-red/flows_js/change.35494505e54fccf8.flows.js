const Node = {
  "id": "35494505e54fccf8",
  "type": "change",
  "z": "971a7ae6df987a48",
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
  "x": 450,
  "y": 260,
  "wires": [
    [
      "cb80d716d4a4a68f"
    ]
  ],
  "_order": 5
}

module.exports = Node;