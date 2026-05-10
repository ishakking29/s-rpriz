const parca1 = [
    "Annem",
    "Sen",
    "Gülüşün",
    "Kalbin",
    "Varlığın",
    "Bakışların",
    "Sevgin",
    "Şefkatin"
];

const parca2 = [
    "gülüşüyle",
    "sevgisiyle",
    "şefkatiyle",
    "merhametiyle",
    "iyiliğiyle",
    "samimiyetiyle",
    "kalbiyle",
    "sıcakkanlılığıyla"
];

const parca3 = [
    "dünyayı güzelleştirir",
    "içimi huzurla doldurur",
    "hayatı daha anlamlı yapar",
    "herkese umut verir",
    "kalpleri mutlu eder",
    "etrafına ışık saçar",
    "sevginin gerçek halidir",
    "hayatı renklendirir"
];

function rastgele(secenekler){
    return secenekler[Math.floor(Math.random() * secenekler.length)];
}

function olustur(){

    let s1 = rastgele(parca1);
    let s2 = rastgele(parca2);
    let s3 = rastgele(parca3);

    let slot1 = document.getElementById("slot1");
    let slot2 = document.getElementById("slot2");
    let slot3 = document.getElementById("slot3");

    slot1.classList.remove("spin");
    slot2.classList.remove("spin");
    slot3.classList.remove("spin");

    void slot1.offsetWidth;

    slot1.classList.add("spin");
    slot2.classList.add("spin");
    slot3.classList.add("spin");

    setTimeout(() => {

        slot1.innerText = s1;
        slot2.innerText = s2;
        slot3.innerText = s3;

        let cumle = "${s1} ${s2} ${s3}";

        document.getElementById("sonuc").innerText = cumle;

        let link =
        "https://wa.me/?text=" + encodeURIComponent(cumle);

        document.getElementById("wpButton").href = link;

    }, 500);
}