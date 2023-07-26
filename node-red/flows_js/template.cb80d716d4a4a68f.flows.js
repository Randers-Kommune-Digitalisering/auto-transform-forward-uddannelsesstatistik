const Node = {
  "id": "cb80d716d4a4a68f",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "Opsætning af API kald \\n Datasæt",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 250,
  "y": 120,
  "wires": [
    [
      "916c034b8028a555"
    ]
  ],
  "_order": 15
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
   "indlejret": false,
   "tomme_rækker": false,
   "formattering": "json",
   "side": 1
}
`

module.exports = Node;