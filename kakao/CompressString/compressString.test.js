// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)


const {solution} = require('./index');

describe('compress string', () => {
    it("should return 1 when a given string's length is equal to 1",()=>{
        expect(solution('a')).toBe(1);
    });
    it("should return a given string's length if no duplicated chars",()=>{
        expect(solution('a')).toBe(1);
    });
    test("aabbaccc",()=>{
        expect(solution('aabbaccc')).toBe(7);
    });
    test("ababcdcdababcdcd",()=>{
        expect(solution('ababcdcdababcdcd')).toBe(9);
    });
    test("abcabcdede",()=>{
        expect(solution('abcabcdede')).toBe(8);
    });
    test("abcabcabcabcdededededede",()=>{
        expect(solution('abcabcabcabcdededededede')).toBe(14);

    });

    test("xababcdcdababcdcd",()=>{
        expect(solution('xababcdcdababcdcd')).toBe(17);

    });
});