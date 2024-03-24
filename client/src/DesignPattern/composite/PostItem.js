import { Item } from '../../components'
class PostItem {
    constructor(post = {}) {
        this.post = post;
    }

    displayInfo() {
        const { id, address, attributes, description, images, star, title, user } = this.post;
        return (
            <Item
                key={id}
                address={address}
                attributes={attributes}
                description={description}
                images={JSON.parse(images?.image)}
                star={+star}
                title={title}
                user={user}
                id={id}
            />
        );
    }
}
export default PostItem
 