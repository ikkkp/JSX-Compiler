import { AST } from "./ast";
import { JSXTokenizer } from "./tokenizer";
import { Transform } from "./transform";
export declare namespace JSXCompiler {
    interface compileFileOptions {
        path: string;
    }
    interface ICompiler {
        tokenizer: JSXTokenizer.ITokenizer;
        astParser: AST.IParse;
        transformer: Transform.Transfomer;
        tokens: JSXTokenizer.IToken[];
        ast?: AST.ASTNode;
        compile(template: string): AST.ASTNode;
        compileFile(options: compileFileOptions): AST.ASTNode;
    }
    class Compiler implements ICompiler {
        tokenizer: JSXTokenizer.ITokenizer;
        astParser: AST.IParse;
        transformer: Transform.Transfomer;
        tokens: JSXTokenizer.IToken[];
        ast?: AST.ASTNode;
        jsxElement?: Transform.JSXElement;
        compile(template: string): AST.ASTNode;
        compileFile(options: compileFileOptions): AST.ASTNode;
    }
}
