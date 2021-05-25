// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)


const {solution} = require('./index');
 
describe('find a kth largest element in a given priority list', () => {
    
    it("should return kth order number when given elements are all same number",()=>{
        expect(solution([1,1,1,1],1)).toBe(2);
    });
 
    test("[2, 1, 3, 2],2",()=>{
        expect(solution([2, 1, 3, 2],2)).toBe(1);
    });
    test("[1, 1, 9, 1, 1, 1],0",()=>{
        expect(solution([1, 1, 9, 1, 1, 1],0)).toBe(5);
    });
    test("	[1], 0",()=>{
        expect(solution([1],0)).toBe(1);
    });
    test("	[2, 2, 2, 3, 3], 3",()=>{
        expect(solution([2, 2, 2, 3, 3], 3)).toBe(1);

    });

});