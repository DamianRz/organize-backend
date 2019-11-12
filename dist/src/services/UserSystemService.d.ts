import ResultObject from '../models/ResultObject';
export default class UserSystemService {
    private repository;
    private errorsList;
    signIn(email: string, password: string): Promise<ResultObject>;
    signUp(userData: any): Promise<ResultObject>;
    save(userData: any): Promise<ResultObject>;
    delete(id: number): Promise<ResultObject>;
    generateToken(data: any): Promise<{
        statusCode: number;
        value: any;
    }>;
}
