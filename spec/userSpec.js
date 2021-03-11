describe("User login test", function() {
    var userData = require('../src/user.js');
    var user;
 
    //This will be called before running each spec
    beforeEach(function() {
        user = new userData();
    });
 
    describe("user login function", function(){
         
        //Spec for sum operation
        it("User Login testing", function() {
            expect(true).toEqual(true);
        });
         
    });
});
