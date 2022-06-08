# Todo And Done List

react와 reducer에 대한 기본 학습을 전제로 todo and done list를 제작합니다.
react의 lifeCycle과 hook, reducer의 상태관리 들에 대한 이해를 학습 목표로 잡았습니다.

추가적으로 drag and drop, darkmode 등의 사용성을 높일 수 있는 기능을 추가하는 것이 두번째 목표입니다.

- **[ 주 제 ]**

todo & done 리스트만들기

- **[ 기획 및 고도화 ]**

react와 reducer에 대한 학습과 응용을 목적으로 토이프로젝트를 진행한다.
CRUD의 가장 기초가되는 todo & done 리스트를 생성하여 react의 lifeCycle과 reducer의 상태관리를 파악하고 적용한다.

todo에 대한 기본적인 CRUD 규칙과 그와 연관된 행위는 다음과 같다.

1. Create
   todo를 오늘을 기준으로 생성한다. 생성 항목은 제목으로 표기되며, 항목을 선택하는 경우 상세를 볼 수 있다.
   상세에는 제목과 글 내용있다. 두 항목은 글자 수 제한이 있으며, 확인하는 경우 modal로 표기한다.

2. Read
   총 4개의 탭 미완/예정/진행/완료 에서 확인할 수 있다.

3. Update
   모든 수정은 항목에 대한 제목/내용/날짜를 수정할 수 있다.
   날짜가 수정되는 경우 현재 todolist와 달력에 적절히 반영하여 표기한다.

4. Delete
   삭제하는 경우 휴지통에 보관된다.

이 다음으로는 특정 상황에 대한 todo & done list의 모습에 대해 소개한다.

todo에 대한 모든 조작은 drag and drop으로 개발한다.
(단, 초반 개발 시 버튼으로 구현하고 추후 drag and drop 기능을 추가한다.)

todo는 jira를 벤치마킹하여 미완/예정/진행/완료 4가지 항목으로 존재한다.
todo규칙과 각 항목의 특징/행위는 다음과 같다.

0. todo 규칙

   - todo는 각 고유 번호를 가지고 있다.
   - 활성화/비활성화에 따라 todo의 상태여부를 확인할 수 있다.

1. 미완

   - 좌측 aside에 표기되며, 이전날 완료하지 못한 todo가 존재하는 곳이다.
   - todo의 미완 횟수에 따라 좌측에 표기되며, 큰 누적 수로 표기된다.
   - 누적 카운트 수는 초기화되지 않는다.

2. 예정

   - 진행 탭으로만 이동할 수 있다.

3. 진행

   - 현재 진행중인 todo는 상단에 표기된다.
   - 예정/완료 탭으로 이동할 수 있다.

4. 완료
   - 완료탭으로 이동되는 경우, done 리스트에 추가되며, 완료된 시간이 기록된다.
   - done 리스트에 추가됨과 동시에 timeTable에 추가된다.
   - timeTable은 1시~7시 (6시간) 숙면 시간으로 작성되나, 완료시각이 숙면시간에 포함되어도 기록 가능하다. (이후 숙면시간의 시작은, 완료시각 이후)

todo는 월별 일일관리가 가능하다.
따라서 일자를 수정하거나 drag & drop으로 예정/진행 항목으로 이동할 수 있다.

todo에는 큰 단위의 카테고리가 적용될 수 있다.
카테고리는 작성자가 생성하고 관리할 수 있으며, 예를 들면 다음과 같다.
ex) 학습, 서류, 취업, 개발

사용자는 일자별, 카테고리별로 todo와 done리스트를 확인할 수 있다.
생성한 카테고리에 todo가 존재하는 경우, 해당 카테고리 우측에 todo의 개수가 표기된다.

- **[ 구현기능 ]**

1. todoList

2. doneList

3. timeTable

- **[ 세부기능 ]**

1. download of drawing board

2. drag and drop

3. data management

4. darkmode

- **[ 사용기술 ]**

React, Reducer, metarial-ui

- **[ 디 자 인 ]**

- **[ 참고문헌 ]**
  https://mui.com/material-ui/getting-started/installation/
