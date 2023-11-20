const Node = {
  "id": "6d43f9cb03b082ce",
  "type": "debug",
  "z": "971a7ae6df987a48",
  "g": "13cb76c02d53c334",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload ~> $count > 0 ?\t{\t    $flowContext(\"metadata_tablename\"): \"preparing datapull\",\t    \"datapull_schoolYears\": payload\t}\t:\t{\t    $flowContext(\"metadata_tablename\"): \"no new data to pull\",\t    \"latest_schoolYear\": latestData_schoolYear\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 900,
  "y": 700,
  "wires": [],
  "_order": 103
}

module.exports = Node;