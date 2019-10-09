function ttt(data) {
    var spreadsheet = SpreadsheetApp.openById('1wy0jQqGutfD_FAS3fT3yzih_FdpKKFimtLLhkpuSJ4U');
    var sheet = spreadsheet.getSheetByName('Sheet1');
    sheet.appendRow([data]);
}

function test() {
       
}
