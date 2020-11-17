import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO, LoginDTO } from '../models/user.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  @ApiOperation({ summary: 'Register new user' })
  @ApiResponse({ status: 200, description: 'User was created.' })
  register(@Body(ValidationPipe) credentials: RegisterDTO) {
    return this.authService.register(credentials);
  }

  @Post('/login')
  @ApiResponse({
    status: 200,
    description: 'User login to sistem',
    type: LoginDTO,
  })
  login(@Body(ValidationPipe) credentials: LoginDTO) {
    return this.authService.login(credentials);
  }
}