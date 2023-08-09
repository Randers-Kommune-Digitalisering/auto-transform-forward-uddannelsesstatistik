const Node = {
  "id": "19553352e3c54478",
  "type": "change",
  "z": "e665b72561455937",
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
  "x": 290,
  "y": 120,
  "wires": [
    [
      "35494505e54fccf8"
    ]
  ],
  "_order": 31
}

module.exports = Node;