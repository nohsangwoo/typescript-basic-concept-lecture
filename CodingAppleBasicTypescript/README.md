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

## 10. d.ts 파일 이용하기

- 프로젝트에서 사용하는 타입을 정리하는 용도로 사용된다.
- 즉 타입 정보의 보관용 파일
- ts파일에 type정의 내용이 너무 많은경우에 ~.d.ts파일에 type정의 내용을 전부 몰아 넣음(css파일 처럼..)

- tsconfig에서 declaration 옵션 켜기
  // 컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
  "declaration": true,

- 해당 파일에서 어떤 타입을 정의하고 사용하는지를 정리해둔 일종의 작은 document같은개념이다.
  d.ts파일에 타입을 지정해서 사용하기보다 원본 ts파일에서 타입지정하고 사용한 내용을 정리해서 d.ts파일에 담아두는것 (리스트 업)

- 따라서 위 개념으로 declaration옵션을 켠다면 자동으로 ts파일 마다 d.ts파일을 생성해주며 해당 ts파일에서 어떤 타입을 정의하고 사용했는지를 정리해서 d.ts에 리스트업 해준다.(자동 생성되는경우 d.ts파일을 수정할 필요 없다.)

- 기본적으로 d.ts파일은 export문구가 없어도 로컬모듈이다.
- 글로벌 d.ts파일 만드는법
  (tsconfig 설정)

```
<!-- types라는 폴더에 있는 파일은 글로벌하게 사용하게 해달라는 의미이다. -->
"typeRoots": ["./types"]
```

<!--  ./types/common/test.d.ts -->

- 위 생성한 파일안에서 정의된 타입은 import없이 어느 ts파일에서든 사용가능하다
- 특수한 경우를 제외하곤 글로벌 타입을 지정하는 법을 지양해야한다. 대부분 import문법으로 불러와서 사용하길 권장한다.

## 11. implements

- 해당 내용이 구현됐는지 확인하는 방법(추상적으로 기능을 구현하는 방법)

## 12. object index signatrue and recursive pattern

## 13. object 타입 변환기 만들기
