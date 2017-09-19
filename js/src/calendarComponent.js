'use strict';

class CalendarComponent {
    constructor(el, config) {
        this.$el = $(el);
        this.el = el;
        this.startDate = new Date(config.startDate); // this will be UTC date
        this.endDate = new Date(config.endDate);
        this.members = config.members;
        this.initialize();
    }
    
    initialize() {
        this.header = this.$el.find('div.calendar-header');
        this.container = this.$el.find('div.calendar-container');
        this.overlay = this.$el.find('div.calendar-overlay')
        this.initializeHeader();
        this.initializeDayBlocks();
    }
    
    initializeHeader() {
//        var header = '<ul class="box calendar-header"></ul>';
//        var boxes = '<ul class="calendar-boxes"></ul>';
//        
//        this.$el.append(header);
//        this.$el.append(boxes);
    }
    
    initializeDayBlocks() {
        this.drawCalendar();
    }
    
    drawCalendar() {
        var header = this.header.find('ul'),
            boxes = this.container.find('ul');
        
        header.empty();
        boxes.empty();
        
        header.append('<li class="member-title">Members</li>');
        boxes.append('<li class="box member-list"></li>');
        
        var today = new Date(this.startDate),
            number = 1;
        while (today < this.endDate) {
            if (today.getUTCDay() !== 0 && today.getUTCDay() !== 6) {
                header.append('<li class="day-title">' + today.getUTCDayString() + '</li>');
                boxes.append('<li class="box day"></div>');
                number++;
            }
            today.addDays(1);   
        }
    }
    
    addMember(member) {
        console.log(member);
        // create a new member
        // append new member
        this.overlay.append('<div>overlay for ' + member + '</div>')
//        this.container.find('.member-list').append('<div class="member">' + member + '</div>');
    }
    
    changeStartDate(startDate) {
        this.startDate = new Date(startDate);
        this.drawCalendar();
    }
    
    changeEndDate(endDate) {
        this.endDate = new Date(endDate);
        this.drawCalendar();
    }
}