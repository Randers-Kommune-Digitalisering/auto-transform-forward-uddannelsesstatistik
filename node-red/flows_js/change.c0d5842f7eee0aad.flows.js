const Node = {
  "id": "c0d5842f7eee0aad",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Tilføj datasæt til body",
  "rules": [
    {
      "t": "move",
      "p": "dataset_schoolYears",
      "pt": "flow",
      "to": "schoolYears",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "datasets",
      "pt": "msg",
      "to": "schoolYears @ $year .\t{\t    \"type\": \"TextBlock\",\t    \"text\": \"- \" & $$.card.title & \" (\" & $year  & \")\",\t    \"color\": \"Good\",\t    \"size\": \"Small\",\t    \"spacing\": \"Small\",\t    \"wrap\": true\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.attachments[0].content.body",
      "pt": "msg",
      "to": "payload.attachments[0].content.body ~> $append(datasets)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 740,
  "y": 2260,
  "wires": [
    [
      "1641997916377351"
    ]
  ],
  "_order": 121
}

module.exports = Node;