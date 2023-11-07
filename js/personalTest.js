class PersonalTest {
    constructor(target) {
        this.container = document.querySelector(target); // 추후 dom 내용을 바꾸기 위한 선택자
        this.page = 0; // 0: intro, 1: test, 2: result 현재 페이지
        this.progress = 0; // 현재 질문 단계
        this.questions = {
            PF: [{ question: '여행 가자! 어떻게 여행할지 조사해서 정리해볼까?', answer: { a:'YES', b: 'NO'} },{ question: '가서 무슨 일이 생길지 몰라! 이것저것 다 챙기자!', answer: { a:'YES', b: 'NO'} },{ question: '현지에 도착해보니 내 예상과 너무 다르다! 당황스럽네;;', answer: { a:'YES', b: 'NO'} }],
            SC: [{ question: '도시가 좀 비위생적인데? 집에 가고 싶다..', answer: { a: 'YES', b: 'NO' } },{ question: '예약한 숙소가 사진보다 너무 별로야. 바꿀까?', answer: { a: 'YES', b: 'NO' } },{ question: '비행기 경유라니.. 너무 걱정돼서 한숨도 못 잤어ㅜ', answer: { a: 'YES', b: 'NO' } }],
            UR: [{ question: '놀러 왔는데 현지인들이 어떻게 사는지 보러가야지!', answer: { a: 'YES', b: 'NO' } }, { question: '한국에서 이걸 어떻게 해보겠어! 여기서만 할 수 있는 건 무조건 해야지!', answer: { a: 'YES', b: 'NO' } }, { question: '처음 보는 음식이다! 무슨 맛일까? 먹어보자!', answer: { a: 'YES', b: 'NO' } }],
            HA: [{ question: '놀러왔는데 여유롭게 다니자', answer: { a: 'YES', b: 'NO' } }, { question: '오늘부터 본격적으로 놀아보자! 늦잠은 필수!', answer: { a: 'YES', b: 'NO' } }, { question: '여기가 아무리 유명하다지만 너무 위험해ㅜ 직접하기는 좀 무서워', answer: { a: 'YES', b: 'NO' } }],

        }; // 질문 모음

        this.results = []; // 사용자가 선택한 답모음
        this.resultInfors = {
            PSRH: {title:"이시언", desc: "내가 계획을 짜서 왔어<br />여기서 진짜 나는 뭐 못 먹겠어.. 난 비위가 약해<br />제발 집에 가자...<br />바이크 타자!<br />환상의 케미: 덱스<br />환장의 케미: 기안84"},
            PSRA: {title:"이시언", desc: "내가 계획을 짜서 왔어<br />여기서 진짜 나는 뭐 못 먹겠어.. 난 비위가 약해<br />제발 집에 가자...<br />바이크 타자!<br />환상의 케미: 덱스<br />환장의 케미: 기안84"},
            PSUH: {title:"이시언", desc: "내가 계획을 짜서 왔어<br />여기서 진짜 나는 뭐 못 먹겠어.. 난 비위가 약해<br />제발 집에 가자...<br />바이크 타자!<br />환상의 케미: 덱스<br />환장의 케미: 기안84"},
            PSUA: {title:"이시언", desc: "내가 계획을 짜서 왔어<br />여기서 진짜 나는 뭐 못 먹겠어.. 난 비위가 약해<br />제발 집에 가자...<br />바이크 타자!<br />환상의 케미: 덱스<br />환장의 케미: 기안84"},
            PCRH: {title:"덱스", desc: "무슨 일이 있을지 모르니까 전부 다 가져왔죠!<br />음식을 가려서.. 현지식이 조금 걱정이에요ㅜ<br />그래도 갠지스 강 한 번쯤은 들어가 보고 싶었어요.<br />이 풍경을 온전한 제 눈으로 담고 싶어요<br />환상의 케미: 이시언<br />환장의 케미: 기안84"},
            PCRA: {title:"빠니보틀", desc: "여행 다닐 때 필요한 모든 것이 있는 마법 가방 소유!<br />여기가 원래 좀 이래요 ㅎㅎ<br />조금 위험한 곳&생소한 곳도 OK!<br />환상의 케미: 기안84<br />환장의 케미: 기안84"},
            PCUH: {title:"빠니보틀", desc: "여행 다닐 때 필요한 모든 것이 있는 마법 가방 소유!<br />여기가 원래 좀 이래요 ㅎㅎ<br />조금 위험한 곳&생소한 곳도 OK!<br />환상의 케미: 기안84<br />환장의 케미: 기안84"},
            PCUA: {title:"빠니보틀", desc: "여행 다닐 때 필요한 모든 것이 있는 마법 가방 소유!<br />여기가 원래 좀 이래요 ㅎㅎ<br />조금 위험한 곳&생소한 곳도 OK!<br />환상의 케미: 기안84<br />환장의 케미: 기안84"},
            FSRH: {title:"이시언", desc: "내가 계획을 짜서 왔어<br />여기서 진짜 나는 뭐 못 먹겠어.. 난 비위가 약해<br />제발 집에 가자...<br />바이크 타자!<br />환상의 케미: 덱스<br />환장의 케미: 기안84"},
            FSRA: {title:"이시언", desc: "내가 계획을 짜서 왔어<br />여기서 진짜 나는 뭐 못 먹겠어.. 난 비위가 약해<br />제발 집에 가자...<br />바이크 타자!<br />환상의 케미: 덱스<br />환장의 케미: 기안84"},
            FSUH: {title:"덱스", desc: "무슨 일이 있을지 모르니까 전부 다 가져왔죠!<br />음식을 가려서.. 현지식이 조금 걱정이에요ㅜ<br />그래도 갠지스 강 한 번쯤은 들어가 보고 싶었어요.<br />이 풍경을 온전한 제 눈으로 담고 싶어요<br />환상의 케미: 이시언<br />환장의 케미: 기안84"},
            FSUA: {title:"덱스", desc: "무슨 일이 있을지 모르니까 전부 다 가져왔죠!<br />음식을 가려서.. 현지식이 조금 걱정이에요ㅜ<br />그래도 갠지스 강 한 번쯤은 들어가 보고 싶었어요.<br />이 풍경을 온전한 제 눈으로 담고 싶어요<br />환상의 케미: 이시언<br />환장의 케미: 기안84"},
            FCRH: {title:"덱스", desc: "무슨 일이 있을지 모르니까 전부 다 가져왔죠!<br />음식을 가려서.. 현지식이 조금 걱정이에요ㅜ<br />그래도 갠지스 강 한 번쯤은 들어가 보고 싶었어요.<br />이 풍경을 온전한 제 눈으로 담고 싶어요<br />환상의 케미: 이시언<br />환장의 케미: 기안84"},
            FCRA: {title:"덱스", desc: "무슨 일이 있을지 모르니까 전부 다 가져왔죠!<br />음식을 가려서.. 현지식이 조금 걱정이에요ㅜ<br />그래도 갠지스 강 한 번쯤은 들어가 보고 싶었어요.<br />이 풍경을 온전한 제 눈으로 담고 싶어요<br />환상의 케미: 이시언<br />환장의 케미: 기안84"},
            FCUH: {title:"기안84", desc: "2주 인도 여행에 옷 2벌, 양말 3쌍이면 뭐 충분하지.<br />오 이거 파이어빤 먹어봐도 돼요?<br />지금 아니면 언제 현지 사람처럼 생활해보겠어요.<br />성당 들어가보고 싶어! 결혼식 가야해!<br />저는 환상의 케미: 빠니보틀<br />환장의 케미: 이시언"},
            FCUA: {title:"기안84", desc: "2주 인도 여행에 옷 2벌, 양말 3쌍이면 뭐 충분하지.<br />오 이거 파이어빤 먹어봐도 돼요?<br />지금 아니면 언제 현지 사람처럼 생활해보겠어요.<br />성당 들어가보고 싶어! 결혼식 가야해!<br />저는 환상의 케미: 빠니보틀<br />환장의 케미: 이시언"},
        }
        this.init();
    }

    init() {
        this.questionArray = this.getQuestion(); // 질문을 배열로 저장

        const answerAButton = this.container.querySelector('button[data-answer="a"]');
        const answerBButton = this.container.querySelector('button[data-answer="b"]');
        const startButton = this.container.querySelector('button[data-action="start"]');
        const restartButton = this.container.querySelector('button[data-action="restart"]');

        answerAButton.addEventListener('click', () => this.submitAnswer(answerAButton.innerText));
        answerBButton.addEventListener('click', () => this.submitAnswer(answerBButton.innerText));
        startButton.addEventListener('click', this.start.bind(this));
        restartButton.addEventListener('click', this.restart.bind(this));

        /*
        2023-05-19 리팩토링
        1. 이벤트 리스너 함수 분리: 이벤트 리스너를 분리하여 코드 가독성 향상.
        2. e.target.innerText 대신 클릭한 버튼의 innerText를 매개변수로 전달. (직관성)
        3. querySelector 결과를 변수에 저장: 반복적인 querySelector 호출을 피하여 가독성 향상.
        */

        this.render();
    }

    start() {
        if(this.progress !== 0) return; // 진행중이면 실행하지 않음

        this.page = 1;
        this.render();
    }

    restart() {
        this.page = 0;
        this.progress = 0;
        this.results = [];
        this.render();
    }

    getQuestion() { // questions의 키를 참조해서 질문을 반환
        return Object.entries(this.questions)
        .flatMap(([type, questions]) => questions.map(question => ({ ...question, type })));

        /*
        2023-05-19 리팩토링
        1. Object.entries를 사용하여 객체를 배열로 변환 후 이차원 배열을 flatMap으로 평탄화.
        */
    }

    getCurrentQuestions() { // 현재 progress의 질문을 반환
        const currentQuestionIndex = this.progress;
        return this.questionArray[currentQuestionIndex];

        /*
        2023-05-19 리팩토링
        1. currentQuestionIndex 변수 도입으로 현재 질문의 인덱스를 명시적으로 표현하여 가독성 향상.
        */
    }

    submitAnswer(answer) {
        const currentQuestion = this.questionArray[this.progress];

        if (this.questionArray.length <= this.progress + 1) {
            this.page = 2;
            this.render();
        }

        const selectedAnswer = Object.keys(currentQuestion.answer)
        .find(selectedAnswer => currentQuestion.answer[selectedAnswer] === answer);

        this.results.push({
            type: currentQuestion.type,
            answer: selectedAnswer
        });

        this.progress++;
        this.render();

        return this.getCurrentQuestions();

        /*
        2023-05-19 리팩토링
        1. this.questionArray[this.progress]를 반복해서 사용하는 대신 currentQuestion라는 변수를 도입하여 가독성 향상
        2. Object.keys() 및 find() 메서드를 사용하여 사용자가 선택한 답변에 해당하는 키 값을 찾는 과정을 단순화.
        */
    }

    //a와 b가 몇개인지 세어주는 함수..?
    calcResult() {
        const totalResult = Object.keys(this.questions).reduce((acc, cur) => {
            acc[cur] = this.results
                .filter(result => result.type === cur)
                .reduce((acc, cur) => {
                acc[cur.answer] = acc[cur.answer] ? acc[cur.answer] + 1 : 1;
                return acc;
            }, {});
            return acc;
        }, {});
        
        return this.createPersonalResult(totalResult);
        /*
        2023-05-19 리팩토링
        1. this.result = 부분 제거, totalResult 변수에 할당 이후 중첩 reduce() 메서드를 사용하여 가독성 향상.
        */
    }

    createPersonalResult(totalResult) {
        return Object.keys(totalResult).reduce((acc, cur) => {
            const result = totalResult[cur];
            
            if (!result.a) return acc + cur[1];
            if (!result.b) return acc + cur[0];
        
            if (result.a === result.b) {
                return acc + cur[0];
            }
            
            return acc + (result.a > result.b ? cur[0] : cur[1]);
        }, "");
        /*
        2023-05-19 리팩토링
        1. totalResult[cur]를 result 변수로 저장하여 가독성 향상
        2. if문의 반환 값이 같은 경우를 하나로 통합하여 가독성을 개선
        */
    }

    render() {
        const introContainer = this.container.querySelector('.intro_container');
        const testContainer = this.container.querySelector('.test_container');
        const resultContainer = this.container.querySelector('.result_container');

        if (this.page === 0) {
            introContainer.classList.add('active');
            testContainer.classList.remove('active');
            resultContainer.classList.remove('active');

        } else if (this.page === 1) {
            testContainer.classList.add('active');
            introContainer.classList.remove('active');
            resultContainer.classList.remove('active');

            const progressElement = this.container.querySelector('.progress');
            const questionElement = this.container.querySelector('.question');
            const answerAElement = this.container.querySelector('button[data-answer="a"]');
            const answerBElement = this.container.querySelector('button[data-answer="b"]');
        
            progressElement.textContent = `Q${this.progress + 1}. `;
            questionElement.textContent = this.getCurrentQuestions().question;
            answerAElement.textContent = this.getCurrentQuestions().answer.a;
            answerBElement.textContent = this.getCurrentQuestions().answer.b;

        } else if (this.page === 2) {
            resultContainer.classList.add('active');
            introContainer.classList.remove('active');
            testContainer.classList.remove('active');
        
            const resultTextElement = this.container.querySelector('.result_text');
            const resultInforTitleElement = this.container.querySelector('.result_infor_title');
            const resultInforElement = this.container.querySelector('.result_infor');
            const calcResult = this.calcResult();
        
            resultTextElement.innerHTML = `당신의 성향은 <span class="point_text">${calcResult}</span>입니다.`;
            resultInforTitleElement.innerHTML = `[ ${this.resultInfors[calcResult].title} ]`;

            //이미지 추가 내가 한거임
            const personImageElement = this.container.querySelector('#personImage'); //이미지 요소 선택

            if (calcResult === 'PSRH' || calcResult === 'PSRA' || calcResult === 'PSUH' || calcResult === 'PSUA' || calcResult === 'FSRH' || calcResult === 'FSRA') {
                personImageElement.src = './src/images/sie.png'; // 이시언
            } else if (calcResult === 'FCUH' || calcResult === 'FCUA') {
                personImageElement.src = './src/images/84.png'; // 기안
            } else if (calcResult === 'PCRH' || calcResult === 'FSUH' || calcResult === 'FSUA' || calcResult === 'FCRH' || calcResult === 'FCRA') {
                personImageElement.src = './src/images/dex1.png'; // 덱스
            } else if (calcResult === 'PCRA' || calcResult === 'PCUH' || calcResult === 'PCUA') {
                personImageElement.src = './src/images/ppa.png'; // 빠니보틀
            } else {
                personImageElement.src = ''; // 오류잡기
            }
        
            resultInforElement.innerHTML = this.resultInfors[calcResult].desc
            .split('<br />')
            .map(el => `<li>${el}</li>`)
            .join('');
        }
        /*
        2023-05-19 리팩토링
        1. 각각의 UI 요소를 변수로 저장하여 가독성을 향상 
        2. 텍스트 콘텐츠와 HTML 내용을 설정하는 부분을 변수로 분리하여 가독성을 개선
        */
    }
}
