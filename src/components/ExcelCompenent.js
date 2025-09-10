// src/components/ExcelCompenent.js
import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

export default function ImportExportExcel(props) {
  const [data, setData] = useState([]);

  // Load dữ liệu từ localStorage khi component mount
  useEffect(() => {
    const stored = localStorage.getItem("Import Data for AI customer");
    if (stored) {
      let object = JSON.parse(stored);
      if (object.data) {
        setData(JSON.parse(object.data));
      }
    }
  }, []);

  // Đọc Excel -> JSON
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "" });

      // Lưu localStorage
      let object = {
        user_index: props.user,
        data: JSON.stringify(jsonData),
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem("Import Data for AI customer", JSON.stringify(object));

      // Cập nhật state để hiển thị ngay
      setData(jsonData);
    };
    reader.readAsBinaryString(file);
  };

  // Xuất JSON -> Excel
  const handleExport = () => {
    if (data.length === 0) {
      alert("Không có dữ liệu để export!");
      return;
    }
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "export.xlsx");
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Import & Export Excel</h2>
      <input type="file" accept=".xlsx,.xls" onChange={handleFileUpload} />

      {data.length > 0 && (
        <>
          <button
            onClick={handleExport}
            className="px-4 py-2 bg-green-500 text-white rounded mt-3"
          >
            Export Excel
          </button>
          <pre className="bg-gray-100 p-2 mt-3 rounded max-h-64 overflow-y-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </>
      )}
    </div>
  );
}
