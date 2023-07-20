const Node = {
  "id": "fbf4f1d4ceab78a6",
  "type": "http request",
  "z": "e665b72561455937",
  "name": "",
  "method": "POST",
  "ret": "txt",
  "paytoqs": "ignore",
  "url": "",
  "tls": "",
  "persist": false,
  "proxy": "",
  "insecureHTTPParser": false,
  "authType": "",
  "senderr": false,
  "headers": [
    {
      "keyType": "other",
      "keyValue": "Authorization",
      "valueType": "other",
      "valueValue": "Bearer"
    },
    {
      "keyType": "other",
      "keyValue": "Cookie",
      "valueType": "msg",
      "valueValue": "api.cookie"
    }
  ],
  "x": 910,
  "y": 120,
  "wires": [
    []
  ],
  "_order": 3
}

module.exports = Node;