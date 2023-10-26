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
  "x": 750,
  "y": 100,
  "wires": [
    [
      "928ae17d0078e2f1"
    ],
    [
      "fe80bd44c3b78a70"
    ]
  ],
  "_order": 139
}

module.exports = Node;