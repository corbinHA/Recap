const render = () => {

    const questions = [
        { _id: 1, name: 'Vladimir Harkonnen', content: 'Am I the drama?' }, 
        { _id: 2, name: 'Lady Jessica', content: 'Is Paul the Kwisatz Haderach?' },
        { _id: 3, name: 'Paul Atreides', content: 'Why are my dreams so sandy?' },
    ]   

    
    const App = document.createElement('div');
    App.classList.add('App');
    const header = document.createElement('header')
    header.innerHTML = 'Hello World (Now w/ 100% more JS)';

    const submitQuestion = question => {
        questions.push(question)
        generateQuestionsList();
    };
    
    const deleteQuestion = _id => {
        questions = questions.filter(question => questions._id !== _id)
        generateQuestionsList();
    };





    const QuestionForm = document.createElement('from');
    const h1 = document.createElement('h1');
    h1.innerText = 'Ask A Question';
    const name = document.createElement('input');
    name.name = 'name';
    name.type = 'text';
    name.placeholder = 'Name';
    const content = document.createElement('textarea');
    content.rows = 3;
    content.name = 'content';
    content.type = 'text';
    content.placeholder = 'Ask Anything...';
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.innerText = 'Submit';


    QuestionForm.classList.add('module')
    QuestionForm.append(h1, name, content, submit);

    QuestionForm.addEventListener('submit', e => {
        e.preventDefault();

        if (content.value === '') return content.placeholder = "Question required..."

        let data = {
            _id: Math.floor(Math.random() * 1000),
            content: content.value.trim(),
            name: name.value.trim(),

        }
        
        submitQuestion(data);
        name.value = '';
        content.value = '';
    })

    const Questions = document.createElement('div');

    const generateQuestionsList = () => {
        if (!questions.length) return Questions.innerHTML = 'No Questions'

        questions.reverse().map((question, i) => {
            const formattedQuestion = document.createElement('div');
            formattedQuestion.key = i;
            const h3 = document.createElement('h3');
            h3.innerText = question.content;
            const span = document.createElement('span');
            span.innerText = question.name;
            const button = document.createElement('button');
            button.innerText = 'Delete';
            button.onclick = () => deleteQuestion(question._id);

            formattedQuestion.append(h3, span, button);
            formattedQuestion.classList.add('module')

            Questions.append(formattedQuestion);

        });
    }



    App.append(QuestionForm);

    const root = document.getElementById('root');
    root.append(App);

    generateQuestionsList();
}

document.addEventListener('DOMContentLoaded', () => {
    render();
});