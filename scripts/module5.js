// задача 1 _______________________________________________________________________________________________________

// const pizzaPalace = {
// 	pizzas: ["Supercheese", "Smoked", "Four meats"],
// 	// Change code below this line
// 	checkPizza(pizzaName) {
// 		return this.pizzas.includes(pizzaName);
// 	},
// 	order(pizzaName) {
// 		const isPizzaAvailable = this.checkPizza(pizzaName);

// 		if (!isPizzaAvailable) {
// 			return `Sorry, there is no pizza named «${pizzaName}»`;
// 		}

// 		return `Order accepted, preparing «${pizzaName}» pizza`;
// 	},
// 	// Change code above this line
// };

// console.log(pizzaPalace.order("Smoked"));

// задача 2 _______________________________________________________________________________________________________

// const customer = {
// 	username: "Mango",
// 	balance: 24000,
// 	discount: 0.1,
// 	orders: ["Burger", "Pizza", "Salad"],
// 	// Change code below this line
// 	getBalance() {
// 		return this.balance;
// 	},
// 	getDiscount() {
// 		return this.discount;
// 	},
// 	setDiscount(value) {
// 		this.discount = value;
// 	},
// 	getOrders() {
// 		return this.orders;
// 	},
// 	addOrder(cost, order) {
// 		this.balance -= cost - cost * this.discount;
// 		this.orders.push(order);
// 	},
// 	// Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// задача 3 _______________________________________________________________________________________________________

// const historyService = {
// 	orders: [
// 		{ email: "jacob@hotmail.com", dish: "Burrito" },
// 		{ email: "solomon@topmail.net", dish: "Burger" },
// 		{ email: "artemis@coldmail.net", dish: "Pizza" },
// 		{ email: "solomon@topmail.net", dish: "Apple pie" },
// 		{ email: "jacob@hotmail.com", dish: "Taco" },
// 	],
// 	// Change code below this line
// 	getOrdersLog() {
// 		return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(" - ");
// 	},
// 	getEmails() {
// 		const emails = this.orders.map(order => order.email);
// 		const uniqueEmails = new Set(emails);
// 		return [...uniqueEmails];
// 	},
// 	getOrdersByEmail(email) {
// 		return this.orders.filter(order => order.email === email);
// 	},
// 	// Change code above this line
// };
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));

// задача 4 _______________________________________________________________________________________________________

// const parent = {
// 	name: "Stacey",
// 	surname: "Moore",
// 	age: 54,
// 	heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(child);