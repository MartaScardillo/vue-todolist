const { createApp } = Vue;

createApp({
    data() {
        return {
            logoPath: './img/Logo.png',
            newTask: '',
            tasks: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],
        };
    },

    methods: {
        addTask() {
            if (this.newTask.length > 0) {
                this.tasks.push(
                    { 
                        text: this.newTask,
                        done: false
                    },
                );
            } else {
                this.newTask = ''
            }
        },

        log(text) {
            console.log(text);
        }
    },
}).mount('#app');
