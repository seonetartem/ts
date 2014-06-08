'use strict';

var express = require('express');

var app = express();
module.exports = app;

app.use(require('connect-nocache')());



var testList = [
    {
        'id': 1,
        'name':'php',
        'link': 'php'
    },
    {
        'id': 2,
        'name': 'javascript',
        'link': 'javascript'
    },
    {
        'id': 3,
        'name': 'mysql',
        'link': 'mysql'
    }
];

var testQuestions = {
    'php': [
        {
            'id': 1,
            'question': 'Which of the following tags are an acceptable way to begin a PHP Code block?',
            'desc': '',
            'answers': [
                {
                    'id': 1,
                    'name': '<SCRIPT LANGUAGE="php">'
                },
                {
                    'id': 2,
                    'name': '<!'
                },
                {
                    'id': 3,
                    'name': '<%'
                },
                {
                    'id': 4,
                    'name': '<?php'
                },
                {
                    'id': 5,
                    'name': '<?'
                }
            ],
            'multiply': true
        },
        {
            'id': 2,
            'question': 'Which of the following are valid PHP variables?',
            'desc': '',
            'answers': [
                {
                    'id': 6,
                    'name': '@$foo'
                },
                {
                    'id': 7,
                    'name': '&$variable'
                },
                {
                    'id': 8,
                    'name': '${0x0}'
                },
                {
                    'id': 9,
                    'name': '$variable'
                },
                {
                    'id': 10,
                    'name': '$0x0'
                }
            ],
            'multiply': true
        },
        {
            'id': 3,
            'question': 'What is the best way to iterate and modify every element of an array using PHP 5?',
            'desc': '',
            'answers': [
                {
                    'id': 11,
                    'name': 'You cannot modify an array during iteration'
                },
                {
                    'id': 12,
                    'name': 'for($i = 0; $i < count($array); $i++) { /* ... */ }'
                },
                {
                    'id': 13,
                    'name': 'foreach($array as $key => &$val) { /* ... */ }'
                },
                {
                    'id': 14,
                    'name': 'foreach($array as $key => $val) { /* ... */ }'
                },
                {
                    'id': 15,
                    'name': 'while(list($key, $val) = each($array)) { /* ... */'
                }
            ],
            'multiply': false
        },
        {
            'id': 4,
            'question': 'What is the output of the following PHP code?',
            'desc': '<?php<br/>define(\'FOO\', 10);<br/>$array = array(10 => FOO, "FOO" => 20);<br/>print $array[$array[FOO]] * $array["FOO"];<br/>?>',
            'answers': [
                {
                    'id': 16,
                    'name': 'FOO'
                },
                {
                    'id': 17,
                    'name': '100'
                },
                {
                    'id': 18,
                    'name': '200'
                },
                {
                    'id': 19,
                    'name': '20'
                },
                {
                    'id': 20,
                    'name': '10'
                }
            ],
            'multiply': false
        }
    ]
};

var testAnswers = [
    {
        'id': 1

    }
];


app.post('/api/test', function (req, res) {
    res.json(200, testList);
});

app.post('/api/test/answers', function (req, res) {
    res.json(200, testList);
});

app.get('/api/test/:name', function (req, res) {
    res.json(200, testQuestions[req.params.name]);
});
