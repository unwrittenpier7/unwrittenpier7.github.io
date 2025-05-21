const customers = [
  { card: "1234567890", pin: "1234", name: "John", balance: 0 },
  { card: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];

let currentCustomer = null;

function verify() {
  const cardInput = document.getElementById("card").value;
  const pinInput = document.getElementById("pin").value;

  const customer = customers.find(
    (c) => c.card === cardInput && c.pin === pinInput
  );

  if (customer) {
    currentCustomer = customer;
    document.body.innerHTML = `
      <div class="container">
        <h1>Welcome ${customer.name}!!</h1>
        <label for="action">Choose an action:</label>
        <select id="action">
          <option value="deposit">Deposit</option>
          <option value="withdraw">Withdraw</option>
          <option value="transfer">Fund Transfer</option>
        </select>
        <br><br>
        <div id="transferBox" style="display: none;">
          <label for="recipient">Transfer to:</label>
          <select id="recipient"></select>
        </div>
        <input type="number" id="amount" placeholder="Enter amount" required />
        <br><br>
        <button onclick="performTransaction()">Submit</button>
        <h3 id="balance">Current Balance: ₹${customer.balance}</h3>
        <br>
        <button onclick="logout()">Logout</button>
      </div>
    `;
  } else {
    alert("Invalid card or PIN");
  }
}

function performTransaction() {
  const action = document.getElementById("action").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  if (action === "deposit") {
    currentCustomer.balance += amount;
  } else if (action === "withdraw") {
    if (amount > currentCustomer.balance) {
      alert("Insufficient balance");
      return;
    }
    currentCustomer.balance -= amount;
  } else if (action === "transfer") {
    fundTransfer(amount);
    return; 
  }
  document.getElementById("balance").textContent = `Current Balance: ₹${currentCustomer.balance}`;
}

function fundTransfer(amount) {
  const recipientCard = document.getElementById("recipient").value;
  const recipient = customers.find(c => c.card === recipientCard);

  if (!recipient) {
    alert("Invalid recipient selected.");
    return;
  }

  if (amount > currentCustomer.balance) {
    alert("Insufficient balance for transfer.");
    return;
  }

  currentCustomer.balance -= amount;
  recipient.balance += amount;

  alert(`₹${amount} transferred to ${recipient.name}`);
  document.getElementById("balance").textContent = `Current Balance: ₹${currentCustomer.balance}`;
}


function logout() {
  document.body.innerHTML = `
    <div class="container">
      <h1>Bank ATM</h1>
      <hr />
      <input type="text" id="card" placeholder="Enter card number" required />
      <input type="password" id="pin" placeholder="Enter pin" required />
      <button onclick="verify()">Submit</button>
    </div>
  `;
}