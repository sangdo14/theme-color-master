//동적 피커버튼 생성
createPickerDOM(['orange', 'hotpink', 'cornflowerblue', 'violet', '#333'], '--pointColor');  

function createPickerDOM(arrColors, varName){
  // createElement가 반환하는 요소는 dom객체
  let aside = document.createElement("aside");
  aside.classList.add("picker");

  let tags = '';
  arrColors.forEach((data)=>{
    tags += `<span style="background-color:${data}">${data}</span>`
  })

  //innerHTML은 문자열 대입에서 동적태그 생성
  //선택자 안쪽의 내용을 지우고 tags문자열로 구성된 구조로 바꿔치기
  aside.innerHTML = tags;

  //선택자.append(DOM): 선택자 안쪽에 DOM요소를 추가 삽입
  document.body.append(aside);

  //동적생성요소를 바로 가져와서 이벤트 연결까지 한 번에
  const btns = document.querySelectorAll('.picker span');

  btns.forEach(btn => {
    btn.addEventListener('click', e=>{
      const selectedColor = e.currentTarget.style.backgroundColor;
      document.body.style.setProperty(varName, selectedColor);
    });
  });
}
