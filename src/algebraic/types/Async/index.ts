import type { ApplicativeOf1 } from '@algebraic/defs/Applicative';
import type { ApplyOf1 } from '@algebraic/defs/Apply';
import type { FunctorOf1 } from '@algebraic/defs/Functor';
import { of } from './Applicative';
import { ap } from './Apply';
import { map, mapU } from './Functor';
import { Async$λ } from './Async';
import { ChainOf1 } from '@algebraic/defs/Chain';
import { chain, chainU } from './Chain';
import { bindTo, bindOf } from './Functions';

type AsyncModule = ApplicativeOf1<Async$λ> &
  FunctorOf1<Async$λ> &
  ChainOf1<Async$λ> &
  ApplyOf1<Async$λ> & {
    λ: {
      bindTo: typeof bindTo;
      bindOf: typeof bindOf;
    };
  }

const AsyncModule: AsyncModule = {
  λ: {
    kind: Async$λ,
    ap,
    of,
    map,
    bindTo,
    bindOf,
    chain
  },
  λU: {
    kind: Async$λ,
    map: mapU,
    chain: chainU
  },
};

export default AsyncModule;
