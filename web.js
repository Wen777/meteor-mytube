if (Meteor.isClient){
  
  Template.HiMeteor.var123 = "1234"

  Template.HiMeteor.helpers({
    helloString: "1234helloString",
    helloDate: new Date,
    helloNumeric: 123456.123,
    helloArray: ["a","b","c", {a:1234}],
    helloObject: {a:123,b:234},
    
    helloFn: function(xx){
      return xx+12345
    }x

  });

  console.log("Hello!");

};

