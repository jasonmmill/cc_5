// Task 1: Object Properties
let customer = { // create object
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
} // log objects
console.log(`Customer Name: ${customer.name}`) // log results
console.log(`Customer Age: ${customer.age}`) // log results
console.log(`Customer Email: ${customer.email}`) // log results

// Task 2: Order Details
let order = { // create object
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder() { // create method to return details
        return `Order ID: ${this.orderId}, Total Amount: ${this.totalAmount}, Status: ${this.status}`
    }
} // return details
console.log(order.displayOrder()) // log results

// Task 3: Array Manipulation
let cartItems = [ "apple", "banana", "orange" ] // create array
cartItems.push("mango") // add item to end
cartItems.pop() // remove end item
cartItems.unshift("mango") // add item to beginning
cartItems.shift() // remove item from beginning
console.log(cartItems) // log results

// Task 4: Map Method
let prices = [ 100, 200, 300 ] // create array
let discountedPrices = prices.map(price => price * 0.9) // create map
console.log(discountedPrices) // log results

// Task 5: Filter Method
let inventory = [ 5, 0, 12, 8, 0 ] // create array
let inventoryMinusZero = inventory.filter(inv => inv > 0) // create filter
console.log(inventoryMinusZero) // log results

// Task 6: Revenue Calculation
let sales = [ 500, 300, 200, 400 ] // create array
let revenueCalc = sales.reduce((amt,total) => amt + total) // create reduce (to add)
console.log(revenueCalc) // log results
