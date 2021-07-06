import {MaybeError, timeout} from '@pashoo2/utils';

import {ConcurrentAsyncQueue} from '../../async-queue-concurrent';
import {IAsyncQueueConcurrentWithAutoExecution} from './async-queue-concurrent-with-auto-execution.types';

export class ConcurrentAsyncQueueWithAutoExecution<
    T = void,
    E extends MaybeError = void
  >
  extends ConcurrentAsyncQueue<T, E>
  implements IAsyncQueueConcurrentWithAutoExecution<T, E>
{
  public async executeQueued<TE extends T = T>(
    jobCreator: () => Promise<TE>,
    timeoutMs = 1000,
    jobName?: string
  ): Promise<TE> {
    const currentJob = await this.wait();
    const thisJobName = jobName || jobCreator.name;
    let jobResult: TE | undefined = undefined;
    let isError = false;

    try {
      jobResult = (await Promise.race([
        jobCreator(),
        timeout(timeoutMs, new Error(`Job ${thisJobName} timed-out`)),
      ])) as TE;
      isError = false;
    } catch (err) {
      console.error(err);
      isError = true;
      throw new Error(`Job ${thisJobName} failed: ${err.message}`);
    } finally {
      if (!isError) {
        currentJob.done(jobResult as TE);
      }
    }
    return jobResult;
  }
}
