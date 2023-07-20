const Node = {
  "id": "fbf4f1d4ceab78a6",
  "type": "http request",
  "z": "971a7ae6df987a48",
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
  "x": 1150,
  "y": 260,
  "wires": [
    [
      "ef7dab39a12450fb"
    ]
  ],
  "_order": 4
}

module.exports = Node;