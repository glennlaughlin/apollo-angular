import { Provider } from '@angular/core';
import { ApolloClientOptions } from '@apollo/client/core';
import { Apollo } from './apollo';
import { APOLLO_FLAGS, APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS } from './tokens';
import { Flags, NamedOptions } from './types';

export function provideApollo<TCacheShape = any>(
  optionsFactory: () => ApolloClientOptions<TCacheShape>,
  flags: Flags = {},
): Provider {
  return [
    Apollo,
    {
      provide: APOLLO_OPTIONS,
      useFactory: optionsFactory,
    },
    {
      provide: APOLLO_FLAGS,
      useValue: flags,
    },
  ];
}

export function provideNamedApollo(
  optionsFactory: () => NamedOptions,
  flags: Flags = {},
): Provider {
  return [
    Apollo,
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: optionsFactory,
    },
    {
      provide: APOLLO_FLAGS,
      useValue: flags,
    },
  ];
}
