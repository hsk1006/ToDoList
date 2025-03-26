// 입력 필드와 할 일 목록 컨테이너 요소 선택
const inputBox = document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

// 할 일 추가 함수
function addTask(){
    // 입력 필드가 비어있는지 확인
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        // 새로운 할 일 목록 아이템 생성
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

         // 삭제 버튼(span) 생성 및 추가
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";// 곱하기 기호(×)
        li.appendChild(span);
    }
     // 입력 필드 초기화
    inputBox.value = "";
    saveData();
}

// Enter 키 입력 시 할 일 추가 이벤트 리스너
inputBox.addEventListener("keypress", function(e) {
     // Enter 키 눌렀을 때 addTask 함수 호출
    if (e.key === "Enter") {
        addTask();
    }
});

// 할 일 목록 이벤트 리스너 (할 일 완료 및 삭제)
listContainer.addEventListener("click", function(e){
    // 할 일 아이템 클릭 시 완료/미완료 토글
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
     // 삭제 버튼 클릭 시 해당 할 일 삭제
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


// 로컬 스토리지에 할 일 목록 저장 함수
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// 로컬 스토리지에서 할 일 목록 불러오기 함수
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

// 페이지 로드 시 저장된 할 일 목록 표시
showTask();