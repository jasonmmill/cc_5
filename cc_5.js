// Task 1: Object Properties
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
}
console.log(`Customer Name: ${customer.name}`)
console.log(`Customer Age: ${customer.age}`)
console.log(`Customer Email: ${customer.email}`)

// Task 2: Order Details
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder() {
        return `Order ID: ${this.orderId}, Total Amount: ${this.totalAmount}, Status: ${this.status}`
    }
}
console.log(order.displayOrder())