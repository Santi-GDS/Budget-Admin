const Operations = (sequelize, DataTypes) => {
    const alias = 'Operations';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        concept: {
            type: DataTypes.STRING
        },
		amount: {
			type: DataTypes.INTEGER,
        },
		type: {
			type: DataTypes.STRING,
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        deleted_at: {
            type: DataTypes.DATE
        }
    };

    const config = {
        tableName:'operations',
        timestamps: false
    }
    
	const OperationModel = sequelize.define(alias, cols, config);
    return OperationModel;

}

module.exports = Operations;