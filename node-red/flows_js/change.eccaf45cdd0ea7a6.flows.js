const Node = {
  "id": "eccaf45cdd0ea7a6",
  "type": "change",
  "z": "c7d12dee3aab4a6e",
  "g": "ee9ab24ee5e7d7b8",
  "name": "sæt url og data",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"group\": $flowContext('prefix') & $replace(dataset, \"_\", \"-\"),\t    \"data\": payload\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "custom-data-connector-service/in/",
      "tot": "str",
      "dc": true
    },
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "headers.content-type",
      "pt": "msg",
      "to": "application/json",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "headers.overwrite",
      "pt": "msg",
      "to": "true",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 440,
  "y": 360,
  "wires": [
    [
      "0ece373dbb507549"
    ]
  ],
  "_order": 167
}

module.exports = Node;