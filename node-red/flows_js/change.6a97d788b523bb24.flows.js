const Node = {
  "id": "6a97d788b523bb24",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "27596e92bf01726a",
  "name": "sæt url og data",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"group\": $flowContext('prefix') & $replace(dataset, \"_\", \"-\"),\t    \"name\": $replace(schoolYear, \"/\", \"-\"),\t    \"data\": $flowContext('data')\t}",
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
      "p": "headers.content-type",
      "pt": "msg",
      "to": "application/json",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 780,
  "y": 1720,
  "wires": [
    [
      "b052616e50065cae"
    ]
  ],
  "_order": 131
}

module.exports = Node;