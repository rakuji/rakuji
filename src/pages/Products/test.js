// // 從資料庫取得資料
// const [datas, setDatas] = useState([])
// const [product, setProduct] = useState({
//   id: 0,
//   name: '',
//   categroy: '',
//   image: '',
//   price: 0,
// })

// const fetchData = async () => {
//   const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
//   const results = await response.json();
//   setDatas(results);

// }
// useEffect(() => {
//   fetchData();
// }, [])


// //取得url productId
// const params = useParams()


// useEffect(() => {
//   // 取得json檔
//   const item = datas.find((v) => String(v.id) === params.productId)

//   if (item) {
//     setProduct(item)
//   }
// }, [datas])
