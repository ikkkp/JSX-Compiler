import { AST } from "./ast";
export declare namespace Transform {
    interface ITransformer {
        extractASTParserNode(node: AST.ASTNode): AST.ASTNode;
        transform2JSXElement(node: AST.ASTNode): JSXElement;
        createJSXElement(identifier: string, Attributes: JSXAttribute[], children: JSXElement[], ast: AST.ASTElementNode): JSXElement;
    }
    interface JSXElement extends Omit<AST.ASTElementNode, keyof AST.ASTNode> {
        identifier: string;
        Attributes: JSXAttribute[];
        children?: JSXElement[];
        value?: string;
    }
    interface JSXAttribute {
        key: string;
        value: string | boolean;
    }
    class Transfomer {
        createJSXElement(identifier: string, Attributes: JSXAttribute[], children: JSXElement[], ast: AST.ASTElementNode): JSXElement;
        transform2JSXElement(node: AST.ASTNode): JSXElement;
        extractASTParserNode(node: AST.ASTNode): AST.ASTNode;
    }
}
