//               KUPONI 
const VALID_COUPONS = ["SAVE10", "SAVE15", "FREESHIP"];

function normalizeCoupon(code) {
    return code.trim().toUpperCase();
}

function isValidCoupon(code) {
    // Provera da li se normalizovani kod nalazi u nizu
    return VALID_COUPONS.includes(code);
}

//           VALIDACIJA I PORUKE 
function validateAndNotify() {
    let polje = document.getElementById('promo-input');
    if (!polje) return;

    let sredjeniKod = normalizeCoupon(polje.value);

    if (isValidCoupon(sredjeniKod)) {
        // Grananje za različite poruke na osnovu koda
        if (sredjeniKod === "SAVE10") {
            alert("Vaš kupon donosi 10% popusta.");
        } else if (sredjeniKod === "SAVE15") {
            alert("Vaš kupon donosi 15% popusta.");
        } else if (sredjeniKod === "FREESHIP") {
            alert("Vaš kupon donosi besplatnu dostavu.");
        }
    } else {
        alert("Uneti kod nije validan.");
    }
}

//                   PROIZVODI 
const allProducts = [
    { name: "Falcon Heavy", price: 300, qty: 10 },
    { name: "USS Enterprise", price: 550, qty: 5 },
    { name: "Voyager One", price: 800, qty: 2 },
    { name: "Sputnik", price: 150, qty: 12 },
    { name: "Apollo 11", price: 400, qty: 8 },
    { name: "Starship", price: 1000, qty: 4 },
    { name: "TIE Fighter", price: 250, qty: 15 },
    { name: "X-Wing", price: 350, qty: 9 },
    { name: "Discovery", price: 600, qty: 6 },
    { name: "Millennium Falcon", price: 1200, qty: 1 }
];

//          UKUPNA VREDNOST LAGERA 
function calculateTotalInventoryValue() {
    let totalValue = 0;
    for (let product of allProducts) {
        totalValue += product.price * product.qty;
    }
    console.log("Ukupna vrednost lagera: " + totalValue + " USD");
}
calculateTotalInventoryValue(); 

//        NISKE ZALIHE (lowStock) 
const lowStock = [];
for (let product of allProducts) {
    if (product.qty < 10) {
        lowStock.push(product);
    }
}
console.log("Proizvodi sa niskim zalihama (manje od 10):", lowStock);

//            PRETRAGA PO NAZIVU 
function findProductByName(list, searchName) {
   
    let term = searchName.toLowerCase().trim();
    
    for (let product of list) {
        if (product.name.toLowerCase() === term) {
            return product;
        }
    }
    return null;
}

//              Testiranje pretrage u konzoli 
console.log("Test pretrage (falcon heavy):", findProductByName(allProducts, "falcon heavy"));
console.log("Test pretrage (nepostojeći):", findProductByName(allProducts, "UFO"));



let iznos = 0; 
const CURRENCY = "Galaxy kredita";

function dodajNaIznos(cena) {
    iznos += cena;
    alert("Uspešno dodato! Trenutni iznos: " + iznos + " " + CURRENCY);
}

function openCart() {
    alert("Vaš ukupni iznos porudžbine je: " + iznos + " " + CURRENCY);
}

function login(email, password) {
    return (email.trim() === "admin" && password.trim() === "admin");
}

function handleLogin() {
    let e = document.getElementById('email-field').value;
    let p = document.getElementById('pass-field').value;
    if (login(e, p)) {
        alert("AUTORIZACIJA USPEŠNA!");
    } else {
        alert("PRISTUP ODBIJEN!");
    }
}