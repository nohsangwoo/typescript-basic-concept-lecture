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

  function question1(x: string | number) {
    if (typeof x === 'number') {
      console.log('문제 풀이 1', x + 1);
    }
  }
  question1(3);
}
