const Node = {
  "id": "ea6592edc9bd5752",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "Body",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 590,
  "y": 2180,
  "wires": [
    [
      "1641997916377351"
    ]
  ],
  "_order": 97
}

Node.template = `
{
   "type":"message",
   "attachments":[
      {
         "contentType":"application/vnd.microsoft.card.adaptive",
         "contentUrl":null,
         "content":{
            "\$schema":"http://adaptivecards.io/schemas/adaptive-card.json",
            "type":"AdaptiveCard",
            "version":"1.2",
            "body": [
               {
                  "type": "TextBlock",
                  "size": "Medium",
                  "weight": "Bolder",
                  "text": "{{{payload.title}}}"
               },
               {
                  "type": "TextBlock",
                  "text": "25-09-2023",
                  "wrap": true,
                  "spacing": "none"
               },
               {
                  "type": "TextBlock",
                  "text": "Der blev fundet ny uddannelsesstatistik, tryk på knappen nedenfor for at starte download.",
                  "wrap": true
               }
            ],
            "actions": [
               {
                  "type": "Action.OpenUrl",
                  "title": "Download ny data",
                  "url": "{{{payload.url}}}"
               }
            ]
         }
      }
   ]
}
`

module.exports = Node;