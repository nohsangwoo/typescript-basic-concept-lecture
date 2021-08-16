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
  function homework2({ subject }: dataType) {
    let result: string;
    if (typeof subject === 'string') {
      result = subject;
    } else if (typeof subject === 'object') {
      result = subject[subject.length - 1];
    } else {
      console.error('잘못된 데이터가 입력됐습니다.');
    }
    return result;
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
