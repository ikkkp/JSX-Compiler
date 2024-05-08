import { Transform } from "./transform";
export declare namespace CodeGenerator {
    interface IGenerate {
        generate(tree: Transform.JSXElement): string;
    }
    class Generator implements IGenerate {
        code: string;
        generate(this: Generator & {
            [props: string]: any;
        }, tree: Transform.JSXElement): string;
        Program(node: Transform.JSXElement): void;
        emitLineln(chars: string): void;
        emitLine(chars: string): void;
    }
    class ShareImageGenerator extends Generator {
        getTextName: () => string;
        getImageName: () => string;
        ShareImage(node: Transform.JSXElement): void;
        Text(node: Transform.JSXElement): void;
        Image(node: Transform.JSXElement): void;
        resolveLayout(attr: Transform.JSXAttribute, name: string): void;
    }
    class JSXGenerator extends Generator {
        generate(this: JSXGenerator & {
            [props: string]: any;
        }, tree: Transform.JSXElement): string;
        Text(node: Transform.JSXElement): void;
        Element(node: Transform.JSXElement): void;
    }
}
