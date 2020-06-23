export interface ITest {
  foo: string
}

export default function testFun (test: ITest) {
  console.log('Value: ', test.foo)
}