// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import LoginPage from './components/LoginPage/LoginPage';
import ShoppingPage from './components/ShoppingPage/ShoppingPage.jsx';
import AdminDashboard from './components/AdminDashboard/AdminDashboard.jsx';
import StaffPage from './components/StaffPage/StaffPage.jsx';
import MainContent from './components/ShoppingPage/MainContent/MainContent.jsx';
import Account from './components/ShoppingPage/Account/Account.jsx';
import Test from './components/WareHouse/ManageWarehouse/Test.jsx';
import ImportExport from './components/WareHouse/ImportExport/ImportExport.jsx';
import Catalog from './components/Catalog/Catalog.jsx';
import CatalogCustomer from './components/Catalog/CatalogCustomer/CatalogCustomer.jsx';
import CatalogPartner from './components/Catalog/CatalogPartner/CatalogPartner.jsx';
import CatalogSupplier from './components/Catalog/CatalogSupplier/CatalogSupplier.jsx';
import CatalogGood from './components/Catalog/CatalogGood/CatalogGood.jsx';
import CatalogMaterial from './components/Catalog/CatalogMaterial/CatalogMaterial.jsx';
import BookedOrder from './components/PurchasedOrder/BookedOrder/BookedOrder.jsx';
import OrderStatus from './components/PurchasedOrder/OrderStatus/OrderStatus.jsx';
import ImportShipment from './components/PurchasedOrder/ImportShipment/ImportShipment.jsx';
import FormInfoGood from './components/Catalog/CatalogGood/FormInfoGood/FormInfoGood.jsx';
import WarehouseManagement from './components/WareHouse/WarehouseManagement/WarehouseManagement.jsx';
import WarehouseManagementBatch from './components/WareHouse/WarehouseManagement/WarehouseManagementBatch.jsx'
import ImportWarehouse from './components/WareHouse/ImportWarehouse/ImportWarehouse.jsx';
import ExportWarehouse from './components/WareHouse/ExportWarehouse/ExportWarehouse.jsx';
import TransactionHistory from './components/WareHouse/TransactionHistory/TransactionHistory.jsx';
import PurchasedRequest from './components/PurchasedOrder/PurchasedRequest/PurchasedRequest.jsx';
import CashBook from './components/CashBook/CashBook.jsx';
import SellPage from './components/SellPage/SellPage.jsx';
import OverviewPage from './components/OverviewPage/OverviewPage.jsx';
import LoginPage2 from './components/LoginPage/LoginPage2.jsx';
import Income from './components/CashBook/Income/Income.jsx';
import Expense from './components/CashBook/Expense/Expense.jsx';
import WorkflowBuilder from './components/Workflow/WorkflowBuilder.jsx';
import WorkflowBuilder2 from './components/Workflow/WorkflowBuilder.jsx';
import Payable from './components/CashBook/Payable/Payable.jsx';
import Receivable from './components/CashBook/Receivable/Receivable.jsx';
import PurchaseOrder from './components/PurchasedOrder/OrderStatus/PurchaseOrder/PurchaseOrder.jsx';
import PurchaseRequest from './components/PurchasedOrder/OrderStatus/PurchaseRequest/PurchaseRequest.jsx';
import GoodReceipt from './components/PurchasedOrder/OrderStatus/GoodReceipt/GoodReceipt.jsx';
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* TRANG CÔNG KHAI: Ai cũng thấy */}
        <Route path="/" element={<LoginPage />} />

        {/* TRANG RIÊNG TƯ: Chỉ dành cho Admin */}
        <Route path="/admin" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } />

        {/* TRANG RIÊNG TƯ: Dành cho cả Admin và Nhân viên xưởng */}
        <Route path="/orders" element={
          <ProtectedRoute allowedRoles={['admin', 'staff']}>
            <StaffPage />
          </ProtectedRoute>
        } />

        {/* TRANG RIÊNG TƯ: Dành cho khách hàng */}
        <Route path="/shop" element={
          <ProtectedRoute allowedRoles={['customer']}>
            <ShoppingPage />
          </ProtectedRoute>
        }/>
        <Route path="/shop/cart" element={<MainContent />} />
        <Route path="/shop/account" element={<Account/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/test/importexport" element={<ImportExport/>} />

        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/catalog/customer" element={<CatalogCustomer/>} />
        <Route path="/catalog/partner" element={<CatalogPartner/>} />
        <Route path="/catalog/supplier" element={<CatalogSupplier />} />
        <Route path="/catalog/good" element={<CatalogGood/>} />
        <Route path="/catalog/good/form" element={<FormInfoGood/>} />
        <Route path="/catalog/material" element={<CatalogMaterial/>}/>

        <Route path="/bookedorder" element={<BookedOrder />} />
        <Route path="/orderstatus" element={<OrderStatus />} />
        <Route path="/orderstatus/purchaserequest" element={<PurchaseRequest />} />
        <Route path="/orderstatus/purchaseorder" element={<PurchaseOrder />} />
        <Route path="/orderstatus/goodreceipt" element={<GoodReceipt />} />
        <Route path="/importshipment" element={<ImportShipment />} />
        <Route path="/purchasedrequest" element={<PurchasedRequest/>}/>

        <Route path="/warehouse" element={<WarehouseManagement/>}/>
        <Route path="/warehouse/batch" element={<WarehouseManagementBatch/>}/>
        <Route path="/warehouse/import" element={<ImportWarehouse/>}/>
        <Route path="/warehouse/export" element={<ExportWarehouse/>}/>
        <Route path="/warehouse/transactionhistory" element={<TransactionHistory/>}/>

        <Route path="/cashbook" element={<CashBook/>}/>
        <Route path="/cashbook/income" element={<Income/>}/>
        <Route path="/cashbook/expense" element={<Expense/>}/>
        <Route path="/cashbook/payable" element={<Payable/>}/>
        <Route path="/cashbook/receivable" element={<Receivable/>}/>

        <Route path="/sellpage" element={<SellPage/>}/>

        <Route path="/overview" element={<OverviewPage/>}/>

        <Route path="/workflow" element={<WorkflowBuilder/>}/>
        <Route path="/workflow2" element={<WorkflowBuilder2/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
