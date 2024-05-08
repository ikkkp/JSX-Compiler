export interface ITokenizerConstructor {
    new (input: string): ITokenizer;
}
export interface ITokenizer {
    tokens: Token[];
    currentToken: Token | null;
    start: IStateExcutor;
    number: IStateExcutor;
    emit: (token: Token) => void;
}
export type TokenizerParmas = string;
export interface Token {
    type: Symbol;
    value: string;
}
export type IStateExcutor = (char: string) => IStateExcutor;
