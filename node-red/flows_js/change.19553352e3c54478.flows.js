const Node = {
  "id": "19553352e3c54478",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Hent API værdier \\n fra globale variabler",
  "rules": [
    {
      "t": "set",
      "p": "api",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "api.key",
      "pt": "msg",
      "to": "API_KEY",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "api.url",
      "pt": "msg",
      "to": "API_URL",
      "tot": "env",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 210,
  "y": 260,
  "wires": [
    [
      "35494505e54fccf8"
    ]
  ],
  "_order": 2
}

module.exports = Node;