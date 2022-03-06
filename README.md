# 3기*직업심리검사*이름 양덕규

3기 1반 첫번째 개인 프로젝트 입니다.
Create React App을 기반으로 제작된 '직업심리검사' 서비스입니다.

## 주요 기술 스택(라이브러리 등)

- [JavaScript]: 핵심 기능구현
- [React]: 핵심 기능 구현
- [react-router-dom]: 라우팅(페이지 이동)
- [yarn](ver: 1.22.15): 실행

## 사용 API

- (https://www.career.go.kr/inspct/openapi/test/questions?apikey=인증키&q=심리검사변수): 심리검사 문항 요청
- (https://www.career.go.kr/inspct/openapi/test/report?apikey=인증키&qestrnSeq=심리검사변수): 심리검사 결과 요청
- (https://www.career.go.kr/inspct/api/psycho/report?seq=결과): 결과 데이터
- (https://www.career.go.kr/inspct/api/psycho/interest/elementary/juniors): 추천 직업 목록
- (https://www.career.go.kr/jr/juniorjob/view?seq=직업고유번호): 직업 상세 정보 링크

## 간단한 프로젝트 설명

- [커리어넷](https://www.career.go.kr/cnet/front/openapi/openApiTestCenter.do)의 API를 활용하여 심리검사 질문지를 받아오고, 제출하여 결과를 얻어옵니다.
- 기본적으로 [React]와 [react-router-dom]을 활용하여 페이지 출력과 이동을 관리합니다.
- 기능 구현에 필요한 컴포넌트들은 디렉토리별 구분하여 생성하였습니다. 비슷한 기능 혹은 같은 페이지 내의 이동하는 경우 동일한 폴더 내에 생성하였습니다.
- API 호출에 필요한 키 등은 `.env` 파일에서 관리합니다.

## 시작

```
  yarn
  yarn start
```
