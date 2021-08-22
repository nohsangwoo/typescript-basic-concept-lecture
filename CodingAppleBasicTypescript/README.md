# coding apple Typescript lecture

# part1

## 타입스크립트 cli 명령어를 위한 설치

npm install -g typescript

## 타입스크립트 파일 자동 컴파일 모드 실행

tsc -w

## typescript tsconfig.json 옵션 종류 설명

## 1. 타입스크립트 기본 타입 정리 (primitive types)

## 2. 타입을 미리 정하기 애매할 때 (union type, any, unknown)

## 3. 함수에 타입 지정하는 법 & void 타입

## 4. 타입 확정하기 Narrowing & Assertion

## javascript html 연동

## 4. 숙제 해결 하기

## 5 타입도 변수에 담아 쓰기 / type 키워드 써서 & readonly

## 6. Literal Types로 만드는 const 변수 유사품

## 7. 함수와 methods에 type alias 지정하는 법

## 8. 타입스크립트로 HTML 변경과 조작

## 9. class

## 10 prototype

## 11. 클래스 생성시 타입 지정법

## 12. Object에 interface를 사용하여 타입지정 하는법

# part2

## 1. rest parameter and destructuring할때 타입지정

## 2. Narrowing 하는 방법 part2

## 3. 함수에 사용하는 never type

- 모든 함수는 return을 생략해도 기본적으로 return undefined를 가지고 있다.

- 즉 never type은 return이 실행되지 않는 환경을 말한다.(아래 예시)

```
 function throwErrorFunction(): never {
    throw new Error();
  }

  function infiniteFunction(): never {
    while (true) {
      console.log('infinite activate!');
    }
  }
```

- 그러나 실무에선 대부분 void로 대체한다. 굳이 never를 생각해가며 맞추기 귀찮고 직관적임

## 4. public private

## 5. protected static

## 6. import export 해서 타입사용 하기 / and about namespace

## 7. typescript generic

## 8. tuple type on Array

## 9. 외부 파일 이용시 declare & 이상한 특징인 ambient module

- ambient module
  파일 내부에 export문이 없다면 해당 파일은 자동으로 글로벌모듈로 설정돼서 해당 파일 안에서 사용하는 변수들은 import없이 어디서든 끌어다 쓸수있고 또한 해당 파일에서 변수명을 지정할때는 중복에 유의 해야한다.
- 위 글로벌 모듈을 막으려먼 export {}처럼 export의 내용이 없더라도
  export문만 있다면 로컬 모듈로 속성이 변경된다.
- 로컬 모듈로 전환한 상태에서 글로벌 속성의 타입스크립트를 사용하고싶다면 아래와 같이 사용하면 된다.

```
declare global {
  type Dog : string;
}
```
