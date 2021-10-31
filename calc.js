
new Vue({
    el: "#app",
    data: {
        previous: null,
        current: '',
        operator: null,
        operatorClicked: false,
        second: '',
        third: '',
        list: [],
        lists: [],
        sign: "",
        second: ''
    },
    mounted() {
        if (localStorage.list) {
            this.list = localStorage.list;
        }
    },
    watch: {
        list(newList) {
            localStorage.list = newList;
        }
    },
    methods: {
        clear() {
            this.current = ''

        },
        append(number) {
            if (this.operatorClicked) {
                this.current = '';
                this.operatorClicked = false;
            }
            this.current = `${this.current}${number}`;
        },
        dot() {
            if(this.current.indexOf('.') === -1) {
                this.append('.');
            }
        },
        setPrevious() {
            this.previous = this.current;
            this.operatorClicked = true;
        },
        times() {
            this.sign = '*'
            this.operator = (a, b) => a * b;
            this.setPrevious();
        },
        divide() {
            this.sign = '/'
            this.operator = (a, b) => a / b;
            this.setPrevious();
        },
        add() {
            this.sign = '+'
            this.operator = (a, b) => a + b;
            this.setPrevious();
        },
        minus() {
            this.sign = '-'
            this.operator = (a, b) => a - b;
            this.setPrevious();
        },
        equal() {
            this.second = this.current
            this.current = `${this.operator(
                parseFloat(this.previous),
                parseFloat(this.current)
                )}`;
            
            this.list = this.previous + this.sign + 
            this.second + '=' + this.current;
            this.previous = null;
            this.lists.push(this.list)
        },
       
     
    }
});
