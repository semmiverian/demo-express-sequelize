'use strict';

const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    
   let result = [];
   let row = {};
   let tempEmail = [];
   let x = 0;
   while(x < 18)
   {
       row.name = faker.company.companyName();
       let uniqueEmail = faker.internet.email(row.name);
       for(let i = 0; i < tempEmail.length; i++){
          if(tempEmail[i] !== uniqueEmail){
            tempEmail.push(uniqueEmail);
            break;
          }else{
            uniqueEmail = faker.internet.email(name);
          }
       }

      
       row.email = uniqueEmail;
       row.phone = faker.phone.phoneNumber();
       row.address = faker.address.streetAddress();
       row.createdAt = new Date();
       row.updatedAt = new Date();

       //row.website = faker.internet.domainName(row.name);
       //row.bankAccount = faker.finance.account();
       result.push(row);
       row={}
       x++;
      
   }

    return queryInterface.bulkInsert("Companies",result,{});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
