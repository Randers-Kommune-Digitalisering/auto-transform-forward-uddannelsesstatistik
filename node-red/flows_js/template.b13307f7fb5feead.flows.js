const Node = {
  "id": "b13307f7fb5feead",
  "type": "template",
  "z": "c7d12dee3aab4a6e",
  "g": "f51e9394d30178a9",
  "name": "Definer nye kolonnenavne",
  "field": "columns",
  "fieldType": "flow",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 530,
  "y": 120,
  "wires": [
    [
      "85c7b720a57ce392"
    ]
  ],
  "_order": 158
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