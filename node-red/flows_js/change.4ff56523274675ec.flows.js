const Node = {
  "id": "4ff56523274675ec",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Define card",
  "rules": [
    {
      "t": "set",
      "p": "urlbase",
      "pt": "msg",
      "to": "URL_BASE",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "card",
      "pt": "msg",
      "to": "{\t    \"title\": dataname,\t    \"url\": \"https://\" & urlbase & \"/uddannelsesstatistik.xlsx?file=\" & filename,\t    \"date\": $millis() ~> $fromMillis(\"[D01]-[M01]-[Y0001]\")\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 2180,
  "wires": [
    [
      "2bb71781f4a802a0"
    ]
  ],
  "_order": 98
}

module.exports = Node;