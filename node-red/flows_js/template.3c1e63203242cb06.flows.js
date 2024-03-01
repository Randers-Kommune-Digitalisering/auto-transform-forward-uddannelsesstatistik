const Node = {
  "id": "3c1e63203242cb06",
  "type": "template",
  "z": "c7d12dee3aab4a6e",
  "g": "eacb60100e0da03c",
  "name": "API kald ↓\\n Hent indikatorsvar for skoleår",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 420,
  "y": 240,
  "wires": [
    [
      "df82e93c1ead84c2"
    ]
  ],
  "_order": 160
}

Node.template = `
{
   "område": "GS",
   "emne": "TRIV",
   "underemne": "KVALTRIV",
   "nøgletal": [
      "Indikatorsvar"
   ],
   "detaljering": [
      "[Indikator].[Indikator]",
      "[Indikatorsvar].[Indikator svar]",
      "[Institution].[Institution]",
      "[Klassetrin].[Skoletrin]",
      "[Skoleår].[Skoleår]"
   ],
   "filtre": {
      "[Institution].[Kommune]": [
         "Randers"
      ],
      "[Insttype].[Institutionstype]": [
         "Folkeskoler"
      ],
      "[Skoleår].[Skoleår]": [
         "{{{schoolYear}}}"
      ]
   },
   "indlejret": false,
   "tomme_rækker": false,
   "formattering": "json",
   "side": 1
}
`

module.exports = Node;