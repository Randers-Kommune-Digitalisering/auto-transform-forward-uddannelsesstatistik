const Node = {
  "id": "ca701ca45c5ccde1",
  "type": "switch",
  "z": "bbeb8dfaa79c297c",
  "name": "file exists?",
  "property": "files",
  "propertyType": "global",
  "rules": [
    {
      "t": "cont",
      "v": "payload.file",
      "vt": "msg"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 710,
  "y": 100,
  "wires": [
    [
      "928ae17d0078e2f1"
    ],
    [
      "326e03ef84d4965a"
    ]
  ],
  "_order": 170
}

module.exports = Node;