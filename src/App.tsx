import React from 'react';
import {data} from "./components/Data";

const App = () => {
  const myData : data = {
bookDetails: {
  books: "Built To Last",
  price: 3000,
  bookRead: true
}, 
shopDetails: {
  shopName: "Amazing BoookStore"
},
readersDetails: {
  readerName: "N E L S O N",
  readerAge: 30
}
  }

  return (
    <div>
      <h1> The name of the book, I'm currently on is {myData.bookDetails.books} </h1>
      <p> And it is sold for ₦{myData.bookDetails.price} </p>
      <p> If i were to be asked If I've ever read it, my answer should be {myData.bookDetails.bookRead}</p>

      <p> I bought it from {myData.shopDetails.shopName} </p>
      <p> His name is {myData.readersDetails.readerName}</p>
      <p> He is {myData.readersDetails.readerAge} Years old </p>
    </div>
  )
}

export default App