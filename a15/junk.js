const items= [
    {name:"Apple", price:40,qty:5, status:"pending"},
    {name:"Banana", price:30,qty:7, status:"pending"},
    {name:"Orange", price:80,qty:3, status:"pending"}
];

const updatedItems= items.map(item=>({
    ...item, 
    price: item.price+5,
    status: "completed", 
    qty: item.qty,
    total: (item.price+5) * item.qty 
}));

console.log(updatedItems);