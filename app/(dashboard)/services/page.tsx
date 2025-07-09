import { TableDemo } from '@/components/common/TableDemo'
import ArabicServiceForm from '@/components/dashboard-summary/arabic-service-form'
import ArabicServicesTable from '@/components/dashboard-summary/arabic-services-table'
import WalletInterface from '@/components/dashboard-summary/arabic-wallet-interface'
import React from 'react'

export default function page() {
  return (
    <div>
<TableDemo />
<ArabicServicesTable />
  
        <ArabicServiceForm />
    </div>
  )
}
