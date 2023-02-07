import { Module } from '@nestjs/common';

import { ViewController } from './view.controller';

@Module({ providers: [], controllers: [ViewController] })
export class ViewModule {}
