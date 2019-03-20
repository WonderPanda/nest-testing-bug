import { Inject, Module } from '@nestjs/common';

@Module({})
export class BugModule {
  constructor(@Inject('BugProvider') private readonly bugProvider: string) {}
}
