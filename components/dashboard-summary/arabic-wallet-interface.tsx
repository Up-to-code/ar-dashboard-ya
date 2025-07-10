"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown, ChevronUp,   CreditCard, DollarSign, Shield,  ShoppingCart, Globe, Star, Settings } from 'lucide-react';

const WalletInterface = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    storeInfo: false,
    firstProduct: false,
    paymentMethods: true,
    marketing: false,
    domains: false,
    store: false,
    pricing: false,
    storeDesign: false
  });

  const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>({
    storeInfo: false,
    firstProduct: false,
    paymentMethods: false,
    marketing: false,
    domains: false,
    store: false,
    pricing: false,
    storeDesign: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleCheckbox = (section: string) => {
    setCheckboxes(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const features = [
    {
      key: 'storeInfo',
      title: 'أضف معلومات المتجر',
      icon: <Shield className="w-5 h-5" />,
      description: ''
    },
    {
      key: 'firstProduct',
      title: 'أضف أول منتج أو خدمة',
      icon: <ShoppingCart className="w-5 h-5" />,
      description: ''
    },
    {
      key: 'paymentMethods',
      title: 'تفعيل طرق الدفع',
      icon: <CreditCard className="w-5 h-5" />,
      description: 'قم بإعداد وتفعيل وسائل الدفع التي تريد قبولها في متجرك مثل الدفع الإلكتروني، الدفع عند الاستلام أو متجر نقاط للحصول على تجربة دفع مرنة وسهلة لعملائك.'
    },
    {
      key: 'marketing',
      title: 'أطلق أول حملة تسويقية',
      icon: <Globe className="w-5 h-5" />,
      description: ''
    },
    {
      key: 'domains',
      title: 'اربط دومين خاص أو احصل على دومين مجاني',
      icon: <Globe className="w-5 h-5" />,
      description: ''
    },
    {
      key: 'store',
      title: 'انشر متجرك الإلكتروني',
      icon: <Star className="w-5 h-5" />,
      description: ''
    },
    {
      key: 'pricing',
      title: 'إنشئ قائمة أسعار',
      icon: <DollarSign className="w-5 h-5" />,
      description: ''
    },
    {
      key: 'storeDesign',
      title: 'خصص تصميم واجهة المتجر',
      icon: <Settings className="w-5 h-5" />,
      description: ''
    }
  ];

  return (
 

 
    <Card className="shadow-xl shadow-[#3B4B6514] rounded-2xl border-none my-2">
        <CardHeader className="pb-3">
          <CardTitle className="text-right text-gray-800 font-medium">المهام المقترحة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {features.map((feature) => (
            <div key={feature.key} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 justify-between">
                  
                  <Checkbox
                    checked={checkboxes[feature.key]}
                    onCheckedChange={() => toggleCheckbox(feature.key)}
                    className="data-[state=primary]:bg-green-500 data-[state=primary]:border-green-500 rounded-full w-6 h-6 flex items-center justify-center"
                  />
                  <div className='flex items-center gap-2'>
                              <div className="flex items-center gap-2 text-right">
                  <span className="text-sm text-gray-700 font-bold ">{feature.title}</span>
                 </div>
                  
                  </div>
 
                </div>
                     <button
                    onClick={() => toggleSection(feature.key)}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    {expandedSections[feature.key] ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>  
              </div>
              
              {expandedSections[feature.key] && feature.description && (
                <div className="mt-3 pr-8">
                  <p className="text-gray-600 text-sm leading-relaxed text-right">
                    {feature.description}
                  </p>
                  {feature.key === 'paymentMethods' && (
                    <Button 
                      className="mt-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2 text-sm"
                    >
                      تفعيل
                    </Button>
                  )}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
   );
};

export default WalletInterface;