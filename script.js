
function sayYes() {
    const response = document.getElementById("response");

    response.innerHTML = `
        <p>
            ♡ 11:11 — a little message for you, my baby. ♡
        </p>
        <p>
            If I could wish for one thing every time the clock strikes 11:11,
            it would always be you. I wish for more moments with you, more memories
            to cherish, and a love that grows stronger with every passing day. Among
            all the wishes I could ever make, you will always be my favorite. You
            are my answered prayer, my sweetest coincidence, and the person I hope
            to keep choosing, today and always. 🤎
        </p>
        <p><strong> you, me, and a love that feels like a wish come true. ♡</strong></p>
       <div class="photo-frame">
            <img
                src="yes.png"
                alt="for my baby!!"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            >
            <div class="photo-placeholder">
                <span>♡</span>
                <p>for my baby!!</p>
            </div>
        </div>
    `;
}

function sayNo() {
    const response = document.getElementById("response");

    response.innerHTML = `
        <p>♡ Thank you for being honest with me.</p>
        <p>
            Your feelings matter, and I'll always respect
            your answer. You deserve kindness, always. 🤎
        </p>
        <div class="photo-frame">
            <img
                src="no.png"
                alt="for my baby!!"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            >
            <div class="photo-placeholder">
                <span>♡</span>
                <p>for my baby!!</p>
            </div>
        </div>
    `;
}
