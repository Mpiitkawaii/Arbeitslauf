const vocabData = [
    {
        q: "Was bedeutet „übernehmen“ hier?",
        context: "Meine Chefin ist heute nicht da, deshalb muss ich ihre Aufgaben übernehmen.",
        options: ["A. Aufgaben ablehnen", "B. Aufgaben von jemandem machen", "C. Aufgaben erklären", "D. Aufgaben vergessen"],
        correct: 1,
        exp: "<b>Penjelasan:</b> <i>übernehmen</i> berarti mengambil alih / mengerjakan tugas orang lain."
    },
    {
        q: "Was bedeutet „sich einarbeiten“?",
        context: "In den ersten Wochen musste ich mich erst in die neuen Aufgaben einarbeiten.",
        options: ["A. neue Kollegen einstellen", "B. sich an eine neue Arbeit gewöhnen und sie lernen", "C. eine Arbeit kündigen", "D. eine Aufgabe delegieren"],
        correct: 1,
        exp: "<b>Penjelasan:</b> <i>sich einarbeiten</i> berarti menyesuaikan diri dan mempelajari pekerjaan/tugas baru."
    },
    {
        q: "Was ist ein „Arbeitsablauf“?",
        context: "Die neuen Mitarbeiter müssen zuerst die Arbeitsabläufe im Büro kennenlernen.",
        options: ["A. eine Person im Büro", "B. der Ablauf einer Arbeitsaufgabe", "C. ein Arbeitsvertrag", "D. ein Bürogebäude"],
        correct: 1,
        exp: "<b>Penjelasan:</b> <i>der Arbeitsablauf</i> berarti alur kerja atau tahapan proses menyelesaikan pekerjaan."
    },
    {
        q: "Was bedeutet „sich äußern“?",
        context: "Während der Besprechung durfte jeder seine Meinung zu dem Projekt äußern.",
        options: ["A. eine Meinung ausdrücken", "B. eine Aufgabe übernehmen", "C. eine Frage vermeiden", "D. eine Besprechung verlassen"],
        correct: 0,
        exp: "<b>Penjelasan:</b> <i>sich äußern</i> berarti mengutarakan/menyatakan pendapat."
    },
    {
        q: "Was bedeutet „selbstständig“?",
        context: "Nach zwei Wochen konnte sie die meisten Aufgaben selbstständig erledigen.",
        options: ["A. mit Hilfe anderer", "B. ohne Hilfe anderer", "C. besonders schnell", "D. nur gemeinsam mit anderen"],
        correct: 1,
        exp: "<b>Penjelasan:</b> <i>selbstständig</i> berarti mandiri (melakukan sesuatu tanpa bantuan orang lain)."
    },
    {
        q: "Was bedeutet „nachfragen“?",
        context: "Wenn ich etwas nicht verstehe, frage ich bei meiner Kollegin nach.",
        options: ["A. etwas noch einmal fragen", "B. eine Frage beantworten", "C. eine Aufgabe übernehmen", "D. jemanden anrufen"],
        correct: 0,
        exp: "<b>Penjelasan:</b> <i>nachfragen</i> berarti bertanya kembali/bertanya untuk memastikan."
    },
    {
        q: "Was bedeutet „rechtzeitig“?",
        context: "Zum Glück konnte ich den Bericht rechtzeitig fertigstellen.",
        options: ["A. viel zu früh", "B. bevor es zu spät ist", "C. nach dem Termin", "D. besonders schnell"],
        correct: 1,
        exp: "<b>Penjelasan:</b> <i>rechtzeitig</i> berarti tepat waktu (sebelum terlambat)."
    },
    {
        q: "Was bedeutet „auslösen“ hier?",
        context: "Die Frage des Mitarbeiters löste eine lange Diskussion aus.",
        options: ["A. etwas verhindern", "B. etwas beginnen oder verursachen", "C. etwas erklären", "D. etwas beenden"],
        correct: 1,
        exp: "<b>Penjelasan:</b> <i>auslösen</i> berarti memicu atau menyebabkan terjadinya sesuatu."
    },
    {
        q: "Was bedeutet „sich herausstellen“?",
        context: "Später stellte sich heraus, dass das Problem viel einfacher war als gedacht.",
        options: ["A. etwas wird später als Tatsache erkannt", "B. etwas wird absichtlich versteckt", "C. jemand stellt sich vor", "D. jemand beginnt eine neue Arbeit"],
        correct: 0,
        exp: "<b>Penjelasan:</b> <i>sich herausstellen</i> berarti terbukti / terungkap di kemudian hari."
    },
    {
        q: "Was bedeutet „Erfahrungen sammeln“?",
        context: "Durch mein Praktikum konnte ich viele Erfahrungen sammeln.",
        options: ["A. Erfahrungen vergessen", "B. Erfahrungen gewinnen", "C. Erfahrungen vermeiden", "D. Erfahrungen erklären"],
        correct: 1,
        exp: "<b>Penjelasan:</b> <i>Erfahrungen sammeln</i> berarti menimba/mendapatkan pengalaman."
    },
    {
        q: "Was bedeutet „anstrengend“?",
        context: "Die erste Woche war zwar anstrengend, aber ich habe viel gelernt.",
        options: ["A. entspannend", "B. viel Energie erfordernd", "C. langweilig", "D. einfach"],
        correct: 1,
        exp: "<b>Penjelasan:</b> <i>anstrengend</i> berarti melelahkan/membutuhkan banyak energi."
    },
    {
        q: "Was ist eine „Besprechung“?",
        context: "Am Dienstag nahm ich an einer wichtigen Besprechung teil.",
        options: ["A. ein Gespräch über bestimmte Themen bei der Arbeit", "B. eine schriftliche Prüfung", "C. eine Bewerbung", "D. eine Pause"],
        correct: 0,
        exp: "<b>Penjelasan:</b> <i>die Besprechung</i> adalah rapat / diskusi pekerjaan."
    },
    {
        q: "Was bedeutet „sich an etwas gewöhnen“?",
        context: "Nach einigen Tagen gewöhnte ich mich an den neuen Arbeitsplatz.",
        options: ["A. etwas vergessen", "B. etwas nach und nach als normal empfinden", "C. etwas ablehnen", "D. etwas verändern"],
        correct: 1,
        exp: "<b>Penjelasan:</b> <i>sich an etwas gewöhnen</i> berarti terbiasa dengan sesuatu."
    },
    {
        q: "Was bedeutet „fertigstellen“?",
        context: "Ich musste den Bericht bis Freitag fertigstellen.",
        options: ["A. anfangen", "B. fertig machen", "C. überprüfen", "D. verschieben"],
        correct: 1,
        exp: "<b>Penjelasan:</b> <i>fertigstellen</i> berarti menyelesaikan / menyempurnakan pekerjaan."
    },
    {
        q: "Was bedeutet „Möglichkeit“ hier?",
        context: "Ein Praktikum bietet jungen Menschen die Möglichkeit, Berufserfahrung zu sammeln.",
        options: ["A. Pflicht", "B. Gelegenheit/Chance", "C. Problem", "D. Entscheidung"],
        correct: 1,
        exp: "<b>Penjelasan:</b> <i>die Möglichkeit</i> berarti kesempatan / peluang."
    }
];

const grammarData = [
    {
        q: "Nebensatz mit weil",
        context: "Ich war nervös, weil ich noch wenig Erfahrung ______.",
        options: ["A. hatte", "B. haben", "C. habe", "D. gehabt"],
        correct: 0,
        exp: "<b>Penjelasan:</b> Klausa bawahan (Nebensatz) dengan konjungsi <i>weil</i> menempatkan kata kerja terkonjugasi di akhir kalimat (Präteritum dari haben: <i>hatte</i>)."
    },
    {
        q: "Relativsatz",
        context: "Das ist die Kollegin, ______ mir bei der Aufgabe geholfen hat.",
        options: ["A. die", "B. der", "C. den", "D. dem"],
        correct: 0,
        exp: "<b>Penjelasan:</b> Kata ganti relatif untuk kata benda feminin (die Kollegin) sebagai Subjek (Nominativ) adalah <i>die</i>."
    },
    {
        q: "an + Akkusativ bei „sich gewöhnen“",
        context: "Ich muss mich noch ______ den neuen Arbeitsplatz gewöhnen.",
        options: ["A. mit", "B. für", "C. an", "D. auf"],
        correct: 2,
        exp: "<b>Penjelasan:</b> Verba refleksif <i>sich gewöhnen</i> dipasangkan dengan preposisi <i>an + Akkusativ</i>."
    },
    {
        q: "an + Dativ bei „teilnehmen“",
        context: "Ich habe gestern ______ einer Besprechung teilgenommen.",
        options: ["A. an", "B. auf", "C. für", "D. mit"],
        correct: 0,
        exp: "<b>Penjelasan:</b> Verba <i>teilnehmen</i> menggunakan preposisi <i>an + Dativ</i> (an + einer Besprechung)."
    },
    {
        q: "Modalverb + Infinitiv",
        context: "Ich ______ die Aufgabe heute selbstständig erledigen.",
        options: ["A. kann", "B. kannte", "C. konnte ich", "D. gekonnt"],
        correct: 0,
        exp: "<b>Penjelasan:</b> Subjek 'Ich' membutuhkan konjugasi kata kerja modal yang tepat untuk Präsens, yaitu <i>kann</i>."
    },
    {
        q: "Perfekt",
        context: "Ich ______ in dieser Woche viel ______.",
        options: ["A. habe / gelernt", "B. bin / gelernt", "C. habe / lernen", "D. werde / gelernt"],
        correct: 0,
        exp: "<b>Penjelasan:</b> Bentuk Perfekt dari verba <i>lernen</i> menggunakan kata kerja bantu <i>haben</i> + Partizip II (<i>gelernt</i>)."
    },
    {
        q: "Infinitiv mit zu",
        context: "Ich habe die Möglichkeit, neue Erfahrungen ______.",
        options: ["A. sammeln", "B. zu sammeln", "C. gesammelt", "D. sammle"],
        correct: 1,
        exp: "<b>Penjelasan:</b> Frasa 'die Möglichkeit haben' diikuti oleh pola konstruksi <i>zu + Infinitiv</i>."
    },
    {
        q: "Indirekte Frage",
        context: "Meine Chefin erklärte mir, ______ Aufgaben ich übernehmen sollte.",
        options: ["A. welche", "B. welchen", "C. was für", "D. ob welche"],
        correct: 0,
        exp: "<b>Penjelasan:</b> Kata tanya <i>welche</i> menyupport kata benda jamak 'Aufgaben' dalam kasus Akkusativ."
    },
    {
        q: "obwohl",
        context: "______ ich noch wenig Erfahrung hatte, konnte ich die Aufgabe erledigen.",
        options: ["A. Weil", "B. Obwohl", "C. Deshalb", "D. Trotzdem"],
        correct: 1,
        exp: "<b>Penjelasan:</b> Konjungsi pertentangan (Konzessivsatz) yang tepat adalah <i>obwohl</i> (meskipun)."
    },
    {
        q: "sich herausstellen + dass",
        context: "Später stellte sich heraus, ______ die Aufgabe schwieriger war als erwartet.",
        options: ["A. ob", "B. dass", "C. weil", "D. wenn"],
        correct: 1,
        exp: "<b>Penjelasan:</b> Ungkapan <i>sich herausstellen</i> biasanya menghubungkan klausa anak menggunakan kata hubung <i>dass</i>."
    }
];

// Data C-Test Beserta Penjelasannya Per Soal
const ctestData = [
    { id: 1, prefix: "ab", ans: "er", fullWord: "aber", exp: "<b>Grammatik:</b> Konjungsi pertentangan <i>aber</i> (tetapi) menghubungkan dua klausa independen (Konnektor)." },
    { id: 2, prefix: "zei", ans: "gte", fullWord: "zeigte", exp: "<b>Grammatik:</b> Bentuk Präteritum dari verba regular <i>zeigen</i> untuk Subjek singular <i>meine Chefin</i>." },
    { id: 3, prefix: "erkl", ans: "ärte", fullWord: "erklärte", exp: "<b>Grammatik:</b> Bentuk Präteritum dari verba regular <i>erklären</i>." },
    { id: 4, prefix: "ler", ans: "nte", fullWord: "lernte", exp: "<b>Grammatik:</b> Bentuk Präteritum dari verba trennbar <i>kennenlernen</i> (lernte ... kennen)." },
    { id: 5, prefix: "zusammen", ans: "arbeiten", fullWord: "zusammenarbeiten", exp: "<b>Grammatik & Wortschatz:</b> Infinitiv dari verba <i>zusammenarbeiten</i> (bekerja sama) dipasangkan dengan kata kerja bantu Futur I <i>werde</i>." },
    { id: 6, prefix: "na", ans: "hm", fullWord: "nahm", exp: "<b>Grammatik:</b> Bentuk Präteritum irregular dari verba trennbar <i>teilnehmen</i> (nahm ... teil)." },
    { id: 7, prefix: "bespr", ans: "ochen", fullWord: "besprochen", exp: "<b>Grammatik:</b> Partizip II dari verba irregular <i>besprechen</i> untuk membentuk kalimat Pasif (wurden ... besprochen)." },
    { id: 8, prefix: "Mei", ans: "nung", fullWord: "Meinung", exp: "<b>Wortschatz:</b> Kata benda feminin <i>die Meinung</i> (pendapat) membentuk frasa <i>seine Meinung äußern</i>." },
    { id: 9, prefix: "Erfa", ans: "hrung", fullWord: "Erfahrung", exp: "<b>Wortschatz:</b> Kata benda <i>die Erfahrung</i> (pengalaman)." },
    { id: 10, prefix: "sich", ans: "erer", fullWord: "sicherer", exp: "<b>Grammatik:</b> Bentuk Komparatif dari kata sifat <i>sicher</i> -> <i>sicherer</i> (semakin percaya diri)." },
    { id: 11, prefix: "verst", ans: "anden", fullWord: "verstanden", exp: "<b>Grammatik:</b> Partizip II dari <i>verstehen</i> untuk merangkai Plusquamperfekt (hatte ... verstanden)." },
    { id: 12, prefix: "Arbeits", ans: "abläufe", fullWord: "Arbeitsabläufe", exp: "<b>Wortschatz & Grammatik:</b> Kata benda majemuk bentuk Plural dari <i>der Arbeitsablauf</i> (alur kerja)." },
    { id: 13, prefix: "bek", ans: "am", fullWord: "bekam", exp: "<b>Grammatik:</b> Bentuk Präteritum irregular dari verba <i>bekommen</i>." },
    { id: 14, prefix: "Ber", ans: "icht", fullWord: "Bericht", exp: "<b>Wortschatz:</b> Kata benda maskulin <i>der Bericht</i> (laporan) dalam posisi Akkusativ singular." },
    { id: 15, prefix: "schi", ans: "cken", fullWord: "schicken", exp: "<b>Grammatik:</b> Bentuk Infinitiv dari verba <i>schicken</i> (mengirim) karena mengikuti kata kerja modal Präteritum <i>musste</i>." },
    { id: 16, prefix: "kon", ans: "nte", fullWord: "konnte", exp: "<b>Grammatik:</b> Bentuk Präteritum dari Modalverb <i>können</i> untuk subjek 'ich'." },
    { id: 17, prefix: "erle", ans: "digen", fullWord: "erledigen", exp: "<b>Wortschatz & Grammatik:</b> Infinitiv dari <i>erledigen</i> (menyelesaikan) pasangan dari modal verb <i>konnte</i>." },
    { id: 18, prefix: "mer", ans: "kte", fullWord: "merkte", exp: "<b>Grammatik:</b> Bentuk Präteritum regular dari <i>merken</i> (menyadari)." },
    { id: 19, prefix: "Mögli", ans: "chkeiten", fullWord: "Möglichkeiten", exp: "<b>Wortschatz & Grammatik:</b> Kata benda Plural <i>die Möglichkeiten</i> (kesempatan/peluang)." },
    { id: 20, prefix: "Erfah", ans: "rungen", fullWord: "Erfahrungen", exp: "<b>Wortschatz & Grammatik:</b> Plural dari <i>die Erfahrung</i> membentuk frasa <i>Erfahrungen sammeln</i>." }
];

function renderQuiz(data, containerId, prefix) {
    const container = document.getElementById(containerId);
    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.innerHTML = `
            <div class="question-text">${index + 1}. ${item.q}</div>
            ${item.context ? `<div class="context-sentence">${item.context}</div>` : ''}
            <div class="options-list">
                ${item.options.map((opt, i) => `
                    <button class="option-btn" onclick="checkAnswer('${prefix}',${index}, ${i}, this)">${opt}</button>
                `).join('')}
            </div>
            <div id="${prefix}-exp-${index}" class="explanation hidden">${item.exp}</div>
        `;
        container.appendChild(card);
    });
}

function checkAnswer(prefix, qIndex, selectedOpt, btn) {
    const dataSet = prefix === 'v' ? vocabData : grammarData;
    const item = dataSet[qIndex];
    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll('.option-btn');
    
    buttons.forEach((b, idx) => {
        b.disabled = true;
        if (idx === item.correct) {
            b.classList.add('correct');
        } else if (idx === selectedOpt) {
            b.classList.add('incorrect');
        }
    });

    const expDiv = document.getElementById(`${prefix}-exp-${qIndex}`);
    expDiv.classList.remove('hidden');
}

function showCTestSection() {
    document.getElementById('ctest-section').classList.remove('hidden');
    document.getElementById('btn-to-ctest').classList.add('hidden');
    window.scrollTo({
        top: document.getElementById('ctest-section').offsetTop - 20,
        behavior: 'smooth'
    });
}

function checkCTest() {
    const inputs = document.querySelectorAll('.ctest-input');
    const cardsContainer = document.getElementById('ctest-cards');
    cardsContainer.innerHTML = '';

    inputs.forEach((input) => {
        const id = parseInt(input.getAttribute('data-id'));
        const item = ctestData.find(d => d.id === id);
        const userAns = input.value.trim().toLowerCase();
        const expectedAns = item.ans.toLowerCase();
        const isCorrect = userAns === expectedAns;

        // Styling pada kotak input C-test
        if (isCorrect) {
            input.classList.remove('incorrect-input');
            input.classList.add('correct-input');
        } else {
            input.classList.remove('correct-input');
            input.classList.add('incorrect-input');
        }

        // Render Kartu Penjelasan per Soal
        const card = document.createElement('div');
        card.className = `ctest-card ${isCorrect ? 'is-correct' : 'is-incorrect'}`;
        card.innerHTML = `
            <div class="ctest-card-header">
                Soal #${item.id}: <u>${item.prefix}<b>${item.ans}</b></u> (${item.fullWord}) 
                — Status: ${isCorrect ? '<span style="color:var(--correct-color)">BENAR</span>' : '<span style="color:var(--incorrect-color)">SALAH</span>'}
            </div>
            <div class="ctest-card-body">
                ${!isCorrect ? `<p style="margin: 2px 0 6px 0; color: var(--incorrect-color);">Jawaban Kamu: <b>${userAns \vert{}\vert{} '(kosong)'}</b> \vert{} Seharusnya: <b>${item.ans}</b></p>` : ''}
                ${item.exp}
            </div>
        `;
        cardsContainer.appendChild(card);
    });

    document.getElementById('ctest-explanations-list').classList.remove('hidden');
    window.scrollTo({
        top: document.getElementById('ctest-explanations-list').offsetTop - 20,
        behavior: 'smooth'
    });
}

function downloadProjectZip() {
    if (typeof JSZip === 'undefined' || typeof saveAs === 'undefined') {
        alert("Pustaka Zip belum termuat sepenuhnya. Pastikan koneksi internet aktif.");
        return;
    }

    const zip = new JSZip();
    const htmlContent = document.documentElement.outerHTML;
    
    zip.file("index.html", htmlContent);
    zip.generateAsync({ type: "blob" }).then(function(content) {
        saveAs(content, "quiz-jerman-github.zip");
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderQuiz(vocabData, 'vocab-questions', 'v');
    renderQuiz(grammarData, 'grammar-questions', 'g');
});
