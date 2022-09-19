import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    // 获取自定义异常描述信息
    const exceptionRes: any = exception.getResponse();
    const { message } = exceptionRes;

    response.status(status).json({
      code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}
