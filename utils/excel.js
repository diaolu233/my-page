// // import Excel from "exceljs"
// // export default function excel(){
// //     // console.log(1)
// //     const workbook = new Excel.Workbook();
// //         workbook.views = [
// //             {
// //                 x: 0, y: 0, width: 10000, height: 20000,
// //                 firstSheet: 0, activeTab: 0, visibility: 'visible'
// //             }
// //         ];
// //         const workSheet = workbook.addWorksheet('商务报表');
// //              workSheet.pageSetup = {
// //                 paperSize: 9,
// //                 orientation: 'landscape',
// //             },           
// //             // 之后调整pageSetup设置
// //             workSheet.pageSetup.margins = {
// //                 left: 0.1, right: 0.1,
// //                 top: 0.25, bottom: 0.2,
// //                 header: 0.2, footer: 0.2
// //             };
// //             //打印页面设置固定的行
// //             workSheet.pageSetup.printTitlesRow = '1:2';
// //         const columns = [
// //             { header: '币种', key: 'coin', width: 15 },
// //             { header: '周新增加算力', key: 'newComputingPower', width: 15 },
// //             { header: '新增算力比例', key: 'newComputingPowerRatio', width: 15 }
// //         ];
// //         const secondRow = {
// //             serviceItem: '科室',

// //         };

// //         // const weekDayMap = {
// //         //     'Monday': '星期一',
// //         //     'Tuesday': '星期二',
// //         //     'Wednesday': '星期三',
// //         //     'Thursday': '星期四',
// //         //     'Friday': '星期五',
// //         //     'Saturday': '星期六',
// //         //     'Sunday': '星期日',
// //         // };
// //         // const tqMap = {
// //         //     'AM': '上午',
// //         //     'PM': '下午',
// //         // };
// //         workSheet.columns = columns;
// //         // Add Main Content
// //         workSheet.addRow(secondRow);
// //         // dateRows.first().serviceData.forEach(eachDetail => {
// //         //     workSheet.addRow(eachDetail);
// //         // });
// // }





import ExportJsonExcel from 'js-export-excel'
export default function excel(){
    var option={};
 
    option.fileName = 'excel'
    option.datas=[
      {
        sheetData:[{one:'一行一列',two:'一行二列'},{one:'二行一列',two:'二行二列'}],
        sheetName:'sheet',
        sheetFilter:['two','one'],
        sheetHeader:['第一列','第二列']
      },
      {
        sheetData:[{one:'一行一列',two:'一行二列'},{one:'二行一列',two:'二行二列'}]
      }
    ];
     
    var toExcel = new ExportJsonExcel(option); //new
    toExcel.saveExcel(); //保存
}
