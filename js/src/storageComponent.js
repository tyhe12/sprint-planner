'use strict';
class StorageComponent {
    constructor(item, config) {
        this.$el = $(item);
        this.el = item;
        this.events = config.events || {};

        this.initialize();
        this.bindEvents();
    }

    initialize() {
        this.input = this.$el.find("input");
        this.container = this.$el.find(".storage-container");
        this.panel = this.container.find('.panel');
    }

    bindEvents() {
        if (this.events) {
            for (var event in this.events) {
                var eventCallback = (this.events[event]).bind(this);
                this.$el.find("button").on(event, eventCallback);
            }
        }
    }
}