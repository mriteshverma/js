document.addEventListener('alpine:init', () => {

    Alpine.data('calculator', () => ({
        input: '',
        output: '',
        operator: null,
        history: 0,

        getInput(input) {
            if (this.input !== '') {
                this.input = String(this.input).concat(String(input));
            } else {
                this.input = String(input);
            }
            return;
        },

        operand(operand) {
            if (this.input === '') return;

            if (this.output === '') {
                this.output = this.input;
            } else if (this.operator) {
                this.compute();
            }

            this.operator = operand;
            this.resetInput();
            return;
        },

        compute() {
            const o = Number(this.output);
            const i = Number(this.input);

            switch (this.operator) {

                case '+':
                    this.output = o + i;
                    break;

                case '-':
                    this.output = o - i;
                    break;

                case '*':
                    this.output = o * i;
                    break;

                case '/':
                    this.output = i === 0 ? 'Error' : o / i;
                    break;

                default:
                    break;
            }

            this.operator = null;
            this.resetInput()
            return;
        },

        resetInput() {
            this.input = '';
            return;
        },

        resetAll() {
            this.input = this.output = '';
            this.operator = null;
            console.log('reset')
            return;
        },
    }));
})
