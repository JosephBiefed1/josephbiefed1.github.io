function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();

}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/1KLRvv7_Z6h1DXaKPEyuQHMLxwEDT705vS1CNoEQBM5o/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Data");

  ws.appendRow([
    formObject.passportName,
    formObject.passportNumber,
    formObject.gender,
    formObject.expiry_date,
    formObject.contactNumber,
    formObject.pax,
    formObject.travel,
    formObject.origin,
    formObject.destination,
    formObject.opt1,
    formObject.opt2,
    formObject.opt3,
    formObject.opt4,
    formObject.opt5,
    formObject.opt8,
    formObject.opt9,
    formObject.opt10,
    formObject.opt11,
    formObject.opt12,

  ]);
}