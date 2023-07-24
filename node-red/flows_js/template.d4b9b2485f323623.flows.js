const Node = {
  "id": "d4b9b2485f323623",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "Definer nye kolonnenavne",
  "field": "columns",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 470,
  "y": 420,
  "wires": [
    [
      "3f1fbebfb0adc88c"
    ]
  ],
  "_order": 21
}

Node.template = `
{
    "[Skoleår].[Skoleår].[Skoleår]": "År",
    "[Klassetrin].[Skoletrin].[Skoletrin]": "Trin",
    "[Institution].[Institution].[Institution]": "Skolenavn",
    "[Indikator].[Indikator].[Indikator]": "Indikator",
    "Indikatorsvar": "Indikatorsvar"
}
`

module.exports = Node;