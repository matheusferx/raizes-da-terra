'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'stripe_price_id', {
      type: Sequelize.STRING,
      allowNull: true, // ou false se quiser obrigatório
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('products', 'stripe_price_id');
  }
};
