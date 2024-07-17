
import jwt, { Secret } from 'jsonwebtoken';

import {UserModel} from '../models/UserModel';

const JWT_SECRET = process.env.JWT_SECRET as Secret;

interface User {
    _id: string; 
    email: string;
    checkPassword(password: string): Promise<boolean>;
  }

export class AuthService {
  static async findUserByEmail(email: string): Promise<User | null> {
    try {
      return await UserModel.findOne({ email });
    } catch (error) {
      throw new Error(`Erro ao encontrar usuário: ${error}`);
    }
  }

  static async validatePassword(email: string, password: string): Promise<boolean> {
    try {
      const user = await this.findUserByEmail(email);
      if (!user) {
        throw new Error('Usuário não encontrado');
      }
      return await user.checkPassword(password);
    } catch (error) {
      throw new Error(`Erro na validação da senha: ${error}`);
    }
  }

  static generateToken(user: User): string {
    try {
      return jwt.sign({ id: user._id }, JWT_SECRET!, { expiresIn: '7d' });
    } catch (error) {
      throw new Error(`Erro ao gerar token: ${error}`);
    }
  }
}

