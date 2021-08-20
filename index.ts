// ## 1. 타입스크립트 기본 타입 정리 (primitive types)
{
  // 변수
  let name: string = 'noh';

  // 배열
  let names: string[] = ['noh,kim'];

  // 오브젝트
  let family: { me: string; mother: string; father: string } = {
    me: 'noh',
    mother: 'kim',
    father: 'noh',
  };

  //   오브젝트안의 모든 value type이 string 일때 지정방법
  let family2: { [key: string]: string } = {
    me: 'noh',
    mother: 'kim',
    father: 'noh',
  };
}

// ## 2. 타입을 미리 정하기 애매할 때 (union type, any, unknown)
{
  // union type (다른 여러개의 타입도 할당될 수 있는 여지를 줌)
  let name: string | number = 'nohsangwoo';
  name = 100;

  //   서로 다른타입이 배열안에 포함되는 경우
  let names: (number | string)[] = ['noh', 'kim', 'noh', 3];

  // 객체안의 value type이 다른 타입도 할당 될 수 있는 여지를 줌
  let obj: { a: number | string } = { a: '123' };
  obj = { a: 123 };

  // any: 어떤 type이든 저장될 수 있다.
  let anyTypeVariable: any = ['123'];
  anyTypeVariable = 123;
  anyTypeVariable = [null];
  anyTypeVariable = { a: 123 };

  // unknown:  any와 매우 비슷한데 좀더 안전하게 사용가능
  //   ex)
  let myName: any = { name: 'nohsangwoo' };
  //   any로 지정된 타입은 어디든 걍 무시하고 할당 가능
  //   myName은 분명 오브젝트타입이 할당됐는데 string타입의 변수에 할당 가능하다.
  let testVariable: string = myName;

  //   but, unknown이라면?
  let myName2: unknown = { name: 'nohsangwoo' };
  //   unknown으로 지정된 타입은 다른곳에 할당될때 자신에게 저장된 타입과 같은 타입이 아니라면 에러를 뿜어내준다
  //   let testVariable2: string = myName2;
  //   즉 자신에게 할당될수있는 변수만 무엇이든 허용해주는 타입이라 조금더 안전하다
}

// ## 3. 함수에 타입 지정하는 법 & void 타입
{
  // 함수에 타입 지정하는법
  function testFunction(x: number): number {
    return x * 2;
  }
  // return 이 없는 함수에 반환 형식을 void 타입으로 지정하는법
  function functionThatReturnsVoidType(): void {}
}

// ##  4. 타입 확정하기 Narrowing & Assertion
{
  // Narrowing example1
  function question1(x: string | number) {
    if (typeof x === 'number') {
      console.log('4-1 문제 풀이 : ', x + 1, '\n\n');
    }
  }
  question1(3);

  // Narrowing example2
  function question2(x: string | number) {
    let array: number[] = [];
    if (typeof x === 'number') {
      array[0] = x;
    }
    console.log('4-2 문제 풀이 : ', array, '\n\n');
  }
  question2(3);

  // type Assertion example1
  function question3(x: string | number) {
    let array: number[] = [];
    array[0] = x as number;
    console.log('4-3 문제 풀이 : ', array, '\n\n');
  }
  question3(3);
  // as 문법은 내로잉 할때처럼 여러개의 타입을 할당받을수있는 유니온 타입일때 하나의 타입으로 확정하기위한 용도로 사용됨.
  // 어떤 타입이 틀어올지 100% 확신이 있을때 씀
  // 근데 as 문법쓰면 버그추적이 불가능할 확률이 높음 그래서 사용 권장하지 않고 if문법같은걸로 narrowing 권장

  // 숙제 - [1,2,"3","4"] 처럼 배열안의 type이 섞여있을때 number[] 타입으로 변환해주는 함수 만들기

  function homeWork1(arr: (string | number)[]) {
    let result: number[] = [];
    console.log('숙제1 변환 하기 전 : ', arr);
    arr.forEach(el => {
      if (typeof el === 'string') {
        result = [...result, Number(el)];
      } else {
        result = [...result, Number(el)];
      }
    });
    console.log('숙제1 변환 후: ', result);
  }

  console.log('--------------- #4 숙제 1 ---------------');
  const arr1 = [1, 2, 3, '4', '5', '6'];
  homeWork1(arr1);
  console.log('--------------- #4 end of 숙제 1 ---------------\n\n');

  //  숙제 2 -
  /*
    let 철수쌤 = { subject : 'math' }
    let 영희쌤 = { subject : ['science', 'english'] }
    let 민수쌤 = { subject : ['science', 'art', 'korean'] }
  */
  /*
    지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
    과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
    과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 
    
    철수쌤같은 선생님 object 자료를 집어넣으면 
    그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
    그리고 타입지정도 엄격하게 해보도록 합시다.
    */
  /*
    만들함수( { subject : 'math' } )  //이 경우 'math'를 return
    만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
    만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다 
   */

  type dataType = {
    subject: string | string[];
  };
  function homework2({ subject }: dataType): string | string[] {
    let result: string;
    if (typeof subject === 'string') {
      result = subject;
    } else if (typeof subject === 'object') {
      result = subject[subject.length - 1];
    } else {
      console.error('잘못된 데이터가 입력됐습니다.');
    }
    return result!;
  }

  console.log('--------------- #4 숙제 2 ---------------');

  let 철수쌤 = { subject: 'math' };
  let 영희쌤 = { subject: ['science', 'english'] };
  let 민수쌤 = { subject: ['science', 'art', 'korean'] };
  let 민수쌤2 = { hello: ['science', 'art', 'korean'] };
  console.log('철수쌤: ', homework2(철수쌤));
  console.log('영희쌤: ', homework2(영희쌤));
  console.log('민수쌤: ', homework2(민수쌤));
  //   console.log(homework2(민수쌤2)); //type error
  console.log('--------------- end of #4 숙제 2 ---------------\n\n');
}

// ## 5. 타입도 변수에 담아 쓰기 / type 키워드 써서 & readonly
{
  // alias 네이밍은 첫글자가 대문자(매우 권장, 암묵적 약속)
  type AnimalType = string | number | undefined;
  let animal: AnimalType = 123;

  type FamilyType = {
    name: string;
    age: number;
  };
  let family: FamilyType = {
    name: 'noh',
    age: 33,
  };

  //  오브젝트안의 내용 변경불가능 하게 설정
  type PhoneType = {
    // 수정 불가능하다고 설정
    readonly name: string;
    // 옵셔널 : 해당 키는 없을수도 있음, 즉 undefined값이 들어갈 수 있음(즉 number | undefined 와 같은 의미다)
    weight?: number;
  };

  let phone: PhoneType = { name: 'iphone' };
  //  valilla javascript에선 가능 하지만 type script에서 변경 불가능하게 설정
  // type error 발생
  //   phone.name = "galaxy";

  //   alias 와 union 섞어서 사용하기
  type Name = string;
  type Age = number;
  let person: Name | Age = 'noh';
  person = 33;

  //   object type 합치기(type extend)
  type PositionX = { x: number };
  type PositionY = { y: number };
  type NewType = PositionX & PositionY;
  let position: NewType = {
    x: 10,
    y: 20,
  };
}

// ## 6. Literal Types으로 const 처럼 사용하기
{
  // "kim" 만 할당할 수 있다.
  type NameType = 'kim';
  let name: NameType = 'kim';
  //   type error
  //   name = 'noh';

  //   union type과 섞기
  //   "noh" 와 "kim" 만 할당할 수 있다.
  type FamilyName = 'noh' | 'kim';
  let familyName: FamilyName = 'noh';
  familyName = 'kim';

  //   가위 바위 보
  type InputType = '가위' | '바위' | '보';
  function game(arg: InputType): InputType[] {
    return ['보'];
  }

  //   문제 해결 1
  var data: { name: 'kim' } = {
    name: 'kim',
  };

  function myFunction(a: 'kim'): 'kim' {
    return a;
  }
  // 해결 1
  //   data오브젝트를 만들때 name의 타입을 "kim"으로 지정해야한다.
  // 만약 data.name의 type을 지정하지 않는다면 data.name의 type은 string 이어서 type error가 발생한다.
  //   해결 2
  myFunction(data.name);

  //   해결 2
  //  data2의 오브젝트 내용을 as const로 지정
  //   할당된 값 자체가 타입이 돼버린다.
  // 즉 object 자료형을 완전히 묶어버린다
  var data2 = {
    name: 'kim',
  } as const;
  // type error 발생 안함
  myFunction(data2.name);
}

// ## 7. 함수와 methods에 type alias 지정하는 법
{
  // function type alias usage
  type MyFunctionType = (a: string) => number;
  let myfunction: MyFunctionType = function (a) {
    return 1;
  };

  // function in class(method) alias usage

  type MemberInformationType = {
    name: string;
    plusOne: (x: number) => number;
    changeName: () => void;
  };
  let memberInformation: MemberInformationType = {
    name: 'kim',
    plusOne(a) {
      return a + 1;
    },
    changeName: () => {
      console.log('hi');
    },
  };

  console.log('--------------- end of #6 숙제 1 ---------------');
  console.log(memberInformation.plusOne(1));
  console.log('--------------- end of #6 숙제 1 ---------------\n\n');

  /*
    (숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

    - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력할때 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

    - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력할때 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 

    - 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 

    물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. 
    */
  type CutType = (x: string) => string;

  let cutZero: CutType = function (x) {
    let result = x.replace(/^0+/, '');
    return result;
  };

  type ReamoveDashType = (x: string) => number;

  let removeDash: ReamoveDashType = function (x) {
    let result = x.replace(/-/g, '');
    return parseFloat(result);
  };

  let fixNumber = function (
    phoneNumber: string,
    cutZeroFunc: CutType,
    removeDashFunc: ReamoveDashType
  ) {
    let result: string | number;
    result = cutZeroFunc(phoneNumber);
    result = removeDashFunc(result);
    return result;
  };

  console.log('--------------- end of #6 숙제 2 ---------------');
  console.log(fixNumber('010-1111-2222', cutZero, removeDash));
  console.log('--------------- end of #6 숙제 2 ---------------\n\n');
}

// ## 8. 타입스크립트로 HTML 변경과 조작할 때 주의점
/*
{
  let title = document.querySelector('#title');
  //   narrowing 1
  if (title !== null) {
    title.innerHTML = '반가워용';
  }
  //   narrowing 2
  //   title은 Element클래스의 자식인가
  if (title instanceof Element) {
    title.innerHTML = '반가워용';
  }
  //   type assertion
  let title2 = document.querySelector('#title') as Element;
  title2.innerHTML = '반가워용';

  // narrowing 3
  let title3 = document.querySelector('#title');
  if (title3?.innerHTML) {
    title3.innerHTML = '반가워용';
  }

  let link = document.querySelector('.link');
  //   narrowing 4
  if (link instanceof HTMLAnchorElement) {
    link.href = 'http://kakao.com';
  }

  //   narrowing 5
  let button = document.querySelector('#button');
  if (button instanceof HTMLButtonElement) {
    button.addEventListener('click', () => {
      console.log('클릭됨?');
    });
  }

  // narrowing 6
  button?.addEventListener('click', () => {
    console.log('클릭됨?');
  });

  //   homework 1
  // (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
  let imgTag = document.querySelector('#image');
  if (imgTag instanceof HTMLImageElement) {
    imgTag.src = 'change.jpg';
  }

  // homework 2
  //   (숙제2) 바꾸고 싶은 html 요소가 많습니다.
  let linkList = document.querySelectorAll('.linkList');
  linkList.forEach(el => {
    if (el instanceof HTMLAnchorElement) {
      el.href = 'http://www.daum.net';
    }
  });
}
*/

// ## 10. prototype
console.log('--------------- #10 1 ---------------');
{
  class machine {
    constructor(public q: string, public w: string) {}
  }

  const newMachine = new machine('strike', 'snowball');
  console.log('newMachine', newMachine.q);

  //   protory에 자동으로 추가돼 있는 기능들
  const array = [4, 3, 1, 2];
  console.log(array.sort());

  const array2 = new Array(4, 3, 2);

  //   custom protorype
  //   ts 에러남 원래 protorype에 정의 되지 않아서 그럼 일단 무시
  // @ts-ignore
  Array.prototype.customFunc = () => {
    console.log('custom prototype is activate');
  };
  //   위에서 만든 custom prototype 사용법
  // @ts-ignore
  array2.customFunc();
}
console.log('--------------- end of #10 1 ---------------\n\n');

// ## 11. 클래스 생성시 타입 지정법
{
  console.log('--------------- #11 1 ---------------');
  class Person {
    constructor(public data: string) {}

    sayHi(name: string) {
      console.log('Hi ', name);
    }
  }
  let person1 = new Person('nohsangwoo');
  let person2 = new Person('kimjongran');

  console.log(person1);
  console.log(person2);
  person2.sayHi('nohsangwoo');
}
console.log('--------------- end of #11 1 ---------------\n\n');

// ## 12. Object에 interface를 사용하여 타입지정 하는법
{
  console.log('--------------- #12 ---------------\n\n');

  //   type Square = {
  //     color: string;
  //     width: number;
  //   };
  //   same this
  interface Square {
    color: string;
    width: number;
  }
  let square: Square = { color: 'red', width: 100 };

  //   extends 로 interface 상속받기
  interface Student {
    name: string;
  }
  interface Teacher extends Student {
    age: number;
  }

  let student: Student = { name: 'kim' };
  let teacher: Teacher = { name: 'kim', age: 20 };

  //    intersection(& 기호)로 extends와 비슷하게 사용하기
  type Animal = { name: string };
  type Cat = { age: number } & Animal;

  let mimi: Cat = { name: 'mimi', age: 6 };

  //   type 할당의 문제점
  //   interface는 아래와같은경우 바로 에러를 내뿜어준다
  /* 
   interface Animal2 {
    name: string;
  }
//   interface는 이부분에서 에러가 남
  interface Dog2 extends Animal2 {
    name: number;
  }
  */
  //  type할당은 바로 에러를 내뿜지 않고 적용이후 에러를 내뿜는다
  type Animal3 = {
    name: string;
  };
  type Dog3 = {
    name: number;
  } & Animal3;

  // 이부분에서 type에러남
  //   let 변수: Dog3 = { name: '멍멍' };

  //   interface가 좀더 유연하고 안전하기에 더 자주 사용된다고 한다

  //   homework 1

  // (숙제1) interface 이용해서 간단하게 타입을 만들어봅시다

  // 아래와 같은 선언과 할당에서 interface를 사용하여 타입을 지정해보기
  interface IProduct {
    brand: string;
    serialNumber: number;
    model: string[];
  }
  let product: IProduct = {
    brand: 'Samsung',
    serialNumber: 1360,
    model: ['TV', 'phone'],
  };

  //   homework 2
  // (숙제2) array 안에 object 여러개 존재할때 interface를 사용하여 타입 지정하기

  interface ICart {
    product: string;
    price: number;
  }

  let cart: ICart[] = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
  ];

  //   homework 3
  // (숙제3) 위에서 만든 타입을 extends 해봅시다.
  /*
    갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다. 
    { product : '청소기', price : 7000, card : false }
    위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
 */
  interface NewCart extends ICart {
    card: boolean;
  }
  let list: NewCart = { product: '청소기', price: 7000, card: false };

  //   homework 4
  // (숙제4) object 안에 함수를 2개 넣고 싶은데요
  interface ITest {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
  }
  let test: ITest = {
    plus: (a, b) => {
      console.log('plus function 1 activate!');
      return a + b;
    },

    minus: (a, b) => {
      console.log('minus function 2 activate!');
      return a - b;
    },
  };

  console.log('--------------- end of #12 ---------------\n\n');
}

//  part 2
// ## 1. rest parameter and destructuring할때 타입지정
{
  console.log('--------------- #1 ---------------\n\n');

  // rest parameter
  function func1(...a: number[]) {
    console.log(a);
  }
  func1(1, 2, 3, 4, 5);

  //   destructure
  let [variable1, variable2] = ['hi', 100];
  console.log(variable1);
  console.log(variable2);

  let { name: name, age: age } = { name: 'noh', age: 30 };

  type Obj = {
    name: string;
    age: number;
  };
  let obj = { name: 'noh', age: 30 };

  function destructureFunc({ name, age }: Obj): void {
    console.log(name, age);
  }
  destructureFunc(obj);

  //   homework1
  /*
        (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
        최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
        (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
        (조건2) Math.max() 사용금지 반복문이나 쓰셈 
    */
  function maximum(...rest: number[]): number {
    let result: number = rest[0];
    rest.forEach(el => {
      if (result < el) {
        result = el;
      }
    });
    return result;
  }
  console.log(maximum(3, 2, 1, 4, 3, 10, 7, 5, 8, 2));

  // homework 2
  /*
    (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
    함수( { user : 'kim', comment : [3,5,4], admin : false } )
   */
  type ObjContents = {
    user: string;
    comment: number[];
    admin: boolean;
  };
  function recieveObj(objContents) {
    return;
  }
  const objContents: ObjContents = {
    user: 'kim',
    comment: [3, 5, 4],
    admin: false,
  };
  recieveObj(objContents);

  //   homework3
  /*
    (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
    함수( [40, 'wine', false] )
    어떻게 코드를 짜야할까요?
    (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
    (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
    */
  type ArrayType = number | string | boolean;
  function recieveFunc([a, b, c]: ArrayType[]) {
    console.log(a, b, c);
  }
  let obj2 = [40, 'wine', false];
  recieveFunc(obj2);
}
console.log('--------------- end of #1 ---------------\n\n');

// ## 2. Narrowing 하는 방법 part2
console.log('--------------- #2 ---------------');

{
  // narrowing 1 example
  type Fish = { swim: string };
  type Bird = { fly: string };

  function narrowing1(animal: Fish | Bird): void {
    if ('swim' in animal) {
      // the way of narrowing for object 1
      console.log(animal);
    }
  }
  narrowing1({ swim: 'i can fly!' });

  // narrowing 2 example
  function narrowing2() {
    let date = new Date();
    if (date instanceof Date) {
      console.log('오늘의 날짜: ', date);
    }
  }
  narrowing2();

  // narrowing 3 example
  type Car = {
    //   비슷한 오브젝트가 많은경우 이렇게 literal type으로 구분하기
    model?: 4;
    wheel: '4개';
    color: string;
  };
  type Bike = {
    wheel: '2개';
    color: string;
  };
  function narrowing3(x: Car | Bike) {
    // type 중 wheel이 베타적으로 유니크한 속성이니,
    // 그것을 기준으로 narrowing을 진행한다
    if (x.wheel === '4개') {
      console.log("it' bike type and the color is", x.color);
    }
  }
  narrowing3({ wheel: '4개', color: 'black' });
}
console.log('--------------- end of #2 ---------------\n\n');

// ## 3. 'never type' used by the function
console.log('--------------- #3 ---------------');
{
  // never type은 return이 실행되지 않는 환경을 말한다.
  // return 이전에 에러를 던지던가
  function throwErrorFunction(): never {
    throw new Error();
  }

  // return 이전에 무한히 동작하는 기능이 있다던가
  function infiniteFunction(): never {
    while (true) {
      console.log('infinite activate!');
    }
  }
}
console.log('--------------- end of #3 ---------------\n\n');

// ## 4. public private
console.log('--------------- #4 ---------------');
{
  // public은 외부에서 읽기 수정 모든게 가능하다
  class publicUser {
    public name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  let PublicUser = new publicUser('nohsangwoo');
  console.log(PublicUser.name);
  PublicUser.name = 'kimjongran';
  console.log(PublicUser.name);

  // private는 함수 내부에서만 사용가능하다.
  class privateUser {
    private name: string = 'Sangwoo';
    private surname: string = 'Noh';
    constructor(name: string) {
      this.name = name;
    }

    public get value(): string {
      return this.surname + this.name;
    }
  }
  let PrivateUser = new privateUser('sangwoo');
  console.log(PrivateUser.value);
  // 읽기 쓰기 외부에서 사용 불가
  // console.log(PrivateUser.name);
  // PrivateUser.name = "jongran"

  // getter and setter 를 사용한 private 예시
  class userName {
    private name: string = 'john';
    private surname: string = 'smith';

    public get fullName(): string {
      return `${this.name} ${this.surname}`;
    }

    public set fullName(value: string) {
      [this.name, this.surname] = value.split(' ');
    }
  }

  let newUser = new userName();
  newUser.fullName = 'Sangwoo Noh';

  console.log(newUser.fullName);

  // 축약 버젼
  class shortCutUserName {
    constructor(private name: string, private surname: string) {}
  }
}
console.log('--------------- end of #4 ---------------\n\n');

//  ## 5. protected static
console.log('--------------- #5 ---------------');
{
  // protected는 extends에서도 사용가능하다.
  class User {
    protected x: number = 10;
  }
  class newUser extends User {
    public set setX(x: number) {
      this.x = x;
    }

    public get getX() {
      return this.x;
    }
    doThis() {
      this.x = 20;
    }
  }
  const user = new newUser();
  user.setX = 50;
  console.log(user.getX);

  // static 은 직접 접근하여 인스턴스하게 사용 가능하다.
  class staticUser {
    static x: number = 10;
  }
  class testUser extends staticUser {
    // testUser에선 extends한 staticUser의 static x에 접근 불가능하다.
    // this.x = 30;
  }
  console.log(staticUser.x);

  // static 예시
  class staticUser2 {
    static x: number = 10;
    // 내부에서 static 변수를 사용하고 싶을때
    pluse: number = staticUser2.x + 30;
  }
}
console.log('--------------- end of #5 ---------------\n\n');
