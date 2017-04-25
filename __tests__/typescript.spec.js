import * as tt from 'typescript-definition-tester';

const compilerOptions = {
    target: 'es6',
    jsx: 'react',
    experimentalDecorators: true
};

describe('typescript definitions', () => {
    it('should compile against index.d.ts', done => {
        tt.compileDirectory(
            __dirname + '/typescript',
            fileName => fileName.match(/\.tsx?$/),
            compilerOptions,
            () => done()
        );
    });
});
