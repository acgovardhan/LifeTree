
const pathData = {
    typing: {
        beginner: [
            {
                id: 'ty_b_1',
                title: 'Typing Basics: Complete 126 levels',
                xp: 50,
                url: 'https://www.typingclub.com',
                quiz: {
                    question: 'Which fingers are used for the home row keys?',
                    options: ['Index fingers', 'Middle fingers', 'Ring fingers', 'All fingers'],
                    correct: 3
                }
            },
            {
                id: 'ty_b_2',
                title: 'Typing Practice: Complete 400 levels',
                xp: 75,
                url: 'https://www.typingclub.com',
                quiz: {
                    question: 'What is the goal of speed drills?',
                    options: ['Increase accuracy', 'Increase speed', 'Both accuracy and speed', 'None of the above'],
                    correct: 1
                }
            }
        ]
    },
    python: {
        beginner: [
            {
                id: 'py_b_1',
                title: 'Python Basics: Variables and Data Types',
                xp: 50,
                url: 'https://www.learnpython.org/en/Variables_and_Types',
                quiz: {
                    question: 'Which of the following is NOT a standard Python data type?',
                    options: ['Integer', 'String', 'Float', 'Character'],
                    correct: 3 
                }
            },
            {
                id: 'py_b_2',
                title: 'Python Lists',
                xp: 75,
                url: 'https://www.learnpython.org/en/Lists',
                quiz: {
                    question: 'How do you access the first element of a list named `my_list`?',
                    options: ['my_list(0)', 'my_list[0]', 'my_list.first()', 'my_list.get(0)'],
                    correct: 1
                }
            }
        ],
        intermediate: [
            {
                id: 'py_i_1',
                title: 'Python Functions',
                xp: 100,
                url: 'https://www.learnpython.org/en/Functions',
                quiz: {
                    question: 'What keyword is used to define a function in Python?',
                    options: ['def', 'function', 'fun', 'define'],
                    correct: 0
                }
            }
        ],
        advanced: []
    },
    webdev: {
        beginner: [
            {
                id: 'wd_b_1',
                title: 'HTML Introduction',
                xp: 50,
                url: 'https://www.w3schools.com/html/html_intro.asp',
                quiz: {
                    question: 'What does HTML stand for?',
                    options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'],
                    correct: 0
                }
            },
            {
                id: 'wd_b_2',
                title: 'CSS Basics',
                xp: 75,
                url: 'https://www.w3schools.com/css/css_intro.asp',
                quiz: {
                    question: 'Which property is used to change the background color of an element?',
                    options: ['color', 'font-color', 'background-color', 'bgcolor'],
                    correct: 2
                }
            },
             {
                id: 'wd_b_3',
                title: 'JavaScript Introduction',
                xp: 100,
                url: 'https://www.w3schools.com/js/js_intro.asp',
                quiz: {
                    question: 'Where is the correct place to insert a JavaScript?',
                    options: ['The <head> section', 'The <body> section', 'Both the <head> and the <body> section are correct', 'The <footer> section'],
                    correct: 2
                }
            }
        ],
        intermediate: [
             {
                id: 'wd_i_1',
                title: 'JavaScript DOM Manipulation',
                xp: 120,
                url: 'https://www.w3schools.com/js/js_htmldom.asp',
                quiz: {
                    question: 'How do you find an HTML element by id in JavaScript?',
                    options: ['getElement("myId")', 'document.getElementById("myId")', 'document.querySelector("#myId")', 'Both B and C are correct'],
                    correct: 3
                }
            }
        ],
        advanced: []
    },
    appdev: { beginner: [], intermediate: [], advanced: [] },
    datascience: { beginner: [], intermediate: [], advanced: [] },
    aiml: { beginner: [], intermediate: [], advanced: [] },
    uiux: { beginner: [], intermediate: [], advanced: [] }
};
