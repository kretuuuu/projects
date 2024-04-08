
let qs = [ 
    {
        q: "Jakie jest przyspieszenie ziemskie na powierzchni Ziemi?",
        answers: 
            {
                a: '9.81 m/s^2',
                b: '10 m/s^2',
                c: '7.82 m/s^2',
                d: '12 m/s^2'
            },
        correct: '9.81 m/s^2'
    },
    {
        q: "Jak nazywa się najwyższa góra świata?",
        answers: 
            {
                a: 'Mount Everest',
                b: 'K2',
                c: 'Annapurna',
                d: 'Kangchenjunga'
            },
        correct: 'Mount Everest'
    },
    {
        q: "Ile to jest pierwiastek kwadratowy z 144?",
        answers: 
            {
                a: '12',
                b: '11',
                c: '14',
                d: '10'
            },
        correct: '12'
    },
    {
        q: "Kto był pierwszym człowiekiem na Księżycu?",
        answers: 
            {
                a: 'Neil Armstrong',
                b: 'Buzz Aldrin',
                c: 'Yuri Gagarin',
                d: 'Alan Shepard'
            },
        correct: 'Neil Armstrong'
    },
    {
        q: "Kto jest autorem utworu 'Romeo i Julia'?",
        answers: 
            {
                a: 'William Shakespeare',
                b: 'Jane Austen',
                c: 'Fyodor Dostoevsky',
                d: 'Charles Dickens'
            },
        correct: 'William Shakespeare'
    },
    {
        q: "Jakie jest największe państwo na świecie pod względem powierzchni?",
        answers: 
            {
                a: 'Rosja',
                b: 'Kanada',
                c: 'Stany Zjednoczone',
                d: 'Chiny'
            },
        correct: 'Rosja'
    },
    {
        q: "Kto jest autorem obrazu 'Mona Lisa'?",
        answers: 
            {
                a: 'Leonardo da Vinci',
                b: 'Vincent van Gogh',
                c: 'Pablo Picasso',
                d: 'Michelangelo'
            },
        correct: 'Leonardo da Vinci'
    }
];


var x = 0, questions = document.createElement('div');

document.body.append(questions);

qs.forEach(element => {
    let div = document.createElement('div');
    div.id = "question"+x;
    let h = document.createElement('h2');
    h.innerText = x+1+". "+element.q;
    let ul = document.createElement('ul');
    for (let key in element.answers)
    {
        var li = document.createElement('li'), radio = document.createElement('input'), p = document.createElement('span');
        p.innerText = key.toString().toUpperCase()+" : "+element.answers[key];
        radio.type = 'radio';
        radio.name = "answ"+x;
        radio.value = element.answers[key];
        li.append(radio);
        li.append(p);
        ul.append(li);
    }
    div.append(h, ul);
    questions.append(div)
    x++;
});

var radiobuttons = document.querySelectorAll('input[type="radio"]'), btn = document.createElement('button'), checkeds = []

btn.innerText = "Sprawdź odpowiedzi";
btn.disabled = true;
btn.addEventListener('click', test)
questions.append(btn);

radiobuttons.forEach(element => {
    element.addEventListener('click', function ShowButton()
    {
        while (checkeds.length>0) checkeds.pop();
        radiobuttons.forEach(element => {
            if (element.checked == true) {checkeds.push(element)}
        });

        if (checkeds.length == qs.length)
        {
            btn.disabled = false;
            btn.innerText = "Sprawdź odpowiedzi";
        }
        else
        {
            btn.innerText = "Niezaznaczone odpowiedzi: "+(qs.length - checkeds.length);
        }
    })
});

function test()
{
    let i = 0, pkt = 0, score = document.createElement('div');
    checkeds.forEach(element => {
        if (element.value == qs[i].correct) 
        {   
            color(element.value);
            pkt++
        }
        i++
    });
    score.innerText = "Poprawne odpowiedzi: "+pkt;
    document.body.append(score);
}

// function color(valueElement)
// {
//     var spans = document.querySelectorAll('span');
//     spans.forEach(element => {
//         if (element.innerText.slice(3) == valueElement)
//         {
//             console.log(element.innerHTML.slice(3), valueElement)
//             element.style.color = "green";
//         }
//         console.log(value);
//     });
// } 
// to jeszcze nie dzialaaa
