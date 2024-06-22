import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CommentService } from './comment.service';
import { GetCommentsDto } from './dto/GetComments.dto';
import { Request } from 'express';
import { CreateCommentDto } from './dto/CreateComment.dto';
import { User } from '../user/user.entity';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('/')
  getComments(@Body() body: GetCommentsDto) {
    return this.commentService.getCommentsByCardId(body.cardId);
  }

  @Post('/')
  createComment(@Req() req: Request, @Body() body: CreateCommentDto) {
    const { cardId, text } = body;
    const userId = (req.user as User).id;

    return this.commentService.createComment(userId, cardId, text);
  }
}
