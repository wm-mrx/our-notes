"use strict";
const sequelize = require("sequelize");
exports.attributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    userId: { type: sequelize.BIGINT, allowNull: false, field: 'user_id' },
    name: { type: sequelize.STRING, allowNull: false },
    path: { type: sequelize.STRING, allowNull: false },
    feed: { type: sequelize.STRING, allowNull: false },
    email: { type: sequelize.STRING, allowNull: false },
    registeredDate: { type: sequelize.DATE, allowNull: false, field: 'registered_date' }
};
exports.options = {
    freezeTableName: true,
    tableName: 'profiles',
    timestamps: false
};
//# sourceMappingURL=Profile.js.map