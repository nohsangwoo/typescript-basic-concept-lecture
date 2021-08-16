var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// ## 1. 타입스크립트 기본 타입 정리 (primitive types)
{
    // 변수
    var name_1 = 'noh';
    // 배열
    var names = ['noh,kim'];
    // 오브젝트
    var family = {
        me: 'noh',
        mother: 'kim',
        father: 'noh',
    };
    //   오브젝트안의 모든 value type이 string 일때 지정방법
    var family2 = {
        me: 'noh',
        mother: 'kim',
        father: 'noh',
    };
}
// ## 2. 타입을 미리 정하기 애매할 때 (union type, any, unknown)
{
    // union type (다른 여러개의 타입도 할당될 수 있는 여지를 줌)
    var name_2 = 'nohsangwoo';
    name_2 = 100;
    //   서로 다른타입이 배열안에 포함되는 경우
    var names = ['noh', 'kim', 'noh', 3];
    // 객체안의 value type이 다른 타입도 할당 될 수 있는 여지를 줌
    var obj = { a: '123' };
    obj = { a: 123 };
    // any: 어떤 type이든 저장될 수 있다.
    var anyTypeVariable = ['123'];
    anyTypeVariable = 123;
    anyTypeVariable = [null];
    anyTypeVariable = { a: 123 };
    // unknown:  any와 매우 비슷한데 좀더 안전하게 사용가능
    //   ex)
    var myName = { name: 'nohsangwoo' };
    //   any로 지정된 타입은 어디든 걍 무시하고 할당 가능
    //   myName은 분명 오브젝트타입이 할당됐는데 string타입의 변수에 할당 가능하다.
    var testVariable = myName;
    //   but, unknown이라면?
    var myName2 = { name: 'nohsangwoo' };
    //   unknown으로 지정된 타입은 다른곳에 할당될때 자신에게 저장된 타입과 같은 타입이 아니라면 에러를 뿜어내준다
    //   let testVariable2: string = myName2;
    //   즉 자신에게 할당될수있는 변수만 무엇이든 허용해주는 타입이라 조금더 안전하다
}
// ## 3. 함수에 타입 지정하는 법 & void 타입
{
    // 함수에 타입 지정하는법
    function testFunction(x) {
        return x * 2;
    }
    // return 이 없는 함수에 반환 형식을 void 타입으로 지정하는법
    function functionThatReturnsVoidType() { }
}
// ##  4. 타입 확정하기 Narrowing & Assertion
{
    // Narrowing example1
    function question1(x) {
        if (typeof x === 'number') {
            console.log('4-1 문제 풀이 : ', x + 1, '\n\n');
        }
    }
    question1(3);
    // Narrowing example2
    function question2(x) {
        var array = [];
        if (typeof x === 'number') {
            array[0] = x;
        }
        console.log('4-2 문제 풀이 : ', array, '\n\n');
    }
    question2(3);
    // type Assertion example1
    function question3(x) {
        var array = [];
        array[0] = x;
        console.log('4-3 문제 풀이 : ', array, '\n\n');
    }
    question3(3);
    // as 문법은 내로잉 할때처럼 여러개의 타입을 할당받을수있는 유니온 타입일때 하나의 타입으로 확정하기위한 용도로 사용됨.
    // 어떤 타입이 틀어올지 100% 확신이 있을때 씀
    // 근데 as 문법쓰면 버그추적이 불가능할 확률이 높음 그래서 사용 권장하지 않고 if문법같은걸로 narrowing 권장
    // 숙제 - [1,2,"3","4"] 처럼 배열안의 type이 섞여있을때 number[] 타입으로 변환해주는 함수 만들기
    function homeWork1(arr) {
        var result = [];
        console.log('숙제1 변환 하기 전 : ', arr);
        arr.forEach(function (el) {
            if (typeof el === 'string') {
                result = __spreadArray(__spreadArray([], result), [Number(el)]);
            }
            else {
                result = __spreadArray(__spreadArray([], result), [Number(el)]);
            }
        });
        console.log('숙제1 변환 후: ', result);
    }
    console.log('--------------- #4 숙제 1 ---------------');
    var arr1 = [1, 2, 3, '4', '5', '6'];
    homeWork1(arr1);
    console.log('--------------- #4 end of 숙제 1 ---------------\n\n');
    function homework2(_a) {
        var subject = _a.subject;
        var result;
        if (typeof subject === 'string') {
            result = subject;
        }
        else if (typeof subject === 'object') {
            result = subject[subject.length - 1];
        }
        else {
            console.error('잘못된 데이터가 입력됐습니다.');
        }
        return result;
    }
    console.log('--------------- #4 숙제 2 ---------------');
    var 철수쌤 = { subject: 'math' };
    var 영희쌤 = { subject: ['science', 'english'] };
    var 민수쌤 = { subject: ['science', 'art', 'korean'] };
    var 민수쌤2 = { hello: ['science', 'art', 'korean'] };
    console.log('철수쌤: ', homework2(철수쌤));
    console.log('영희쌤: ', homework2(영희쌤));
    console.log('민수쌤: ', homework2(민수쌤));
    //   console.log(homework2(민수쌤2)); //type error
    console.log('--------------- end of #4 숙제 2 ---------------\n\n');
}
// ## 5. 타입도 변수에 담아 쓰기 / type 키워드 써서 & readonly
{
    var animal = 123;
    var family = {
        name: 'noh',
        age: 33,
    };
    var phone = { name: 'iphone' };
    var person = 'noh';
    person = 33;
    var position = {
        x: 10,
        y: 20,
    };
}
// ## 6. Literal Types으로 const 처럼 사용하기
{
    var name_3 = 'kim';
    var familyName = 'noh';
    familyName = 'kim';
    function game(arg) {
        return ['보'];
    }
    //   문제 해결 1
    var data = {
        name: 'kim',
    };
    function myFunction(a) {
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
    };
    // type error 발생 안함
    myFunction(data2.name);
}
// ## 7. 함수와 methods에 type alias 지정하는 법
{
    var myfunction = function (a) {
        return 1;
    };
    var memberInformation = {
        name: 'kim',
        plusOne: function (a) {
            return a + 1;
        },
        changeName: function () {
            console.log('hi');
        },
    };
    console.log('--------------- end of #6 숙제 1 ---------------');
    console.log(memberInformation.plusOne(1));
    console.log('--------------- end of #6 숙제 1 ---------------\n\n');
    var cutZero = function (x) {
        var result = x.replace(/^0+/, '');
        return result;
    };
    var removeDash = function (x) {
        var result = x.replace(/-/g, '');
        return parseFloat(result);
    };
    var fixNumber = function (phoneNumber, cutZeroFunc, removeDashFunc) {
        var result;
        result = cutZeroFunc(phoneNumber);
        result = removeDashFunc(result);
        return result;
    };
    console.log('--------------- end of #6 숙제 2 ---------------');
    console.log(fixNumber('010-1111-2222', cutZero, removeDash));
    console.log('--------------- end of #6 숙제 2 ---------------\n\n');
}
