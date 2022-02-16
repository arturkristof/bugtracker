class HelloWorld {
    private readonly message: string;

    constructor(_message: string) {
        this.message = _message;
    }

    getMessage(): string {
        return this.message;
    }
}

function component(message: string) {
    const element = document.createElement('div');

    element.innerHTML = message;

    return element;
}

const helloWorld = new HelloWorld("Hello, TypeScript!");
const message = helloWorld.getMessage();

document.body.appendChild(component(message));