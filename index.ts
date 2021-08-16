// 타입스크립트 기본 타입 정리 (primitive types)
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
