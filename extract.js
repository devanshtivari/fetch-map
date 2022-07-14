console.log("the script is running");
const data = [
  {
    name: "prashant",
    phone: "123456",
    address: "1600 Amphitheatre Parkway",
  },
  {
    name: "devansh",
    phone: "123",
    address: "1602 Amphitheatre Parkway",
  },
  {
    name: "vicky",
    phone: "1234",
    address: "1603 Amphitheatre Parkway",
  },
];

const card_area = document.getElementById('card-display');

data.map((element) => {
    const card = document.createElement('div');
    //card.classList('card-body');

    const content = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${element.phone}</h6>
                <p class="card-text">${element.address}</p>
            </div>
        </div>
    `;

    card_area.innerHTML += content;
})