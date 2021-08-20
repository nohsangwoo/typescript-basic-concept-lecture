export type Name = string;
export var age = 20;

// typescript type 숨기는 방법
// 요즘엔 안쓰임 타입이름이 겹치는 경우 namespace로 감싸서 해결하는 방식임
namespace someNameSpace {
  export type NameType = string;
}

namespace someNameSpace2 {
  // namespace로 감싸니깐 타입명이 겹쳐도 상관 없다.
  export type NameType = string;
}

// module도 같은 의미임
module someNameSpace3 {
  export type NameType = string;
}
