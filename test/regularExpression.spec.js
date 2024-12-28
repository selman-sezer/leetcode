const assert  = require('assert');
const isMatch = require('../10. Regular Expression Matching/reg_exp');
const { strictEqual } = require('assert');

describe("Regular Expression Matching tests", ()=>{
    it('aaa aaa=> true', ()=>{
        assert.strictEqual(isMatch('aaa', 'aaa'), true);
    });

    it('aba aaa => false', ()=>{
        assert.strictEqual(isMatch('aba', 'aaa'), false);
    });

    it('baa aaa => false', ()=>{
        assert.strictEqual(isMatch('baa', 'aaa'), false);
    });

    it('aa aaa => false', ()=>{
        assert.strictEqual(isMatch('aa', 'aaa'), false);
    });




    it('kkl k.l => true', ()=>{
        assert.strictEqual(isMatch('kkl', 'k.l'), true);
    });

    it('kml k.l  => true', ()=>{
        assert.strictEqual(isMatch( 'kml', 'k.l'), true);
    });
    it('kll .ll => true', ()=>{
        assert.strictEqual(isMatch( 'kll', '.ll'), true);
    });

    it('abc ab. => true', ()=>{
        assert.strictEqual(isMatch( 'abc', 'ab.'), true);
    });

    it('abcd ab.. => true', ()=>{
        assert.strictEqual(isMatch( 'abcd', 'ab..'), true);
    });

    it('abcd .... => true', ()=>{
        assert.strictEqual(isMatch( 'abcd', '....'), true);
    });

    it('abc abc* => true', ()=>{
        assert.strictEqual(isMatch('abc', 'abc*'), true);
    });

    it('ab abc* => true', ()=>{
        assert.strictEqual(isMatch('ab','abc*'), true, `ab - abc*`);
    });

    it('ab ab*c* => true', ()=>{
        assert.strictEqual(isMatch('ab','ab*c*'), true, `ab - abc*`);
    });

    it('a ab*c* => true', ()=>{
        assert.strictEqual(isMatch('a','ab*c*'), true, `ab - abc*`);
    });

    it('a .b*c* => true', ()=>{
        assert.strictEqual(isMatch('a','.b*c*'), true, `ab - abc*`);
    });

    it('ac .b*c* => true', ()=>{
        assert.strictEqual(isMatch('ac','.b*c*'), true, `ab - abc*`);
    });

    it('adsfsdfsdgdfbfdgdfgdfg a.*b.* => true', ()=>{
        assert.strictEqual(isMatch('adsfsdfsdgdfbfdgdfgdfg','a.*b.*'), true);
    });

    it('ab a.*b.* => true', ()=>{
        assert.strictEqual(isMatch('ab','a.*b.*'), true);
    });

    it('ab a.*b.* => true', ()=>{
        assert.strictEqual(isMatch('ab','a.*b.*'), true, `ab - abc*`);
    });

    it('acada a.*b.* => true', ()=>{
        assert.strictEqual(isMatch('acada','a.*b.*'), false);
    });

    it('abbbbbcccc .b*c* => true', ()=>{
        assert.strictEqual(isMatch('abbbbbcccc','.b*c*'), true, `ab - abc*`);
    });


    it('abbbb .b*c* => true', ()=>{
        assert.strictEqual(isMatch('abbbb','.b*c*'), true);
    });


    it('accccc .b*c* => true', ()=>{
        assert.strictEqual(isMatch('accccc','.b*c*'), true, `ab - abc*`);
    });
    it('abccccc abc* => true', ()=>{
        assert.strictEqual(isMatch('abccccc', 'abc*'), true);
    });

    it('abc abc* => true', ()=>{
        assert.strictEqual(isMatch('abc', 'abc*'), true);
    });

    it('abcd abc*d => true', ()=>{
        assert.strictEqual(isMatch('abcd', 'abc*d'), true);
    });

    it('abd abc*d=> true', ()=>{
        assert.strictEqual(isMatch( 'abd', 'abc*d'), true);
    });


    it('de c*de=> true', ()=>{
        assert.strictEqual(isMatch( 'de', 'c*de'), true);
    });

    it('cde c*de => true', ()=>{
        assert.strictEqual(isMatch( 'cde', 'c*de'), true);
    });

    it('ccccde c*de => true', ()=>{
        assert.strictEqual(isMatch( 'ccccde', 'c*de'), true);
    });


    it('kkkkkklaa  .*.aa => true', ()=>{
        assert.strictEqual(isMatch('kkkkkklaa', '.*.aa'), true);
    });

    it('abcd  d* => false', ()=>{
        assert.strictEqual(isMatch('abcd', 'd*'), false);
    });

    it('kkkkkklaa  .*.aa=> true', ()=>{
        assert.strictEqual(isMatch('kkkkkklaa', '.*.aa'), true);
    });

    it('mclaa .*.aa => true', ()=>{
        assert.strictEqual(isMatch('mclaa', '.*.aa'), true);
    });

    it('ab  .*c false', ()=>{
        assert.strictEqual(isMatch('ab', '.*c'), false);
    });


    it('aab  c*a*b false', ()=>{
        assert.strictEqual(isMatch('aab', "c*a*b"), true);
    });
    

    
})