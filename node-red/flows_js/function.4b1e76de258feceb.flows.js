const Node = {
  "id": "4b1e76de258feceb",
  "type": "function",
  "z": "971a7ae6df987a48",
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
  "x": 600,
  "y": 1900,
  "wires": [
    [
      "b936a17457cc0393",
      "77b858f8b9b55d97",
      "b86d486adb62c002"
    ]
  ],
  "_order": 51
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, xlsx) {
  const fileName = msg.dataset;
  
  xlsx('inputfile.csv', fileName,
      
      function ()
      {
          console.log("converted data to file: " + fileName + '.xlsx');
      }
  
  );
  
  msg.filename = fileName;
  
  return msg;
}

module.exports = Node;