//Interface bat buoc nhung gi duoc khai bao phai duoc thuc thi trong class ke thua
//Ho tro da ke thua
interface Engine {
    name: string;
    principle(): void;
    supplier(): void;
}

interface Color {
    code: string;
    draw(): void;
}

class Cars implements Engine, Color {
    name: string;
    code: string;
    supp: string
    constructor(name: string, code: string, supp: string) {
        this.name = name;
        this.code = code;
        this.supp = supp;
    }

    principle = (): void => console.log({ engine: this.name });
    supplier = (): void => console.log({ supplier: this.supp });
    draw = (): void => console.log({ color: this.code })

    getInformation = (): void => console.log({ engine: this.name, colorCode: this.code, supplier: this.supp })
}

let turbo: Engine;
let red: Color;

turbo = new Cars("1.5 Turbo Extra", "#00000", "Korea, Asia");
turbo.principle()

//Cannot call red.principle(), because red not have this function

console.log("---------------------");
let v8: Cars;
v8 = new Cars("V8 Twin Turbo", "#ffffff", "Germary, Europe");

// v8.principle()
// v8.draw()
// v8.supplier()
v8.getInformation()

