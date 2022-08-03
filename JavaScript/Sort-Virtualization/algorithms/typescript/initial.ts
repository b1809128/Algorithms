//TODO: Init
const selectAlgorithmTS = document?.getElementById("algo-options") as HTMLSelectElement;
const selectOrderTS = document?.getElementById("order-options") as HTMLSelectElement;
const sortingContainerTS = document?.getElementById("sorting-view") as HTMLDivElement;
const sortingViewTS = document.querySelector("#sorting-view") as HTMLDivElement;
var numArray: Array<number> = [2, 1, 10, 6, 8, 9, 3, 19, 0, 5, 11, 16, 12, 14, 4, 17, 24, 29, 18, 30];


//TODO: INTERFACE
interface algorithms {
    name: string; value: string;
}

interface orders {
    name: string; value: string;
}

//TODO: CLASS
class InitAlgorithms {
    data: Array<algorithms>;
    constructor(data: Array<algorithms>) {
        this.data = data;
    }

    setAlgorithms = (data: Array<algorithms>) => {
        for (var i = 0; i < data.length; i++) {
            selectAlgorithmTS.options[selectAlgorithmTS.options.length] = new Option(
                data[i].name,
                data[i].value
            );
        }
    }

    getInformation = (): void => { console.log(this.data) }
}

class InitOrders {
    data: Array<orders>;
    constructor(data: Array<orders>) {
        this.data = data;
    }

    setOrders = (data: Array<orders>) => {
        for (var i = 0; i < data.length; i++) {
            selectOrderTS.options[selectOrderTS.options.length] = new Option(data[i].name, data[i].value)
        }
    }

    getInformation = (): void => console.log(this.data)
}

class InitBar {

    createBar = (arrSize: number) => {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        sortingContainerTS.innerHTML = "";
        // for (let i = 0; i < arrSize; i++) {
        //     numArray.push(Math.floor(Math.random() * arrSize));
        // }

        let currentOrders = selectOrderTS.options[selectOrderTS.selectedIndex].value;
        if (currentOrders === "reversed") {
            numArray = numArray.sort((a, b) => b - a);
        } else if (currentOrders === "sorted") {
            numArray = numArray.sort((a, b) => a - b);
        } else if (currentOrders === "random") {
            // numArray = numArray.map(data=>Math.floor(Math.random() * numArray.length))
        }

        for (let i = 0; i < numArray.length; i++) {
            let bar = document.createElement("div");
            bar.classList.add("bar");
            bar.style.height = windowHeight * numArray[i] * 0.006 + "px";
            bar.style.width = (windowWidth * 0.8) / arrSize - 1 + "px";
            let barTitle = document.createElement("label");
            barTitle.classList.add("bar-title");
            barTitle.innerHTML = numArray[i].toString();
            bar.appendChild(barTitle);
            sortingContainerTS.appendChild(bar);
        }
    }
}

class _SortAlgorithms extends InitBar {
    // data: Array<number>
    // constructor(data: Array<number>) {
    //     this.data = data;
    // }
    swapNode = (a: Node, b: Node) => {
        sortingViewTS.insertBefore(b, a);
    }

    bubbleSort = async () => {
        var bar = document.getElementsByClassName("bar") as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < bar.length - 1; i++) {
            for (let j = 0; j < bar.length - i - 1; j++) {
                const a = Number(bar[j].innerText);
                const b = Number(bar[j + 1].innerText);
                bar[j].style.transform = "translate(0, -5px)";
                bar[j + 1].style.transform = "translate(0, -5px)";
                await new Promise<void>((resolve) => { setTimeout(() => resolve(), 30) })
                if (a > b) {
                    this.swapNode(bar[j], bar[j + 1]);
                    bar = document.getElementsByClassName("bar") as HTMLCollectionOf<HTMLElement>;
                }
                bar[j].style.transform = "translate(0, 0)";
                bar[j + 1].style.transform = "translate(0, 0)";
            }
        }
    }

}

class Control extends _SortAlgorithms {

    reset = () => {
        this.createBar(20)
    }

    start = () => {
        let currentAlgorithm = selectAlgorithmTS.options[selectAlgorithmTS.selectedIndex].value;
        if (currentAlgorithm === "bubble") {
            this.bubbleSort()
        }
    }

    changeOrder = () => this.reset();

    changeSort = () => this.reset();
}



//TODO: SET UP
const algorithmsArray: Array<algorithms> = [
    { name: "Bubble Sort", value: "bubble" },
    { name: "Insert Sort", value: "insert" },
    { name: "Selection Sort", value: "selection" },
]

const ordersArray: Array<orders> = [
    { name: "Random", value: "random" },
    { name: "Reversed", value: "reversed" },
    { name: "Sorted", value: "sorted" },
];

const algo = new InitAlgorithms(algorithmsArray)
algo.setAlgorithms(algorithmsArray)

const ord = new InitOrders(ordersArray)
ord.setOrders(ordersArray)

const crt = new InitBar();
crt.createBar(20);

const ctrl = new Control()


// export { InitAlgorithms, InitOrders, InitBar }