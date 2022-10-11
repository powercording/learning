> ## Drag and drop kanban TodoList
>
> > [DEMO](https://webdevfront.com/react_to_do/) <<클릭

### 사용 라이브러리

- ### react-hook-form
- ### recoil
- ### react-beautiful-dnd

<hr>
드래그 드롭을 이용한 칸반보드 스타일의 투두 리스트입니다. 리코일의 셀렉터를 이용해 드래그 드롭시 해당하는 카테고리에 대한 리스트를 재정렬하고 출력합니다. beautiful dnd 라이브러리로 드래그 드롭에 대한 에니메이션을 개발자가 따로 작성할 필요없이 물리적인 효과와 함께 사용 가능합니다.

### gif

![ezgif com-gif-maker](https://user-images.githubusercontent.com/105046423/195060338-fd7f946c-5790-4705-ad44-f2d429fda4c5.gif)

<hr/>

> 1. 드래그 드롭으로 각 카테고리로 이동할때 카테고리 상태와 순서에 따른 자연스러운 재정렬과 출력을 하기위해 리코일 셀렉터를 이용하였습니다.
> 2. 드래그마다 목록에 대한 변형이 일어나기 때문에 어레이 프로토타입 메소드들에 대하여 공부할 수 있었습니다.
> 3. 스테이터스에서 가져오는 값에대한 변형을 허락하지 않기 때문에 해당목록의 값을 새롭게 할당하고, 순서를 정렬하는 작업을 하였습니다.
