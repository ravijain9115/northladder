import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "products",
})
export class Products extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  productName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  productDescription!: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0
  })
  price!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category!: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0
  })
  stockQuantity!: number;

  @Column({
    type: DataType.DATE,
    defaultValue: new Date(),
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: new Date(),
  })
  updatedAt!: Date;
}

// "id": "string", // Unique identifier for the product
// "productName": "string", // Name of the product
// "productDescription": "string", // Description of the product
// "price": "number", // Price of the product
// "category": "string", // Category of the product
// "stockQuantity": "number", // Quantity of the product in stock
// "createdAt": "Date", // Timestamp when the product was created
// "updatedAt": "Date" // Timestamp when the product was last updated
