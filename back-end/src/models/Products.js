const { Model, DataTypes } = require('sequelize');

// Define um Products model que representa os produtos no banco de dados
// Este modelo inclui campos como nome, preço, descrição, imagem, categoria, estoque e stripe_price_id
class Products extends Model {
    static init( sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
                price: DataTypes.FLOAT,
                description: DataTypes.STRING,
                image: DataTypes.STRING,
                category: DataTypes.STRING,
                stock: DataTypes.INTEGER,
                stripe_price_id: DataTypes.STRING,
            },
            {
                sequelize,
                modelName: 'Products', // Nome do model em maiúsculo (convenção)
                tableName: 'products', // Nome real da tabela no banco
                timestamps: true,
            }
        );
    }
}

module.exports = Products;