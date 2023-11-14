const Node = {
  "id": "ea6592edc9bd5752",
  "type": "template",
  "z": "971a7ae6df987a48",
  "g": "c81f2ef6235412e6",
  "name": "Body",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 490,
  "y": 2780,
  "wires": [
    [
      "c0d5842f7eee0aad"
    ]
  ],
  "_order": 110
}

Node.template = `
{
   "type": "message",
   "attachments": [
      {
         "contentType": "application/vnd.microsoft.card.adaptive",
         "contentUrl": null,
         "content": {
            "\$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.2",
            "body": [
               {
                  "type": "TextBlock",
                  "size": "Medium",
                  "weight": "Bolder",
                  "text": "{{{card.title}}}"
               },
               {
                  "type": "TextBlock",
                  "text": "{{{card.date}}}",
                  "wrap": true,
                  "spacing": "None",
                  "fontType": "Monospace",
                  "isSubtle": true
               },
               {
                  "type": "TextBlock",
                  "text": "Der blev fundet ny uddannelsesstatistik:",
                  "style": "columnHeader",
                  "size": "Default",
                  "wrap": true
               }
            ],
            "actions": [
               {
                  "type": "Action.OpenUrl",
                  "title": "Download ny data",
                  "url": "{{{card.url}}}"
               }
            ]
         }
      }
   ]
}
`

module.exports = Node;