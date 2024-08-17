async function units() {
    const unitApi = "https://rezaderakhshan-unitsapi.hf.space/";
    const reponse = await fetch(unitApi);
    const data = await reponse.json()

    const unitLists = document.getElementById("unitList")

    data.forEach((e) => {
        const unitCard = document.createElement("div");
        unitCard.classList.add('unit-card');

        const unitImage = document.createElement('img');
        unitImage.src = `https://rezaderakhshan-unitsapi.hf.space/${e.image}`
        
        const unitName = document.createElement('h3');
        unitName.textContent = e.name;
    
        const unitAddress = document.createElement("p");
        unitAddress.textContent = `address : ${e.address}`

        const unitArea = document.createElement('p');
        unitArea.textContent = `area : ${e.area}`;

        const unitRooms = document.createElement('p');
        unitRooms.textContent = `rooms : ${e.rooms}`;

        const unitPrice = document.createElement("p");
        unitPrice.textContent = `price : ${e.price}`;
        unitPrice.classList.add('price');

        const unitForSale = document.createElement('p');
        if (e.is_for_sale) {
            unitForSale.textContent = "for sale";
            unitForSale.classList.add('for-sale');
        }else{
            unitForSale.textContent = "for rent";
            unitForSale.classList.add('for-rent');
        }

        unitCard.appendChild(unitImage);
        unitCard.appendChild(unitName);
        unitCard.appendChild(unitAddress);
        unitCard.appendChild(unitArea);
        unitCard.appendChild(unitRooms);
        unitCard.appendChild(unitPrice);
        unitCard.appendChild(unitForSale);

        unitLists.appendChild(unitCard);

    })
}

units();




