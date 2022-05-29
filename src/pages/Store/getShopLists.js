async function getShopLists() {
    // fetch回傳JASON陣列(參見rakuji_backend專案:routes/store.js)
    const responseStore = await fetch("/store");
    // 將JASON陣列轉成物件陣列(JSAON-->object)
    const stores = await responseStore.json();
    // 回傳物件陣列stores
    return stores;
};

export default getShopLists;