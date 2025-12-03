/* KÁRTYÁK */
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".kartyak");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            if (card.classList.contains("active")) {
                card.classList.remove("active");
            } else {
                card.classList.add("active");
            }
        });
    });
});

/* KVÍZ */
const valaszok = {
    k1: "a",
    k2: "b",
    k3: "a",
    k4: "b",
    k5: "d",
    k6: "b",
    k7: "b",
    k8: "b",
    k9: "a",
    k10: "c"
};

function ellenorzes() {
    let pont = 0;

    for (let kerdesek in valaszok) {
        const bejelolt = document.querySelector(`input[name="${kerdesek}"]:checked`);
        if (bejelolt && bejelolt.value === valaszok[kerdesek]) {
            pont++;
        }
    }

    document.getElementById("eredmeny").innerText = `Eredményed: ${pont} pont`;
}

/* KAPCSOLAT */
const form = document.getElementById('kapcsolatForm');
    
    // MEZŐK REFERENCIÁI
    const nevBekeres = document.getElementById('nev');
    const emailBekeres = document.getElementById('email');
    const telefonBekeres = document.getElementById('telefon');
    const korBekeres = document.getElementById('eletkor');
    const datumBekeres = document.getElementById('szuletesiDatum');
    const szovegBekeres = document.getElementById('uzenet');

    // HIBAÜZENET TÁROLÓK REFERENCIÁI
    const errorNev = document.getElementById('error-nev');
    const errorEmail = document.getElementById('error-email');
    const errorTelefon = document.getElementById('error-telefon');
    const errorKor = document.getElementById('error-kor');
    const errorDatum = document.getElementById('error-datum');
    const errorUzenet = document.getElementById('error-uzenet');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        const errors = document.querySelectorAll('.error-msg');
        errors.forEach(el => el.textContent = '');

        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(el => el.classList.remove('input-error'));

        //NÉV
        if (nevBekeres.value.trim() === "") {
            errorNev.textContent = "A név megadása kötelező!";
            nevBekeres.classList.add('input-error');
            isValid = false;
        }

        //EMAIL
        if (emailBekeres.value.trim() === "") {
            errorEmail.textContent = "Az email megadása kötelező";
            emailBekeres.classList.add('input-error');
            isValid = false;

        }

        //TELEFON
        let telefonSzam = telefonBekeres.value.trim();
        if (telefonSzam === "") {
            errorTelefon.textContent = "A telefonszám megadása kötelező";
            telefonBekeres.classList.add('input-error');
            isValid = false;
        } else if (isNaN(Number(telefonSzam))) {
            errorTelefon.textContent = "Helytelen formátum";
            telefonBekeres.classList.add('input-error');
            isValid = false;
        }
        
        //KOR
        if (korBekeres.value.trim() === "") {
            errorKor.textContent = "Az életkor kitöltése kötelező!";
            korBekeres.classList.add('input-error');
            isValid = false; 
        } else if (isNaN(Number(korBekeres.value))) {
            errorKor.textContent = "Helytelen formátum";
            korBekeres.classList.add('input-error');
            isValid = false;
        }

        //DÁTUM
        if (datumBekeres.value === "") {
            errorDatum.textContent = "A születési dátum megadása kötelező!";
            datumBekeres.classList.add('input-error');
            isValid = false;
        }

        //SZÖVEG
        if (szovegBekeres.value.trim() === "") {
            errorUzenet.textContent = "Az üzenet mező kitöltése kötelező!";
            szovegBekeres.classList.add('input-error');
            isValid = false; 
        } else if (szovegBekeres.value.trim().length < 10) {
            errorUzenet.textContent = "Az üzenet túl rövid (min. 10 karakter)!";
            szovegBekeres.classList.add('input-error');
            isValid = false;
        }
            
        if (!isValid) {
            event.preventDefault();
            console.log("Hiba az űrlapon!");
        } else {
            console.log("Minden adat rendben, küldés...");
        }
    });