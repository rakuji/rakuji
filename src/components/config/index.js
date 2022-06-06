export const debug = true
// 測試開發/營運網址
export const devUrl = 'http://localhost:3000'
export const prodUrl = 'http://www.abc.com'

export const pathnameList = [
  '/about',
  '/login',
  '/product',
  '/product/baby',
  '/product/baby/birth',
  '/product/men',
  '/product/women',
  '/productcategory',
  '/productcategory/pc',
  '/productcategory/mobile',
  '/productcategory/notebook',
  '/student',
]

export const pathnameTextList = [
  '/關於我們',
  '/會員登入',
  '/產品',
  '/產品/嬰兒',
  '/產品/嬰兒/初生兒',
  '/產品/男性',
  '/產品/女性',
  '/產品分類',
  '/產品分類/電腦PC',
  '/產品分類/手機',
  '/產品分類/筆記型電腦',
  '/學生資料',
]

// breadcrumb面包屑使用
// 用pathname英文對照中文的名稱(類似關聯陣列的物件)
// 使用方式需用 ex. pathnameLocale['productcategory']
// 下面是防止自動格式化使用註解
/* eslint-disable */
export const pathnameLocale = {
  'about': '關於我們',
  'product': '產品',
  'men': '男性',
  'product-category': '產品分類',
  'productcategory': '產品分類',
  'mobile': '手機',
  'pc': '電腦',
  'student': '學生資料',
}
/* eslint-enable */
