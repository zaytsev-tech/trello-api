import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ColumnService } from '../entities/column/column.service';

@Injectable()
export class AuthorGuard implements CanActivate {
  constructor(private readonly columnService: ColumnService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const controllerName = context.getClass().name;
    const request = context.switchToHttp().getRequest();
    const { id } = request.params;

    let entity;

    switch (controllerName) {
      case 'ColumnController':
        entity = await this.columnService.getColumnById(id);
        if (!entity) {
          throw new BadRequestException('Column not found');
        }
        break;
      default:
        throw new NotFoundException('Something went wrong...');
    }

    const user = request.user;

    if (entity && user && entity.author_id === user.id) {
      return true;
    }
    return false;
  }
}
