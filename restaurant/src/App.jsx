import "./App.css";
import RestaurantDetails from "./Components/RestaurantDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Components/Pagination";

function App() {
  const [loading, setLoading] = useState(true);         
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);               
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState("asc");          
  const [payment , setPayment] = useState("")         
  const [costOrder , setCostOrder] = useState("asc")
  const [filterRating, setFilterRating] = useState(0);    
  const [q, setQ] = useState("");                         
  const [text, setText] = useState("");                   
  const [cash, setCash] = useState(null);               
  const [card, setCard] = useState(null);
  
  useEffect(() => {
    fetchData({page, rating, costOrder,filterRating, q, cash, card,text})   
  }, [page,rating,costOrder,filterRating,q,cash,card, text]);

  const fetchData = async({page, rating, costOrder, filterRating, q, cash, card, text}) => {
    setLoading(true);
    const paramsForPayment = {}
    if(cash!==null) paramsForPayment["payment_methods.cash"] = cash;
    if(card!== null) paramsForPayment["payment_methods.card"]= card;
    // if(upi!==null) paramsForPayment["payment_methods.upi"] = upi;
    await axios({
      method: "GET",
      url: "http://localhost:3000/data",
      params : {
        _page : page,
        _limit : 5,
        _order : `${rating}, ${costOrder}`,
        _sort : "rating",
        rating_gte : filterRating,
        q : q,
        ...paramsForPayment
      }
    })
      .then((res) => {
        setData(res.data);
        setLoading(false); 
        // console.log(res);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });

  }
  console.log(data);

  return (
    <div className="App">
      <h1>Restaurant App</h1>
      {loading && <div>loading</div> }
       {/*Ratingss using there level */}
        <div> 
          <input value={text} onChange = {(e) => setText(e.target.value)} placeholder="search item"/>
          <button onClick={() => setQ(text)}>Search</button>
        </div> 
        <br />
        {/* FOR THE PAYMENTS */}
        <div>
          <button onClick={()=>setCash(!cash)}>CASH - { cash === null ?"NULL": cash?"TRUE":"FALSE" }</button>
          <button onClick={()=>setCard(!card)}>CARD - { card=== null ?"NULL": card?"TRUE":"FALSE" }</button>
          {/* <button onClick={()=>setUpi(!upi)}>UPI - { upi === null ?"NULL": upi?"TRUE":"FALSE" }</button> */}

          <button onClick={()=>{
            setCash(null);
            setCard(null);
            setUpi(null);
          }}>RESET</button>
        </div> <br />
        {/* <div>
          <button disabled={rating==="desc"} onClick={()=>setRating("desc")}>
            Cost by desc
            </button>
          <button disabled={rating==="asc"} onClick={()=>setRating("asc")}>
            cost by asc
            </button>
        </div> */}
        <select>
          <option value="asc" onClick={()=>setRating("asc")}>Ratings by Asc</option>
          <option  value="desc" onClick={()=>setRating("desc")}>Ratings by Desc</option>
        </select>
        <br /><br />

        {/* Filtering Methods  */}
        <div> Filters - 
          <button onClick={() => setFilterRating(4)}>GT 4</button>
          <button onClick={() => setFilterRating(3)}>GT 3</button>
          <button onClick={() => setFilterRating(2)}>GT 2</button>
          <button onClick={() => setFilterRating(1)}>GT 1</button>
          <button onClick={() => setFilterRating(0)}>ALL</button>
        </div>
      {/* for paginatons */}
      <button disabled={page===1} onClick={() => setPage(page-1)}>prev</button>
      <button  onClick={() => setPage(page+1)}>next</button>

      <PaginationComponent currentPage={page} lastPage={5} onPageChange={setPage}/> <br />
      <div>
        {data.map((item) => (
          <RestaurantDetails key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

// Pagintaion Component
const PaginationComponent = ({
  currentPage,
  lastPage,
  onPageChange
}) => {
  const arr = new Array(lastPage).fill(0);
  return (
    <div>
      {
        arr.map( (item, page) => (<button onClick={()=>onPageChange(page+1)} disabled={(page+1)===currentPage}> {page+1} </button>))
      }
    </div>
  )
}


export default App;
