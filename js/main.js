//동적 피커버튼 생성
createPickerDOM(['orange', 'hotpink', 'cornflowerblue', 'violet', '#333'], '--pointColor');  

function createPickerDOM(arrColors, varName){

  // aside 객체
  let aside = document.createElement("aside");
  aside.classList.add("picker");

  let tags = '';
  arrColors.forEach((data)=>{
    tags += `<span style="background-color:${data}">${data}</span>`
  })

  aside.innerHTML = tags;

  // p객체
  let p = document.createElement("p");
  p.classList.add('palletGroup')
  p.innerHTML = `<input type="color"><button>색상 선택</button>`

  // aside 객체에 p 추가
  aside.append(p)

  // body에 aside 추가
  document.body.append(aside);


  // 첫번째 aside 버튼에 이벤트 추가
  const btns = document.querySelectorAll('.picker span');

  btns.forEach(btn => {
    btn.addEventListener('click', e=>{
      const selectedColor = e.currentTarget.style.backgroundColor;
      document.body.style.setProperty(varName, selectedColor);

    });
  });

  // 두번째 aside 팔레트에 이벤트 추가
  //children은 태그 안에 있는 돔을 모두 선택한다.
  const [pallet, btn] = document.querySelector('.palletGroup').children;
  btn.addEventListener("click", ()=>{
  document.body.style.setProperty(varName, pallet.value);
})
}