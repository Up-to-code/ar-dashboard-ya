"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Plus, Bold, Italic, Underline, Strikethrough, AlignRight, AlignCenter, AlignLeft, List, MoreHorizontal } from 'lucide-react';

export default function ArabicServiceForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    duration: '',
    image: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-end mb-6">
          <div className="flex items-center space-x-reverse space-x-2 text-gray-600">
            <span>إضافة خدمة</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
            <button className="px-8 py-3 text-red-500 bg-red-50 font-medium border-b-2 border-red-500">
              المعلومات الأساسية
            </button>
            <button className="px-8 py-3 text-gray-500 font-medium">
              المعلومات المتقدمة
            </button>
          </div>
        </div>

        <Card className="shadow-sm border-0">
          <CardContent className="p-8">
            {/* Image Upload Section */}
            <div className="mb-10">
              <Label className="text-right block text-gray-800 font-medium mb-4 text-lg">
                الصور
              </Label>
              <p className="text-sm text-gray-500 mb-4 text-right">
                اضغط صورة توضيحية
              </p>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-16 hover:border-gray-300 transition-colors bg-gray-50/50">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <Plus className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-10">
              {/* Title */}
              <div>
                <Label className="text-right block text-gray-800 font-medium mb-4 text-lg">
                  العنوان
                </Label>
                <Input
                  placeholder="تطبيق متيل"
                  className="text-right h-14 text-base bg-white border-gray-200 focus:border-red-500 focus:ring-red-500"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-3 text-right leading-relaxed">
                  الإسم الذي سيظهر للمشتري لهذه الخدمة، يفضل أن يكون<br />
                  واضحاً ومختصراً عن محتوى الخدمة
                </p>
              </div>

              {/* Category */}
              <div>
                <Label className="text-right block text-gray-800 font-medium mb-4 text-lg">
                  الفئة
                </Label>
                <Select onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger className="text-right h-14 bg-white border-gray-200 focus:border-red-500 focus:ring-red-500">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">تطوير ويب</SelectItem>
                    <SelectItem value="mobile">تطوير تطبيقات</SelectItem>
                    <SelectItem value="design">تصميم</SelectItem>
                    <SelectItem value="marketing">تسويق</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-500 mt-3 text-right leading-relaxed">
                  حدد الفئة أو التصنيف الذي تنتمي إليه هذه الخدمة، لتسهيل<br />
                  تنظيم الخدمات وتصنيفها من قبل العملاء
                </p>
              </div>

              {/* Price */}
              <div>
                <Label className="text-right block text-gray-800 font-medium mb-4 text-lg">
                  السعر
                </Label>
                <div className="relative">
                  <Input
                    placeholder="أدخل سعر الخدمة"
                    className="text-right h-14 pl-16 bg-white border-gray-200 focus:border-red-500 focus:ring-red-500"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 px-3 py-1 rounded text-sm text-gray-600 font-medium">
                    $
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-right">
                  حدد سعر الخدمة
                </p>
              </div>

              {/* Duration */}
              <div>
                <Label className="text-right block text-gray-800 font-medium mb-4 text-lg">
                  المدة
                </Label>
                <Select onValueChange={(value) => handleInputChange('duration', value)}>
                  <SelectTrigger className="text-right h-14 bg-white border-gray-200 focus:border-red-500 focus:ring-red-500">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-day">يوم واحد</SelectItem>
                    <SelectItem value="3-days">3 أيام</SelectItem>
                    <SelectItem value="1-week">أسبوع</SelectItem>
                    <SelectItem value="2-weeks">أسبوعين</SelectItem>
                    <SelectItem value="1-month">شهر</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-500 mt-3 text-right leading-relaxed">
                  الوقت الذي تستغرقه الخدمة لتنفيذها، وتستخدم لتنظيم<br />
                  المواعيد وإظهار توقيت الإنجاز للعملاء
                </p>
              </div>

              {/* Description */}
              <div>
                <Label className="text-right block text-gray-800 font-medium mb-4 text-lg">
                  الوصف
                </Label>
                <div className="border rounded-lg bg-white overflow-hidden">
                  {/* Toolbar */}
                  <div className="border-b bg-gray-50 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-reverse space-x-1">
                        <Button variant="ghost" size="sm" className="p-2 h-8 w-8 hover:bg-gray-200">
                          <Bold className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2 h-8 w-8 hover:bg-gray-200">
                          <Italic className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2 h-8 w-8 hover:bg-gray-200">
                          <Underline className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2 h-8 w-8 hover:bg-gray-200">
                          <Strikethrough className="w-4 h-4" />
                        </Button>
                        <div className="w-px h-6 bg-gray-300 mx-2"></div>
                        <Select>
                          <SelectTrigger className="w-16 h-8 text-sm">
                            <SelectValue placeholder="A" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="12">12</SelectItem>
                            <SelectItem value="14">14</SelectItem>
                            <SelectItem value="16">16</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="w-px h-6 bg-gray-300 mx-2"></div>
                        <Button variant="ghost" size="sm" className="p-2 h-8 w-8 hover:bg-gray-200">
                          <AlignRight className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2 h-8 w-8 hover:bg-gray-200">
                          <AlignCenter className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2 h-8 w-8 hover:bg-gray-200">
                          <AlignLeft className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2 h-8 w-8 hover:bg-gray-200">
                          <List className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="p-2 h-8 w-8 hover:bg-gray-200">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Text Area */}
                  <Textarea
                    placeholder="يرجى توضيح تفاصيل إضافية حول الخدمة"
                    className="border-0 text-right resize-none min-h-40 focus:ring-0 focus:ring-offset-0 text-base p-4"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-12 mt-12 border-t">
              <Button variant="outline" className="px-10 h-12 text-gray-600 border-gray-300 hover:bg-gray-50">
                حفظ كمسودة
              </Button>
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white px-10 h-12 font-medium"
                onClick={handleSubmit}
              >
                إضافة المشروع
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}