import Sortable from 'sortablejs';
import { Controller } from '@hotwired/stimulus';

export default class extends Controller {

    static values = {
        taskAction:  String,
        columnAction:  String,
        taskSelector: {
            type: String,
            default: '.task-list',
        },
        successMessage: {
            type: String,
            default: 'Sorting saved successfully.',
        },
        failureMessage: {
            type: String,
            default: 'Failed to save sorting.',
        },
    }
    
    connect() {
        console.log('Инициализация Sortable');
        this.element.querySelectorAll(this.taskSelectorValue).forEach(task => {
            new Sortable(task, {
                group: 'shared',
                animation: 150,
                onEnd: (evt) => this.reorderTasks(evt),
            });
        });

        this.columns = new Sortable(this.element, {
            animation: 150,
            onEnd: (evt) => this.reorderColumns(evt),
        });

    }


    reorderTasks(evt) {
        let order = Array.from(evt.to.children).map(item => item.dataset.id);
        let taskId = evt.item.dataset.id;
        let columnId = evt.to.dataset.statusId;
        let params = 
            { 
                task_id: taskId, 
                column_id: columnId, 
                order: order 
            };
        axios
            .post(this.taskActionValue, params)
            .then(() => this.toast(this.successMessageValue))
            .catch((error) => {
                console.error(error);
                this.toast(this.failureMessageValue, 'danger')
            });
    }


    reorderColumns(evt) {
        let order = Array.from(evt.to.children).map(item => item.dataset.id);
        let params = 
            { 
                order: order 
            };

        axios
            .post(this.columnActionValue, params)
            .then(() => this.toast(this.successMessageValue))
            .catch((error) => {
                console.error(error);
                this.toast(this.failureMessageValue, 'danger')
            });
    }

}