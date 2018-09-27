let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;
var postdata=require("D:\\mochaAPI\\postData.js");
let fs = require('fs');



chai.use(chaiHttp);
describe('/get details', function() {

    it('it should GET all the data', function(done){
        this.timeout(10000);
    chai.request("http://192.168.3.155:8080")
        .get('/rest/api/2/issue/createmeta?projectKeys=SCRUM')
        .set( 'Authorization','Basic dmVua2F0YXNhaS5hbm5hbTpzZWNvbmRAMTIz')
        .set( 'Content-Type','application/json')
        .end(function(err,res,body){
            res.should.have.status(200);
            console.log(res.body);
            var json=JSON.stringify(res.body);
            console.log(json);
            done();
        })
});

});