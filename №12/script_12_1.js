let formDef1 = [{
        label: 'Название сайта:',
        kind: 'longtext',
        name: 'sitename',
    },
    {
        label: 'URL сайта:',
        kind: 'longtext',
        name: 'siteurl',
    },
    {
        label: 'Посетителей в сутки:',
        kind: 'number',
        name: 'visitors',
    },
    {
        label: 'E-mail для связи:',
        kind: 'shorttext',
        name: 'email',
    },
    {
        label: 'Рубрика каталога:',
        kind: 'combo',
        name: 'division',
        variants: [{
                text: 'здоровье',
                value: 1,
            },
            {
                text: 'домашний уют',
                value: 2,
            },
            {
                text: 'бытовая техника',
                value: 3,
            }
        ]
    },
    {
        label: 'Размещение:',
        kind: 'radio',
        name: 'payment',
        variants: [{
                text: 'бесплатное',
                value: 1,
            },
            {
                text: 'платное',
                value: 2,
            },
            {
                text: 'VIP',
                value: 3,
            }
        ]
    },
    {
        label: 'Разрешить отзывы:',
        kind: 'check',
        name: 'votes',
    },
    {
        label: 'Описание сайта:',
        kind: 'memo',
        name: 'description',
    },
    {
        label: 'Опубликовать',
        kind: 'submit',
    },
];

let formDef2 = [{
        label: 'Фамилия:',
        kind: 'longtext',
        name: 'lastname',
    },
    {
        label: 'Имя:',
        kind: 'longtext',
        name: 'firstname',
    },
    {
        label: 'Отчество:',
        kind: 'longtext',
        name: 'secondname',
    },
    {
        label: 'Возраст:',
        kind: 'number',
        name: 'age',
    },
    {
        label: 'Зарегистрироваться',
        kind: 'submit',
    },
];

function createForm(insertform, insertArr) {

    let form = insertform;
    form.action = 'http://fe.it-academy.by/TestForm.php'

    function makeInput(type, currentValue) {
        let label = document.createElement('label');
        let input = document.createElement('input');
        let br = document.createElement('br');
        let labelText = document.createTextNode(currentValue.label);

        input.type = type;
        input.name = currentValue.name;

        form.appendChild(label);
        form.appendChild(br);
        label.appendChild(labelText);
        label.appendChild(input);
    }

    for (let i = 0; i < insertArr.length; i++) {

        let currentValue = insertArr[i];
        if (currentValue.kind === 'longtext') {
            makeInput('text', currentValue);
        } else if (currentValue.kind === 'number') {
            makeInput('number', currentValue);
        } else if (currentValue.kind === 'shorttext') {
            makeInput('email', currentValue);
        } else if (currentValue.kind === 'submit') {
            let input = document.createElement('input');
            let br = document.createElement('br');

            input.type = 'submit';
            input.value = currentValue.label;

            form.appendChild(input);

        } else if (currentValue.kind === 'combo') {
            let label = document.createElement('label');
            let labelText = document.createTextNode(currentValue.label);
            let br = document.createElement('br');
            let arrOption = currentValue.variants;
            let select = document.createElement('select');


            select.name = currentValue.name;

            label.appendChild(labelText);
            label.appendChild(select);
            form.appendChild(label);
            form.appendChild(br);

            arrOption.forEach(function(item) {
                let option = document.createElement('option');
                let optionText = document.createTextNode(item.text);

                option.value = item.value;

                select.appendChild(option);
                option.appendChild(optionText);
            });
        } else if (currentValue.kind === 'radio') {
            let label = document.createElement('label');
            let labelText = document.createTextNode(currentValue.label);
            let br = document.createElement('br');
            let arrRadio = currentValue.variants;


            form.appendChild(label);
            form.appendChild(br);
            label.appendChild(labelText);

            arrRadio.forEach(function(item) {
                let input = document.createElement('input');
                let labelRadio = document.createElement('label');
                let labelTextRadio = document.createTextNode(item.text);

                input.type = 'radio';
                input.name = item.name;
                input.value = item.value;

                labelRadio.appendChild(input);
                labelRadio.appendChild(labelTextRadio);
                label.appendChild(labelRadio);
            });
        } else if (currentValue.kind === 'check') {
            makeInput('checkbox', currentValue);
        } else if (currentValue.kind === 'memo') {
            let label = document.createElement('label');
            let labelText = document.createTextNode(currentValue.label);
            let br = document.createElement('br');
            let textarea = document.createElement('textarea');

            textarea.name = currentValue.name;

            label.appendChild(labelText);
            form.appendChild(label);
            form.appendChild(br);
            label.appendChild(textarea);
        }
    }
};

let form1 = document.forms.form1;

let form2 = document.forms.form2;

createForm(form1, formDef1);
createForm(form2, formDef2);