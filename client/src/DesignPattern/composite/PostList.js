 class PostList {
    constructor(categoryCode) {
        this.categoryCode = categoryCode;
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    displayInfo() {
        return this.children.map(child => child.displayInfo());
    } 
}
export default PostList