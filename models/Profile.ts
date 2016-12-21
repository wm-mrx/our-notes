import * as sequelize from 'sequelize';
import { Instance } from './Instance';
import { Model } from './Model';

export interface IProfile {
    id: number;
    userId: number;
    user?: any;
    name: string;
    path: string;
    feed: string;
    email: string;
    registeredDate: Date;
}

export var attributes: sequelize.DefineAttributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    userId: { type: sequelize.BIGINT, allowNull: false, field: 'user_id' },
    name: { type: sequelize.STRING, allowNull: false },
    path: { type: sequelize.STRING, allowNull: false },
    feed: { type: sequelize.STRING, allowNull: false },
    email: { type: sequelize.STRING, allowNull: false },
    registeredDate: { type: sequelize.DATE, allowNull: false, field: 'registered_date' }
}

export var options: sequelize.DefineOptions<Instance<IProfile>> = {
    freezeTableName: true,
    tableName: 'profiles',
    timestamps: false
}