var compiler = require('../lib/compiler.js');

exports.test_plp_sngl = function (test) {
    var tokens = compiler.lexical('PLP');
    test.equal(1, tokens.length);
    test.equal('T_INSTRUCTION', tokens[0].type);
    var ast = compiler.syntax(tokens);
    test.equal(1, ast.length);
    test.equal('S_IMPLIED', ast[0].type);
    var code = compiler.semantic(ast);
    test.deepEqual(code, [0x28]);
    test.done();
};
