import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  create(cat: CreateCatDto): Cat {
    this.cats.push(cat);
    return cat;
  }

  findOne(id: number): Cat {
    return this.cats[id];
  }

  findAll(): Cat[] {
    return this.cats;
  }

  removeOne(id: number): string {
    this.cats = this.cats.splice(id, 1)
    return 'Delete success'
  }
}
