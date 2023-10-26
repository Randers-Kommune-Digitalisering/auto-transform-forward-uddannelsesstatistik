const Node = {
  "id": "d4b9b2485f323623",
  "type": "template",
  "z": "971a7ae6df987a48",
  "g": "57e65c48f5b0a2e1",
  "name": "Definer nye kolonnenavne",
  "field": "columns",
  "fieldType": "flow",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 690,
  "y": 100,
  "wires": [
    [
      "761a7e254521b639"
    ]
  ],
  "_order": 80
}

Node.template = `
{
    "[Skoleår].[Skoleår].[Skoleår]": "År",
    "[Klassetrin].[Skoletrin].[Skoletrin]": "Trin",
    "[Institution].[Institution].[Institution]": "Skolenavn",
    "[Indikatorsvar].[Indikatorsvar].[Indikatorsvar]": "Indikator",
    "Indikatorsvar": "Indikatorsvar"
}
`

module.exports = Node;