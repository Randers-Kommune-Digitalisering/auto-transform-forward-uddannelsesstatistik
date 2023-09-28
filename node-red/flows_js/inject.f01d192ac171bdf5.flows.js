const Node = {
  "id": "f01d192ac171bdf5",
  "type": "inject",
  "z": "971a7ae6df987a48",
  "name": "Parse indikatorsvar til float",
  "props": [
    {
      "p": "payload"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": false,
  "onceDelay": 0.1,
  "topic": "",
  "payload": "payload ~> | $ | {\t\t    \"Indikatorsvar\": Indikatorsvar ~> $replace(\",\", \".\") ~> $number\t\t} |",
  "payloadType": "jsonata",
  "x": 1070,
  "y": 1700,
  "wires": [
    []
  ],
  "_order": 119
}

module.exports = Node;