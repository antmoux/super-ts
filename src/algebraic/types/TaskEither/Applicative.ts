import type { TaskEitherλ } from './TaskEither';
import Either from '@algebraic/types/Either';
import Task from '@algebraic/types/Task';
export { Right as of, Right, Left };

/**
 * TODO: Add comment
 */
const Right = <A = never, B = never>(p1: B): TaskEitherλ<A, B> =>
  Task.λ.of (Either.λ.of (p1));

/**
 * TODO: Add comment
 */
const Left = <A = never, B = never>(p1: A): TaskEitherλ<A, B> =>
  Task.λ.of (Either.λ.Left (p1));
