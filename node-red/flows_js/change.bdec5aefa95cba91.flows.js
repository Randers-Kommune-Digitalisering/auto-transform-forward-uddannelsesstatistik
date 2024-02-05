const Node = {
  "id": "bdec5aefa95cba91",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "447a9c81f269a6af",
  "name": "Sæt request",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"file\": {\t        \"value\": payload,\t        \"options\": {\t            \"filename\": $flowContext('prefix') & dataset & \"_\" & $replace(schoolYear, \"/\", \"-\") & \".csv\"\t        }\t    }\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "CUSTOM_DATA_URL",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "POST",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "headers[\"overwrite\"]",
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
  "x": 250,
  "y": 2080,
  "wires": [
    [
      "920f04307337da4a"
    ]
  ],
  "_order": 129
}

module.exports = Node;