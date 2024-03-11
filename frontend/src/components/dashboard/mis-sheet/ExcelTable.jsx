// import {useState,useEffect} from 'react';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
 
// function ExcelTable({allRows}){

//     const [isExportClicked, setIsExportClicked] = useState(false);


//     function convertToIST(utcTimestamp) {
//         const utcDate = new Date(utcTimestamp);
    
//         // Convert to Indian Standard Time (IST)
//         const istDate = new Date(
//           utcDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
//         );
    
//         // Format IST date and time with hours, minutes, AM/PM
//         const options = {
//           year: "numeric",
//           month: "short",
//           day: "numeric",
//           hour: "numeric",
//           minute: "numeric",
//           hour12: true,
//         };
//         const formattedISTDateTime = istDate.toLocaleString("en-US", options);
    
//         // Return the formatted IST date and time as a string
//         return formattedISTDateTime;
//       }

   
   

//         return (
//             <div className="container">
//                 <div className="row mt-4">
               
//                   <ReactHTMLTableToExcel
//                     id="test-table-xls-button"
//                     className="download-table-xls-button btn btn-primary  mb-3 "
//                     table="table-to-xls"
//                     filename="tablexls"
//                     sheet="tablexls"
//                     buttonText="Export to Excel"/>
                
//                     {isExportClicked && (
//                    <table className="table" id="table-to-xls">
//                     <thead className="thead-dark">
//                     <tr>
//                         <th>S.No.</th>
//                         <th>Ref No.</th>
//                         <th>Policy No.</th>
//                         <th>Row No.</th>
//                         <th>Veh. No.</th>
//                         <th>Insured</th>
//                         <th>Insured GST No.</th>
//                         <th>Survey Type</th>
//                         <th>Date Of Information</th>
//                         <th>Date of Survey</th>
//                         <th>Estimate Amt.</th>
//                         <th>Assessed Amt.</th>
//                         <th>TAT</th>
//                         <th>Remarks</th>
//                         <th>Bill No.</th>
//                         <th>Bill Total</th>
//                         <th>Bill Date</th>
//                     </tr>
//                     </thead>
//                     <tbody>
                  
//                          {allRows.map((res,index)=>
//                             <tr key={index}>
//                             <td>{index+1}</td>
//                             <td>{res.ReferenceNo}</td>
//                             <td>{res.PolicyNumber}</td>
//                             <td>{res.ClaimNumber}</td>
//                             <td>{res.RegisteredNumber}</td>
//                             <td>{res.InsuredGSTNumber}</td>
//                             <td>{convertToIST(res.DateOfIntimation)}</td>
//                             <td>{convertToIST(res.DateOfSurvey)}</td>
//                             <td>{res.EstimateAmt}</td>
//                             <td>{res.AssessedAmt}</td>
//                             <td>0</td>
//                             <td>{res.Remarks}</td>
//                             <td>{res.BillNo}</td>
//                             <td>{res.BillTotal}</td>
//                             <td>{convertToIST(res.BillDate)}</td>
//                             </tr>
//                           )}   
                      
//                     </tbody>   
//                 </table>)}
//              </div>
//             </div>
//         );
//     }
 
// export default ExcelTable;
