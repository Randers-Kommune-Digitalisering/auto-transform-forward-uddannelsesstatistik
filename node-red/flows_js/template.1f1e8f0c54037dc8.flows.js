const Node = {
  "id": "1f1e8f0c54037dc8",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "TEST \\n RESPONSE",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 190,
  "y": 220,
  "wires": [
    [
      "495a21e6f73735d2"
    ]
  ],
  "_order": 18
}

Node.template = `
[
    {
        "[Indikator].[Indikator].[Indikator]": "Faglig trivsel",
        "[Indikatorsvar].[Indikatorsvar].[Indikatorsvar]": "1 til 2",
        "[Institution].[Institution].[Institution]": "Testskolen",
        "[Klassetrin].[Skoletrin].[Skoletrin]": "Mellemtrin",
        "[Skoleår].[Skoleår].[Skoleår]": "2017/2018",
        "Indikatorsvar": "1,5"
    },
    {
        "[Indikator].[Indikator].[Indikator]": "Faglig trivsel",
        "[Indikatorsvar].[Indikatorsvar].[Indikatorsvar]": "1 til 2",
        "[Institution].[Institution].[Institution]": "Testskolen",
        "[Klassetrin].[Skoletrin].[Skoletrin]": "Mellemtrin",
        "[Skoleår].[Skoleår].[Skoleår]": "2018/2019",
        "Indikatorsvar": "1,9"
    },
    {
        "[Indikator].[Indikator].[Indikator]": "Faglig trivsel",
        "[Indikatorsvar].[Indikatorsvar].[Indikatorsvar]": "1 til 2",
        "[Institution].[Institution].[Institution]": "Testskolen",
        "[Klassetrin].[Skoletrin].[Skoletrin]": "Mellemtrin",
        "[Skoleår].[Skoleår].[Skoleår]": "2019/2020",
        "Indikatorsvar": "1,7"
    },
    {
        "[Indikator].[Indikator].[Indikator]": "Faglig trivsel",
        "[Indikatorsvar].[Indikatorsvar].[Indikatorsvar]": "1 til 2",
        "[Institution].[Institution].[Institution]": "Instutut for test",
        "[Klassetrin].[Skoletrin].[Skoletrin]": "Udskoling",
        "[Skoleår].[Skoleår].[Skoleår]": "2022/2023",
        "Indikatorsvar": "2,0"
    }
]
`

module.exports = Node;