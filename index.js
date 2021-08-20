var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    var machine = /** @class */ (function () {
        function machine(q, w) {
            this.q = q;
            this.w = w;
        }
        return machine;
    }());
    var newMachine = new machine('strike', 'snowball');
    console.log('newMachine', newMachine.q);
    //   protory에 자동으로 추가돼 있는 기능들
    var array = [4, 3, 1, 2];
    console.log(array.sort());
    var array2 = new Array(4, 3, 2);
    //   custom protorype
    //   ts 에러남 원래 protorype에 정의 되지 않아서 그럼 일단 무시
    // @ts-ignore
    Array.prototype.customFunc = function () {
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
    var Person = /** @class */ (function () {
        function Person(data) {
            this.data = data;
        }
        Person.prototype.sayHi = function (name) {
            console.log('Hi ', name);
        };
        return Person;
    }());
    var person1 = new Person('nohsangwoo');
    var person2 = new Person('kimjongran');
    console.log(person1);
    console.log(person2);
    person2.sayHi('nohsangwoo');
}
console.log('--------------- end of #11 1 ---------------\n\n');
// ## 12. Object에 interface를 사용하여 타입지정 하는법
{
    console.log('--------------- #12 ---------------\n\n');
    var square = { color: 'red', width: 100 };
    var student = { name: 'kim' };
    var teacher = { name: 'kim', age: 20 };
    var mimi = { name: 'mimi', age: 6 };
    var product = {
        brand: 'Samsung',
        serialNumber: 1360,
        model: ['TV', 'phone'],
    };
    var cart = [
        { product: '청소기', price: 7000 },
        { product: '삼다수', price: 800 },
    ];
    var list = { product: '청소기', price: 7000, card: false };
    var test = {
        plus: function (a, b) {
            console.log('plus function 1 activate!');
            return a + b;
        },
        minus: function (a, b) {
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
    function func1() {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        console.log(a);
    }
    func1(1, 2, 3, 4, 5);
    //   destructure
    var _a = ['hi', 100], variable1 = _a[0], variable2 = _a[1];
    console.log(variable1);
    console.log(variable2);
    var _b = { name: 'noh', age: 30 }, name_4 = _b.name, age = _b.age;
    var obj = { name: 'noh', age: 30 };
    function destructureFunc(_a) {
        var name = _a.name, age = _a.age;
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
    function maximum() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var result = rest[0];
        rest.forEach(function (el) {
            if (result < el) {
                result = el;
            }
        });
        return result;
    }
    console.log(maximum(3, 2, 1, 4, 3, 10, 7, 5, 8, 2));
    function recieveObj(objContents) {
        return;
    }
    var objContents = {
        user: 'kim',
        comment: [3, 5, 4],
        admin: false,
    };
    recieveObj(objContents);
    function recieveFunc(_a) {
        var a = _a[0], b = _a[1], c = _a[2];
        console.log(a, b, c);
    }
    var obj2 = [40, 'wine', false];
    recieveFunc(obj2);
}
console.log('--------------- end of #1 ---------------\n\n');
// ## 2. Narrowing 하는 방법 part2
console.log('--------------- #2 ---------------');
{
    function narrowing1(animal) {
        if ('swim' in animal) {
            // the way of narrowing for object 1
            console.log(animal);
        }
    }
    narrowing1({ swim: 'i can fly!' });
    // narrowing 2 example
    function narrowing2() {
        var date = new Date();
        if (date instanceof Date) {
            console.log('오늘의 날짜: ', date);
        }
    }
    narrowing2();
    function narrowing3(x) {
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
    function throwErrorFunction() {
        throw new Error();
    }
    // return 이전에 무한히 동작하는 기능이 있다던가
    function infiniteFunction() {
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
    var publicUser = /** @class */ (function () {
        function publicUser(name) {
            this.name = name;
        }
        return publicUser;
    }());
    var PublicUser = new publicUser('nohsangwoo');
    console.log(PublicUser.name);
    PublicUser.name = 'kimjongran';
    console.log(PublicUser.name);
    // private는 함수 내부에서만 사용가능하다.
    var privateUser = /** @class */ (function () {
        function privateUser(name) {
            this.name = 'Sangwoo';
            this.surname = 'Noh';
            this.name = name;
        }
        Object.defineProperty(privateUser.prototype, "value", {
            get: function () {
                return this.surname + this.name;
            },
            enumerable: false,
            configurable: true
        });
        return privateUser;
    }());
    var PrivateUser = new privateUser('sangwoo');
    console.log(PrivateUser.value);
    // 읽기 쓰기 외부에서 사용 불가
    // console.log(PrivateUser.name);
    // PrivateUser.name = "jongran"
    // getter and setter 를 사용한 private 예시
    var userName = /** @class */ (function () {
        function userName() {
            this.name = 'john';
            this.surname = 'smith';
        }
        Object.defineProperty(userName.prototype, "fullName", {
            get: function () {
                return this.name + " " + this.surname;
            },
            set: function (value) {
                var _a;
                _a = value.split(' '), this.name = _a[0], this.surname = _a[1];
            },
            enumerable: false,
            configurable: true
        });
        return userName;
    }());
    var newUser = new userName();
    newUser.fullName = 'Sangwoo Noh';
    console.log(newUser.fullName);
    // 축약 버젼
    var shortCutUserName = /** @class */ (function () {
        function shortCutUserName(name, surname) {
            this.name = name;
            this.surname = surname;
        }
        return shortCutUserName;
    }());
}
console.log('--------------- end of #4 ---------------\n\n');
//  ## 5. protected static
console.log('--------------- #5 ---------------');
{
    // protected는 extends에서도 사용가능하다.
    var User = /** @class */ (function () {
        function User() {
            this.x = 10;
        }
        return User;
    }());
    var newUser = /** @class */ (function (_super) {
        __extends(newUser, _super);
        function newUser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(newUser.prototype, "setX", {
            set: function (x) {
                this.x = x;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(newUser.prototype, "getX", {
            get: function () {
                return this.x;
            },
            enumerable: false,
            configurable: true
        });
        newUser.prototype.doThis = function () {
            this.x = 20;
        };
        return newUser;
    }(User));
    var user = new newUser();
    user.setX = 50;
    console.log(user.getX);
    // static 은 직접 접근하여 인스턴스하게 사용 가능하다.
    var staticUser = /** @class */ (function () {
        function staticUser() {
        }
        staticUser.x = 10;
        return staticUser;
    }());
    var testUser = /** @class */ (function (_super) {
        __extends(testUser, _super);
        function testUser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return testUser;
    }(staticUser));
    console.log(staticUser.x);
    // static 예시
    var staticUser2 = /** @class */ (function () {
        function staticUser2() {
            // 내부에서 static 변수를 사용하고 싶을때
            this.pluse = staticUser2.x + 30;
        }
        staticUser2.x = 10;
        return staticUser2;
    }());
    /*
    1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만
    2. private static x는 class 내부에서만 수정 가능하다
    3. public static y는 class 내부 외부 상관없이 수정 가능하다
    */
    // homework1
    var Users_1 = /** @class */ (function () {
        function Users() {
        }
        Users.addOne = function (x) {
            Users.x += x;
        };
        Object.defineProperty(Users.prototype, "getX", {
            get: function () {
                // 같은 static 속성이 아니라면 원본 객체로 접근해야함
                return Users.x;
            },
            enumerable: false,
            configurable: true
        });
        Users.printX = function () {
            // 같은 static이면 this로 끌어올수 있다.
            console.log(this.x);
        };
        Users.x = 10;
        Users.y = 20;
        return Users;
    }());
    /*
    User.addOne(3) //이렇게 하면 x가 3 더해져야함
    User.addOne(4) //이렇게 하면 x가 4 더해져야함
    */
    Users_1.addOne(3);
    Users_1.printX();
}
console.log('--------------- end of #5 ---------------\n\n');
