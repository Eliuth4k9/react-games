class Entity {
    constructor(x, y, size, attributes) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.attributes = {...attributes}; //spread operator
    }

    action(verb, world) {
        console.log(`Verb: ${verb}`);
    }

    draw(context) {
        context.fillStyle = this.attributes.color || 'white';
        context.textBaseline = 'hanging';
        context.font = '16px Helvetica';
        context.fillText(
            this.attributes.ascii,
            //https://stackoverflow.com/questions/48104060/ascii-html-character-code-doesnt-work-within-react-variable some cool information to know about ascii in react
            this.x * this.size + (this.attributes.offset ? this.attributes.offset.x : 0), 
            this.y * this.size + (this.attributes.offset ? this.attributes.offset.y : 0),
        )
    }
}

export default Entity;