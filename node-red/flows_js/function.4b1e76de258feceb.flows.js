const Node = {
  "id": "4b1e76de258feceb",
  "type": "function",
  "z": "971a7ae6df987a48",
  "g": "7d56a32338a2cffc",
  "name": "Konvertér til xlsx",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "xlsx",
      "module": "csvtoxlsxconverter"
    }
  ],
  "x": 860,
  "y": 1900,
  "wires": [
    [
      "b86d486adb62c002",
      "f32ff0b0accd1c5e",
      "7eea1c286c83412d"
    ]
  ],
  "_order": 58
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, xlsx) {
  const fileName = msg.dataset;
  const fullFile = fileName + '.xlsx';
  
  xlsx('inputfile.csv', fullFile,
      
      function ()
      {
          console.log("converted data to file: " + fullFile);
      }
  
  );
  
  msg.filename = fileName;
  
  return msg;
}

module.exports = Node;