import React from "react";

export default function ServicesTable() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen" dir="rtl">
      {/* Header with tabs */}
      <div className="flex flex-row items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 flex items-center gap-2 hover:bg-gray-200 transition-colors">
            <span>ترتيب</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 flex items-center gap-2 hover:bg-gray-200 transition-colors">
            <span>تصفية</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="text-blue-600 text-2xl font-bold hover:text-blue-700 transition-colors">+</button>
          <div className="flex items-center gap-6">
            <button className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors">
              المسودات
            </button>
            <button className="text-blue-600 font-semibold text-lg border-b-2 border-blue-600 pb-1">
              الخدمات
            </button>
          </div>
        </div>
      </div>

      {/* Main table card */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="w-12 text-center p-4">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                </th>
                <th className="text-center font-semibold text-gray-700 p-4">الخدمة</th>
                <th className="text-center font-semibold text-gray-700 p-4">الحالة</th>
                <th className="text-center font-semibold text-gray-700 p-4">السعر</th>
                <th className="text-center font-semibold text-gray-700 p-4">المدة</th>
                <th className="text-center font-semibold text-gray-700 p-4">الفئة</th>
                <th className="text-center font-semibold text-gray-700 p-4">الوسوم</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  {/* Checkbox */}
                  <td className="text-center p-4">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  </td>
                  
                  {/* Service with avatar */}
                  <td className="text-center p-4">
                    <div className="flex flex-row-reverse items-center gap-3 justify-center">
                      <div className="w-8 h-8 rounded-full border-2 border-gray-200 bg-gray-800 flex items-center justify-center overflow-hidden">
                        <img 
                          src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face`} 
                          alt="avatar" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-medium text-gray-900">استشارة</span>
                    </div>
                  </td>
                  
                  {/* Status */}
                  <td className="text-center p-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      نشط
                    </span>
                  </td>
                  
                  {/* Price */}
                  <td className="text-center p-4">
                    <div className="flex flex-row-reverse items-center gap-1 justify-center">
                      <span className="text-gray-600 font-bold">﷼</span>
                      <span className="font-medium text-gray-900">254</span>
                    </div>
                  </td>
                  
                  {/* Duration */}
                  <td className="text-center p-4">
                    <span className="text-gray-700">1 ساعة</span>
                  </td>
                  
                  {/* Category */}
                  <td className="text-center p-4">
                    <span className="text-gray-700">محاماة</span>
                  </td>
                  
                  {/* Tags */}
                  <td className="text-center p-4">
                    <div className="flex flex-row-reverse items-center gap-1 justify-center cursor-pointer hover:text-blue-600 transition-colors">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className="text-gray-700">4</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}