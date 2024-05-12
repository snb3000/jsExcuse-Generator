function generateExcuse() {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    let whoIdx = Math.floor(Math.random() * who.length);
    let actionIdx = Math.floor(Math.random() * action.length);
    let whatIdx = Math.floor(Math.random() * what.length);
    let whenIdx = Math.floor(Math.random() * when.length);

    let excuse = `${who[whoIdx]} ${action[actionIdx]} ${what[whatIdx]} ${when[whenIdx]}`;
    document.getElementById('excuse').innerHTML = excuse;
}
