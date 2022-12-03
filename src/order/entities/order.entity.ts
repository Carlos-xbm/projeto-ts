import { Product } from '../../product/entities/product.entity';
import { Table } from '../../table/entities/table.entity';
import { User } from '../../user/entities/user.entity';

export class Order {
    id?: string;
    user?: User;
    table?: Table;
    createdAt?: Date;
    updatedAt?: Date;
    products?: Product[];
}
