import {decoratorAsyncQueueConcurentMixinDefault} from './async-queue-concurrent-mixin-default-decorator';

describe('decoratorAsyncQueueConcurentMixinDefault', () => {
  it('Should decorate class with async method', async () => {
    const expectedValue = 'expectedValue';
    const expectedValue2 = 'expectedValue2';
    @decoratorAsyncQueueConcurentMixinDefault(100, 'testMethod', 'rivalMethod')
    class TestClass {
      async testMethod() {
        return await Promise.resolve(expectedValue);
      }
      async rivalMethod() {
        return await Promise.resolve(expectedValue2);
      }
    }
    const instance = new TestClass();
    await expect(instance.testMethod()).resolves.toBe(expectedValue);
  });
});
