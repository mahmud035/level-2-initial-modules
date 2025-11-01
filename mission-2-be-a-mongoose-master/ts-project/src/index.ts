function calculateTotal(prices: number[], taxRate: number): number {
  const subtotal = prices.reduce((acc, price) => acc + price, 0);
  return subtotal * (1 + taxRate);
}

interface User {
  name: string;
  id: number;
  email?: string;
}

function sendWelcomeEmail(user: User): void {
  console.log(`Welcome ${user.name}!`);
  if (user.email) {
    console.log(`We'll contact you at ${user.email}`);
  }
}

sendWelcomeEmail({ name: 'Alice', id: 1 });

let cartItems = [19.99, 29.99, 39.99];
const finalPrice = calculateTotal(cartItems, 0.08);
console.log('Final price:', finalPrice);

class ShoppingCart {
  items: number[];
  constructor() {
    this.items = [];
  }

  addItem(itemPrice: number): void {
    this.items.push(itemPrice);
  }

  getTotal(taxRate: number): number {
    return this.items.reduce((total, item) => total + item, 0) * (1 + taxRate);
  }
}

const cart = new ShoppingCart();
cart.addItem(19.99);
