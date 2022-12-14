"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        "test_table",
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                createdAt: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.literal("NOW()"),
                    allowNull: false,
                },
                testString: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
            };
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.dropInterface("test_table");
    },
};
