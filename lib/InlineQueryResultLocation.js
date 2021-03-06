'use strict';
const extend = require('util')._extend;

function InlineQueryResultLocation(id, latitude, longitude, title, options) {
    extend(this, options);
    this.type = 'location';
    this.id = id;
    this.title = title;
    this.latitude = latitude;
    this.longitude = longitude;
}

module.exports = InlineQueryResultLocation;