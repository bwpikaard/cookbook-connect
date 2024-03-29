import {
    Column, Entity, ManyToOne,
    Relation,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import {Rating} from "./rating.entity";
import {User} from "./user.entity";

@Entity()
export class RatingReaction extends BaseEntity {
    @ManyToOne(() => Rating)
    rating: Relation<Rating>;

    @Column()
    ratingId: number;

    @ManyToOne(() => User)
    user: Relation<User>;

    @Column()
    name: string;

    @Column()
    liked: true;
}
