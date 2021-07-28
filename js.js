var code_quote = document.getElementById("code_quote");
if (code_quote != null) {
    var quote_list = [
        { quote: "See? Red! Oh, wait... that's blood.", file: "audio/red.ogg" },
        { quote: "Mmph mphna mprh", file: "audio/mmph.ogg" },
        { quote: "Kept you waiting, huh?", file: "audio/waiting.ogg" },
        { quote: "V has come to", file: "audio/v.ogg" },
        { quote: "They played us like a damn fiddle!", file: "audio/fiddle.ogg" },
        { quote: "A headcrab's on your face! Get it off your face, Alyx!", file: "audio/headcrab.ogg" },
        { quote: "No, no! Careful, Lamarr! Those are quite fragile!", file: "audio/fragile.ogg" },
        { quote: "I am... not interested little sun. Try again when you have become a man.", file: "audio/sun.ogg"}
    ]

    const quote_sound = new Audio();
    quote_sound.play();

    var picked = Math.floor(Math.random() * quote_list.length);
    code_quote.innerHTML = quote_list[picked].quote;

    code_quote.onmouseover = function () { code_quote.style.cursor = "pointer"; }
    code_quote.onclick = function () {
        quote_sound.src = quote_list[picked].file;
        quote_sound.play();
    }
}